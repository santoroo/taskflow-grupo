import type { Task } from '../types';
import TaskCard from './TaskCard';
import './TaskList.css';

interface TaskListProps {
  tarefas: Task[];
}

// TODO (quem fizer o TaskContext): as tarefas podem passar a vir do
// useContext(TaskContext) em vez de prop, junto com os estados de
// carregando / erro da requisição.
export default function TaskList({ tarefas }: TaskListProps) {
  if (tarefas.length === 0) {
    return (
      <p className="task-list__vazio">
        Nenhuma tarefa por aqui. Crie a primeira em "Nova tarefa".
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        <TaskCard key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
