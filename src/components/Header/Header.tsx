import { Plus, Search } from "lucide-react";
import "./Header.css";

// abrirModal vem do Layout, que é quem guarda o estado do modal.
type HeaderProps = { abrirModal: () => void };

export function Header({ abrirModal }: Readonly<HeaderProps>) {
  return (
    <header className="header">
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
