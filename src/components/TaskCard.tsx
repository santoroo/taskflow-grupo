import type { Task } from '../types';
import './TaskCard.css';

interface TaskCardProps {
  tarefa: Task;
}

export default function TaskCard({ tarefa }: TaskCardProps) {
  const classeCard = tarefa.concluida
    ? 'task-card task-card--concluida'
    : 'task-card';

  return (
    <li className={classeCard}>
      <div className="task-card__info">
        <h3 className="task-card__titulo">{tarefa.titulo}</h3>
        {tarefa.descricao && (
          <p className="task-card__descricao">{tarefa.descricao}</p>
        )}
      </div>

      <span className="task-card__status">
        {tarefa.concluida ? 'Concluída' : 'Pendente'}
      </span>

      {/*
        TODO (quem fizer o TaskContext): adicionar aqui os botões de
        concluir / editar / excluir, chamando as ações do contexto.
      */}
    </li>
  );
}
