import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { TaskModal } from "../TaskModal/TaskModal";
import "./Layout.css";

export type LayoutContext = {
  abrirTaskModal: () => void;
};

export function Layout() {
  const [taskModalAberto, setTaskModalAberto] =
    useState(false);

  function abrirTaskModal() {
    setTaskModalAberto(true);
  }

  function fecharTaskModal() {
    setTaskModalAberto(false);
  }

  // Em telas menores a Sidebar fica escondida e abre pelo botão de menu do Header.
  const [menuAberto, setMenuAberto] = useState(false);

  function abrirMenu() {
    setMenuAberto(true);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <div className="app-layout">
      <Sidebar
        aoNovaTarefa={abrirTaskModal}
        menuAberto={menuAberto}
        aoFecharMenu={fecharMenu}
      />

      {menuAberto && (
        <div className="app-layout__backdrop" onClick={fecharMenu} />
      )}

      <div className="app-layout__content">
        <Header
          aoNovaTarefa={abrirTaskModal}
          aoAbrirMenu={abrirMenu}
        />

        <main className="app-layout__main">
          <Outlet
            context={{
              abrirTaskModal,
            }}
          />
        </main>
      </div>

      <TaskModal
        aberto={taskModalAberto}
        aoFechar={fecharTaskModal}
      />
    </div>
  );
}
