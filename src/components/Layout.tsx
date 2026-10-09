import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.css';

export default function Layout() {
  // Estado de abertura do modal de nova tarefa.
  const [modalAberto, setModalAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  return (
    <div className="layout">
      <Header abrirModal={abrirModal} />

      <main className="layout__conteudo">
        <Outlet />
      </main>

      {/*
        TODO (branch gabriel-santoro): controlar aqui o estado de "modal aberto"
        (useState local ou TaskContext) e renderizar o <TaskModal />, passando a
        função de abrir para o Header.
        O componente <TaskModal /> em si vem da branch gabriel-marinho.
      */}
    </div>
  );
}
