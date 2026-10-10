import axios from "axios";
import type { Tarefa } from "../types/Tarefa";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const RECURSO = "/tarefas";

// Sem a VITE_API_URL (ex.: .env ausente), os pedidos iriam para o próprio Vite.
export const apiConfigurada = Boolean(import.meta.env.VITE_API_URL);

export async function listarTarefas() {
  const resposta = await api.get<Tarefa[]>(RECURSO);

  // Com a URL ausente ou errada, o pedido pode cair no servidor do Vite,
  // que responde com a página HTML em vez da lista de tarefas.
  if (!Array.isArray(resposta.data)) {
    throw new Error("A API não devolveu uma lista de tarefas.");
  }

  return resposta.data;
}

export async function criarTarefa(tarefa: Omit<Tarefa, "_id">) {
  const resposta = await api.post<Tarefa>(RECURSO, tarefa);
  return resposta.data;
}

export async function excluirTarefa(id: string) {
  await api.delete(`${RECURSO}/${id}`);
}
