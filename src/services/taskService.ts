import type { NovaTask, Task } from '../types';
import api from './api';

const RECURSO = '/tasks';

// Formato cru do CrudCrud: os mesmos campos da tarefa, mas com o id em "_id".
interface TaskResposta extends NovaTask {
  _id: string;
}

// Converte a resposta da API para o tipo Task usado no app.
function paraTask({ _id, ...resto }: TaskResposta): Task {
  return { id: _id, ...resto };
}

export async function getTasks(): Promise<Task[]> {
  const { data } = await api.get<TaskResposta[]>(RECURSO);
  return data.map(paraTask);
}

export async function createTask(dados: NovaTask): Promise<Task> {
  const { data } = await api.post<TaskResposta>(RECURSO, dados);
  return paraTask(data);
}

export async function updateTask(tarefa: Task): Promise<Task> {
  // O CrudCrud recusa um PUT que traga o _id no corpo, então mandamos
  // apenas os campos editáveis e o id vai só na URL.
  const { titulo, descricao, concluida } = tarefa;
  await api.put(`${RECURSO}/${tarefa.id}`, { titulo, descricao, concluida });
  return tarefa;
}

export async function deleteTask(id: string): Promise<void> {
  await api.delete(`${RECURSO}/${id}`);
}
