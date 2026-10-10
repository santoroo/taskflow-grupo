import { Menu, Plus, Search } from "lucide-react";
import "./Header.css";

// abrirModal e abrirMenu vêm do Layout, que guarda o estado do modal e do menu.
type HeaderProps = { abrirModal: () => void; abrirMenu: () => void };

export function Header({ abrirModal, abrirMenu }: Readonly<HeaderProps>) {
  return (
    <header className="header">
      <button
        className="header__menu"
        type="button"
        aria-label="Abrir menu"
        onClick={abrirMenu}
      >
        <Menu size={20} />
      </button>

      <div className="header__search">
        <Search size={18} />
        <input
          type="search"
          placeholder="Buscar tarefas..."
          aria-label="Buscar tarefas"
        />
      </div>

      <button className="header__new-task" type="button" onClick={abrirModal}>
        <Plus size={18} />
        Nova tarefa
      </button>
    </header>
  );
}
