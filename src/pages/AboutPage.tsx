import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className="about-page">
      <h2 className="about-page__titulo">Sobre o TaskFlow</h2>

      <p className="about-page__texto">
        O TaskFlow é um gerenciador de tarefas simples, feito como trabalho em
        grupo da faculdade. Ele usa React, TypeScript, Vite, React Router e
        Axios, consumindo a API do CrudCrud no recurso <code>/tasks</code>.
      </p>

      <h3 className="about-page__subtitulo">Integrantes</h3>
      <ul className="about-page__lista">
        <li>Gabriel Santoro</li>
        <li>Ronaldo Vieira</li>
        <li>Gabriel Marinho</li>
      </ul>
    </section>
  );
}
