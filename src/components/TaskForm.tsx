import { useState } from 'react';
import type { NovaTask, Task } from '../types';
import './TaskForm.css';

interface TaskFormProps {
  // Quando vem preenchido, o formulário está editando uma tarefa existente.
  tarefaInicial?: Task;
  // TODO (quem fizer o TaskContext): ligar este onSubmit nas ações de
  // criar / atualizar tarefa do contexto (que falam com src/services).
  onSubmit?: (dados: NovaTask) => void;
  // TODO (quem fizer o TaskModal): usar para fechar o modal no botão cancelar.
  onCancelar?: () => void;
}

export default function TaskForm({
  tarefaInicial,
  onSubmit,
  onCancelar,
}: TaskFormProps) {
  const [titulo, setTitulo] = useState(tarefaInicial?.titulo ?? '');
  const [descricao, setDescricao] = useState(tarefaInicial?.descricao ?? '');
  const [concluida, setConcluida] = useState(tarefaInicial?.concluida ?? false);

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (titulo.trim() === '') {
      return;
    }

    onSubmit?.({ titulo: titulo.trim(), descricao: descricao.trim(), concluida });
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__campo">
        <label className="task-form__label" htmlFor="titulo">
          Título
        </label>
        <input
          id="titulo"
          className="task-form__input"
          type="text"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Ex.: Estudar para a prova"
          required
        />
      </div>

      <div className="task-form__campo">
        <label className="task-form__label" htmlFor="descricao">
          Descrição
        </label>
        <textarea
          id="descricao"
          className="task-form__textarea"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Detalhes da tarefa (opcional)"
          rows={3}
        />
      </div>

      <label className="task-form__check">
        <input
          type="checkbox"
          checked={concluida}
          onChange={(evento) => setConcluida(evento.target.checked)}
        />
        Marcar como concluída
      </label>

      <div className="task-form__acoes">
        {onCancelar && (
          <button
            type="button"
            className="task-form__botao task-form__botao--cancelar"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="task-form__botao task-form__botao--salvar"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
