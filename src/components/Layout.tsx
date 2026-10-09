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

  // O <TaskModal /> ainda não existe (vem da branch gabriel-marinho), então
  // "modalAberto" e "fecharModal" ainda não têm quem os consuma. Os dois "void"
  // abaixo apenas evitam o erro de variável não usada do tsc e devem ser
  // apagados quando o modal for plugado no lugar marcado pelo TODO lá embaixo.
  void modalAberto;
  void fecharModal;

  return (
    <div className="layout">
      <Header abrirModal={abrirModal} />

      <main className="layout__conteudo">
        <Outlet />
      </main>

      {/*
        TODO (branch gabriel-marinho): o <TaskModal /> entra exatamente aqui,
        recebendo o estado e a função de fechar que já estão prontos acima:

        <TaskModal aberto={modalAberto} onFechar={fecharModal} />
      */}
    </div>
  );
}
