import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const register = async (name, email, password) => {
  return axios.post(`${API_URL}/register`, { name, email, password });
};