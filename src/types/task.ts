// Tipo central do app. Todo mundo do grupo importa daqui.
export interface Task {
  id: string;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

// Dados de uma tarefa nova (ainda sem id), usados pelo TaskForm.
export type NovaTask = Omit<Task, 'id'>;

// Obs.: o CrudCrud devolve o identificador como "_id". A conversão para o
// campo "id" acima é feita em src/services/taskService.ts.
