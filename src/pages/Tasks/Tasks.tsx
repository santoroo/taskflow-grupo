import { TaskList } from "../../components/TaskList/TaskList";
import { tarefasIniciais } from "../../data/tarefasIniciais";
import "./Tasks.css";

export function Tasks() {
  return (
    <section className="tasks-page">
      <div className="tasks-page__heading">
        <div>
          <p className="page-eyebrow">VISÃO GERAL</p>
          <h1>Todas as tarefas</h1>
          <p>
            Visualização completa das tarefas cadastradas.
          </p>
        </div>
      </div>

      <TaskList tarefas={tarefasIniciais} />
    </section>
  );
}
