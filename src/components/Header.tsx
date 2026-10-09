import { NavLink } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  // Vem do Layout, que é quem guarda o estado do modal.
  abrirModal: () => void;
}

export default function Header({ abrirModal }: HeaderProps) {
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

      <button
        type="button"
        className="header__botao-nova"
        onClick={abrirModal}
      >
        Nova tarefa
      </button>
    </header>
  );
}
