// Tipo central do app. Todo mundo do grupo importa daqui.
export interface Task {
  id: string;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

// Dados de uma tarefa nova (ainda sem id), usados pelo TaskForm.
export type NovaTask = Omit<Task, 'id'>;

// TODO (quem fizer src/services): o CrudCrud devolve o identificador como "_id".
// A camada de serviço deve mapear a resposta da API para o tipo Task acima
// (ex.: { _id, ...resto } => { id: _id, ...resto }).
