import TaskList from '../components/TaskList';
import type { Task } from '../types';
import './TasksPage.css';

export default function TasksPage() {
  // TODO (branch ronaldo-vieira): trocar esta lista fixa pelas tarefas do
  // TaskContext, que deve carregá-las com getTasks() de src/services.
  // Enquanto o contexto não existe, a lista fica vazia de propósito.
  const tarefas: Task[] = [];

  return (
    <section className="tasks-page">
      <div className="tasks-page__cabecalho">
        <h2 className="tasks-page__titulo">Minhas tarefas</h2>
        <span className="tasks-page__contador">
          {tarefas.length} tarefa(s)
        </span>
      </div>

      <TaskList tarefas={tarefas} />
    </section>
  );
}
