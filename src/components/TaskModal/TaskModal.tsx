import { useEffect } from "react";
import { X } from "lucide-react";

import { useTarefas } from "../../contexts/TarefasContext";
import type { Tarefa } from "../../types/Tarefa";
import { TaskForm } from "../TaskForm/TaskForm";

import "./TaskModal.css";

type NovaTarefa = Omit<Tarefa, "_id">;

type TaskModalProps = {
  aberto: boolean;
  aoFechar: () => void;
};

export function TaskModal({ aberto, aoFechar }: Readonly<TaskModalProps>) {
  const { adicionarTarefa } = useTarefas();

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

  async function salvarTarefa(novaTarefa: NovaTarefa) {
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
        className="task-modal__content"
        role="dialog"
        aria-modal="true"
        aria-label="Nova tarefa"
      >
        <button
          className="task-modal__close"
          type="button"
          aria-label="Fechar"
          onClick={aoFechar}
        >
          <X size={20} />
        </button>

        <TaskForm
          aoSalvar={salvarTarefa}
          aoCancelar={aoFechar}
        />
      </div>
    </div>
  );
}
