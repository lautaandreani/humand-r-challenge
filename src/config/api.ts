import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 15000,
});

export default api;