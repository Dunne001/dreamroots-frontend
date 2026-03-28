import axios from 'axios';

const api = axios.create({
  baseURL: 'https://curly-yodel-x6q9r6jj94g3pgv4-8000.app.github.dev/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;