import axios from 'axios';

// URL base da API, vinda do .env (ex.: https://crudcrud.com/api/<seu-endpoint>).
// O recurso /tasks não entra aqui: ele fica no taskService.
const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  console.warn(
    'VITE_API_URL não definida. Copie o .env.example para .env e cole o seu endpoint do CrudCrud.',
  );
}

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
