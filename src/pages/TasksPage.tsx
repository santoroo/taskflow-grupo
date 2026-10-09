import TaskList from '../components/TaskList';
import type { Task } from '../types';
import './TasksPage.css';

export default function TasksPage() {
  // TODO (quem fizer src/services + TaskContext): trocar esta lista fixa pelas
  // tarefas vindas da API (GET em VITE_API_URL) através do TaskContext.
  // Nesta versão inicial a lista é sempre vazia de propósito.
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
