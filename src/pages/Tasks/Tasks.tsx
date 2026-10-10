import { TaskList } from "../../components/TaskList/TaskList";
import { useTasks } from "../../context/TaskContext";

import "./Tasks.css";

export function Tasks() {
  const { tarefas, carregando, erro, removerTarefa } = useTasks();

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
      </div>

      {erro && (
        <p className="tasks-page__error">
          {erro}
        </p>
      )}

      {carregando ? (
        <p>Carregando tarefas...</p>
      ) : (
        <TaskList tarefas={tarefas} aoExcluir={removerTarefa} />
      )}
    </section>
  );
}
