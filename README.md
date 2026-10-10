# TaskFlow

Gerenciador de tarefas feito como trabalho em grupo da faculdade, partindo do
código da **aula 06** (Prof. José Carmino), seções 3 a 7.

**Stack:** React + TypeScript + Vite, React Router, Axios, lucide-react.
**API:** [CrudCrud](https://crudcrud.com) — recurso `/tarefas`.

## Como rodar

```bash
npm install
cp .env.example .env   # e coloque o seu endpoint do CrudCrud
npm run dev
```

O `.env` guarda o endereço base da API na variável `VITE_API_URL`
(ex.: `VITE_API_URL=https://crudcrud.com/api/SEU_ENDPOINT`), lida no código por
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
├── components/
│   ├── Header/       Header.tsx + Header.css
│   ├── Layout/       Layout.tsx + Layout.css
│   ├── Sidebar/      Sidebar.tsx + Sidebar.css
│   ├── TaskCard/     TaskCard.tsx + TaskCard.css
│   ├── TaskForm/     TaskForm.tsx + TaskForm.css
│   └── TaskList/     TaskList.tsx + TaskList.css
├── pages/
│   ├── Completed/    Completed.tsx
│   ├── Tasks/        Tasks.tsx + Tasks.css
│   ├── Today/        Today.tsx
│   └── Upcoming/     Upcoming.tsx
├── services/
│   └── tarefaService.ts   listarTarefas, criarTarefa, excluirTarefa (Axios)
├── styles/
│   ├── global.css
│   └── variables.css
├── types/
│   └── Tarefa.ts     tipos Tarefa e Prioridade
├── App.tsx           BrowserRouter + rotas
└── main.tsx          render + estilos globais
```

Os arquivos CSS são os fornecidos pelo professor (`taskflow_css.zip`).

Rotas (filhas do `Layout`):

| Caminho | Página |
| --- | --- |
| `/` | `Today` (Hoje) |
| `/proximas` | `Upcoming` (Próximas) |
| `/tarefas` | `Tasks` (Todas as tarefas) |
| `/concluidas` | `Completed` (Concluídas) |

A página `Tasks` segue a versão consolidada da seção 7.4: carrega as tarefas do
CrudCrud com `useEffect`, cadastra pelo `TaskForm` (`POST /tarefas`) e exclui
pelo `TaskCard` (`DELETE /tarefas/:id`).

## Divisão do trabalho

A `main` tem o código da aula 06. Cada integrante trabalha na sua branch e
abre PR para a `main`:

| Branch | Responsável por |
| --- | --- |
| `gabriel-santoro` | camada de serviço (`src/services/tarefaService.ts`) e abertura do modal no `Layout`/`Header` |
| `ronaldo-vieira` | contexto compartilhado de tarefas |
| `gabriel-marinho` | `TaskModal` usando o `TaskForm` |

### Abertura do modal (gabriel-santoro)

O `Layout` guarda o estado `modalAberto` e as funções `abrirModal` e
`fecharModal`. O botão **Nova tarefa** do `Header` recebe `abrirModal` por
props. O ponto onde o `<TaskModal />` deve ser renderizado está marcado com um
`TODO` em `src/components/Layout/Layout.tsx`.
