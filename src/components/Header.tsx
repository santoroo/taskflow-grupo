import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">TF</span>
        <h1 className="header__title">TaskFlow</h1>
      </div>

      <nav className="header__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'header__link header__link--ativo' : 'header__link'
          }
        >
          Tarefas
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--ativo' : 'header__link'
          }
        >
          Sobre
        </NavLink>
      </nav>

      {/*
        TODO (branch gabriel-santoro): este botão deve abrir o modal de nova
        tarefa, acionando o estado de "modal aberto" que mora no Layout.
        O componente <TaskModal /> em si vem da branch gabriel-marinho.
        Por enquanto o botão não tem ação nenhuma.
      */}
      <button type="button" className="header__botao-nova">
        Nova tarefa
      </button>
    </header>
  );
}
