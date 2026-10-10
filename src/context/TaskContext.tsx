import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import {
  apiConfigurada,
  criarTarefa,
  excluirTarefa,
  listarTarefas,
} from "../services/tarefaService";
import type { Tarefa } from "../types/Tarefa";

type TaskContextValor = {
  tarefas: Tarefa[];
  carregando: boolean;
  erro: string;
  adicionarTarefa: (novaTarefa: Omit<Tarefa, "_id">) => Promise<void>;
  removerTarefa: (id: string) => Promise<void>;
};

const TaskContext = createContext<TaskContextValor | null>(null);

type TaskProviderProps = { children: ReactNode };

export function TaskProvider({ children }: Readonly<TaskProviderProps>) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const [carregando, setCarregando] = useState(true);

  const [erro, setErro] = useState("");

  // Ids com exclusão em andamento: evita mandar dois DELETE no clique duplo.
  const idsExcluindo = useRef(new Set<string>());

  useEffect(() => {
    async function carregarTarefas() {
      try {
        setCarregando(true);
        setErro("");

        const dados = await listarTarefas();

        setTarefas(dados);
      } catch {
        setErro(
          apiConfigurada
            ? "Não foi possível carregar as tarefas."
            : "Não foi possível carregar as tarefas: a VITE_API_URL não está configurada no .env.",
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarTarefas();
  }, []);

  // Sem try/catch: se a API falhar, o erro chega ao TaskForm, que avisa
  // dentro do modal e mantém o que foi digitado.
  async function adicionarTarefa(novaTarefa: Omit<Tarefa, "_id">) {
    const tarefaCriada = await criarTarefa(novaTarefa);

    setErro("");

    setTarefas((tarefasAtuais) => [
      tarefaCriada,
      ...tarefasAtuais,
    ]);
  }

  async function removerTarefa(id: string) {
    if (idsExcluindo.current.has(id)) {
      return;
    }

    idsExcluindo.current.add(id);

    try {
      setErro("");

      await excluirTarefa(id);

      setTarefas((tarefasAtuais) =>
        tarefasAtuais.filter(
          (tarefa) => tarefa._id !== id,
        ),
      );
    } catch {
      setErro(
        "Não foi possível excluir a tarefa.",
      );
    } finally {
      idsExcluindo.current.delete(id);
    }
  }

  return (
    <TaskContext.Provider
      value={{ tarefas, carregando, erro, adicionarTarefa, removerTarefa }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// O hook fica junto do TaskProvider; editar este arquivo só recarrega a página no dev.
// oxlint-disable-next-line react/only-export-components
export function useTasks() {
  const contexto = useContext(TaskContext);

  if (!contexto) {
    throw new Error("useTasks deve ser usado dentro de um TaskProvider.");
  }

  return contexto;
}
