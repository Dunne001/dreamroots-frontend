import axios from 'axios';

const api = axios.create({
  baseURL: 'https://symmetrical-disco-g9w5x9ggx7vc9pjr-8000.app.github.dev/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;
