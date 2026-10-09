# TaskFlow

Gerenciador de tarefas feito como trabalho em grupo da faculdade.

**Stack:** React + TypeScript + Vite, React Router, Axios.
**API:** [CrudCrud](https://crudcrud.com) — recurso `/tasks`.

## Como rodar

```bash
npm install
cp .env.example .env   # e coloque o seu endpoint do CrudCrud
npm run dev
```

A variável `VITE_API_URL` guarda a URL base da API e é lida via
`import.meta.env.VITE_API_URL`. O `.env` não vai para o Git.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | sobe o servidor de desenvolvimento |
| `npm run build` | checa os tipos e gera o build em `dist/` |
| `npm run preview` | serve o build gerado |
| `npm run lint` | roda o oxlint |

## Estrutura

```
src/
├── components/     Layout, Header, TaskList, TaskCard, TaskForm (+ CSS em BEM)
├── pages/          TasksPage (lista) e AboutPage (sobre)
├── types/          tipo Task e NovaTask
├── App.tsx         rotas do React Router
└── main.tsx        BrowserRouter + render
```

Rotas: `/` (lista de tarefas) e `/sobre`.

## Divisão do trabalho

A `main` tem apenas a **base comum**: tipos, rotas, layout e componentes de
exibição. Nesta versão a lista aparece vazia de propósito — nada conversa com a
API ainda. Cada parte que falta está marcada com um comentário `TODO` no código:

| Branch | O que implementar | Onde estão os TODOs |
| --- | --- | --- |
| `gabriel-santoro` | `src/services` com o Axios (CRUD no CrudCrud) e a abertura do modal pelo Header/Layout | `src/types/task.ts`, `src/pages/TasksPage.tsx`, `src/components/Header.tsx`, `src/components/Layout.tsx` |
| `ronaldo-vieira` | `TaskContext` (estado global + ações das tarefas) | `src/main.tsx`, `src/components/TaskList.tsx`, `src/components/TaskCard.tsx`, `src/components/TaskForm.tsx` |
| `gabriel-marinho` | o componente `TaskModal` (que usa o `TaskForm` por dentro) | `src/components/TaskForm.tsx` |

> Observação: o CrudCrud devolve o identificador no campo `_id`. A camada de
> serviço precisa converter a resposta para o tipo `Task` (que usa `id`).

Cada integrante trabalha na sua branch e abre PR para a `main`.
