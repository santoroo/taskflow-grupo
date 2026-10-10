import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { TaskModal } from "../TaskModal/TaskModal";
import "./Layout.css";

export function Layout() {
  // Estado de abertura do modal de nova tarefa.
  const [modalAberto, setModalAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
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
        abrirModal={abrirModal}
        menuAberto={menuAberto}
        fecharMenu={fecharMenu}
      />

      {menuAberto && (
        <div className="app-layout__backdrop" onClick={fecharMenu} />
      )}

      <div className="app-layout__content">
        <Header abrirModal={abrirModal} abrirMenu={abrirMenu} />

        <main className="app-layout__main">
          <Outlet />
        </main>
      </div>

      <TaskModal aberto={modalAberto} aoFechar={fecharModal} />
    </div>
  );
}
