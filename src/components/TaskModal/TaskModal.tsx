import { useEffect } from "react";

import { useTasks } from "../../context/TaskContext";
import type { Tarefa } from "../../types/Tarefa";
import { TaskForm } from "../TaskForm/TaskForm";

import "./TaskModal.css";

type TaskModalProps = { aberto: boolean; aoFechar: () => void };

export function TaskModal({ aberto, aoFechar }: Readonly<TaskModalProps>) {
  const { adicionarTarefa } = useTasks();

  useEffect(() => {
    if (!aberto) {
      return;
    }

    function fecharComEsc(evento: KeyboardEvent) {
      if (evento.key === "Escape") {
        aoFechar();
      }
    }

    document.addEventListener("keydown", fecharComEsc);

    return () => document.removeEventListener("keydown", fecharComEsc);
  }, [aberto, aoFechar]);

  if (!aberto) {
    return null;
  }

  async function salvarTarefa(novaTarefa: Omit<Tarefa, "_id">) {
    await adicionarTarefa(novaTarefa);

    aoFechar();
  }

  // Fecha só quando o clique começa na camada escura, fora da caixa do formulário.
  function fecharAoClicarFora(evento: React.MouseEvent<HTMLDivElement>) {
    if (evento.target === evento.currentTarget) {
      aoFechar();
    }
  }

  return (
    <div className="task-modal" onMouseDown={fecharAoClicarFora}>
      <div
        className="task-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Nova tarefa"
      >
        <TaskForm aoSalvar={salvarTarefa} aoCancelar={aoFechar} />
      </div>
    </div>
  );
}
