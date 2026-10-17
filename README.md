# TaskFlow

Gerenciador de tarefas feito como trabalho em grupo da faculdade, partindo do
código da **aula 06** (Prof. José Carmino), seções 3 a 7, e da continuação
"TaskModal, estado compartilhado e separação de responsabilidades".

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
│   ├── TaskList/     TaskList.tsx + TaskList.css
│   └── TaskModal/    TaskModal.tsx + TaskModal.css
├── contexts/
│   └── TarefasContext.tsx TarefasProvider e o hook useTarefas()
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
├── App.tsx           BrowserRouter + TarefasProvider + rotas
└── main.tsx          render + estilos globais
```

Os arquivos CSS são os fornecidos pelo professor no `taskflow_css.zip`, e o
`TaskModal.css` é o da seção 6 da continuação. `Header.css`, `Layout.css` e
`TaskForm.css` têm no final algumas regras a mais, para o menu em telas menores
e para a mensagem de erro do formulário.

Rotas (filhas do `Layout`):

| Caminho | Página |
| --- | --- |
| `/` | `Today` (Hoje) |
| `/proximas` | `Upcoming` (Próximas) |
| `/tarefas` | `Tasks` (Todas as tarefas) |
| `/concluidas` | `Completed` (Concluídas) |
| qualquer outro | redireciona para `/` |

## Como funciona

- **`TarefasContext`** (`src/contexts/TarefasContext.tsx`): o `TarefasProvider`
  envolve as `Routes` em `App.tsx`, então o `Layout` e as páginas ficam abaixo
  dele. Ele guarda `tarefas`, `carregando` e `erro`. Ao montar, ele
  carrega as tarefas com `listarTarefas()` (`GET /tarefas`) num `useEffect` e
  expõe `adicionarTarefa` (`criarTarefa()`, `POST /tarefas`) e `removerTarefa`
  (`excluirTarefa()`, `DELETE /tarefas/:id`). Componentes e páginas acessam tudo
  isso pelo hook `useTarefas()`.
- **Página `Tasks`**: lê a lista, o carregamento e o erro do `useTarefas()`,
  exclui pelo `TaskCard` e tem o próprio botão **Nova tarefa**, que pega
  `abrirTaskModal` do `Layout` com `useOutletContext<LayoutContext>()`.
- **Criação de tarefas**: os três botões **Nova tarefa** (`Sidebar`, `Header` e
  página Tasks) abrem a mesma e única instância do `TaskModal`. O `Layout` guarda
  só o estado `taskModalAberto` (`abrirTaskModal`/`fecharTaskModal`), passa
  `aoNovaTarefa` ao `Header` e à `Sidebar` e repassa `abrirTaskModal` às páginas
  pelo `<Outlet context>`. Os dados e as operações das tarefas ficam no
  `TarefasProvider`, não no `Layout`.
- **`TaskModal`** (`src/components/TaskModal/`): props
  `{ aberto: boolean; aoFechar: () => void }`. Mostra uma camada sobre a página
  com o `TaskForm` dentro. Salvar chama `adicionarTarefa` e depois `aoFechar`.
  Fecha também pelo botão **X** no canto da janela, com **Cancelar**, com a
  tecla **Esc** e com um clique fora da caixa do formulário.
- **Telas menores (até 960px)**: a `Sidebar` fica escondida e abre pelo botão de
  menu do `Header`. Ela fecha ao escolher um link, ao clicar em **Nova tarefa**
  ou ao clicar fora dela.

### Erros tratados

- **API fora do ar ou endpoint expirado**: a página Tasks mostra
  "Não foi possível carregar as tarefas.".
- **`.env` ausente** (ou salvo como `.env.txt` no Windows): a mensagem avisa que
  a `VITE_API_URL` não está configurada. Depois de criar ou mudar o `.env`, é
  preciso reiniciar o `npm run dev`.
- **Falha ao criar**: o modal continua aberto com o que foi digitado e mostra o
  erro, para tentar de novo.
- **Título só com espaços**: o `TaskForm` recusa e pede um título.
- **Clique duplo em Excluir**: só um `DELETE` é enviado.
- **Rota inexistente**: redireciona para a página Hoje.

## Divisão do trabalho

A `main` tem o código da aula 06 e da continuação (`TaskModal`, estado
compartilhado e separação de responsabilidades).
Cada integrante trabalha na sua branch e abre PR para a `main`:

| Branch | Responsável por |
| --- | --- |
| `gabriel-santoro` | camada de serviço (`src/services/tarefaService.ts`) e abertura do modal (`Layout`, `Header`, `Sidebar` e botão da página Tasks) |
| `ronaldo-vieira` | contexto compartilhado de tarefas (`TarefasContext`) |
| `gabriel-marinho` | `TaskModal` usando o `TaskForm` |
