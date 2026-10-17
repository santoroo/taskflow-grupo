import { Menu, Plus, Search } from "lucide-react";
import "./Header.css";

type HeaderProps = {
  aoNovaTarefa: () => void;
  // Abre a Sidebar em telas menores.
  aoAbrirMenu: () => void;
};

export function Header({
  aoNovaTarefa,
  aoAbrirMenu,
}: Readonly<HeaderProps>) {
  return (
    <header className="header">
      <button
        className="header__menu"
        type="button"
        aria-label="Abrir menu"
        onClick={aoAbrirMenu}
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

      <button
        className="header__new-task"
        type="button"
        onClick={aoNovaTarefa}
      >
        <Plus size={18} />
        Nova tarefa
      </button>
    </header>
  );
}
