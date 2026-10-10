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

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-layout__content">
        <Header abrirModal={abrirModal} />

        <main className="app-layout__main">
          <Outlet />
        </main>
      </div>

      <TaskModal aberto={modalAberto} aoFechar={fecharModal} />
    </div>
  );
}
