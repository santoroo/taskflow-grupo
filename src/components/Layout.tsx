import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="layout__conteudo">
        <Outlet />
      </main>

      {/*
        TODO (quem fizer o TaskModal): renderizar o <TaskModal /> aqui,
        controlado pelo estado de "modal aberto" (useState local ou TaskContext).
      */}
    </div>
  );
}
