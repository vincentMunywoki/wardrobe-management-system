import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export default {
  async register(user) {
    return axios.post(`${API_URL}/register`, user);
  },

  async login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  },

  async logout(token) {
    return axios.post(`${API_URL}/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
};
