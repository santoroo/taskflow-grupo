/// <reference types="vite/client" />

// Tipagem da variável de ambiente usada pela camada de serviço.
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
