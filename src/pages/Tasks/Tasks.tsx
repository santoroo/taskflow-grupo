import { useState } from "react";

import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";
import { useTasks } from "../../context/TaskContext";
import type { Tarefa } from "../../types/Tarefa";

import "./Tasks.css";

export function Tasks() {
  const { tarefas, carregando, erro, adicionarTarefa, removerTarefa } = useTasks();

  const [formularioAberto, setFormularioAberto] = useState(false);

  async function salvarTarefa(novaTarefa: Omit<Tarefa, "_id">) {
    await adicionarTarefa(novaTarefa);

    setFormularioAberto(false);
  }

  return (
    <section className="tasks-page">
      <div className="tasks-page__heading">
        <div>
          <p className="page-eyebrow">
            VISÃO GERAL
          </p>

          <h1>Todas as tarefas</h1>

          <p>
            Visualização completa das tarefas
            cadastradas.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            setFormularioAberto(true)
          }
        >
          Nova tarefa
        </button>
      </div>

      {erro && (
        <p className="tasks-page__error">
          {erro}
        </p>
      )}

      {formularioAberto && (
        <TaskForm
          aoSalvar={salvarTarefa}
          aoCancelar={() =>
            setFormularioAberto(false)
          }
        />
      )}

      {carregando ? (
        <p>Carregando tarefas...</p>
      ) : (
        <TaskList tarefas={tarefas} aoExcluir={removerTarefa} />
      )}
    </section>
  );
}
