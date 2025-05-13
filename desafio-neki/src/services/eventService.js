import axios from 'axios';

const EVENT_URL = 'http://localhost:8080/event';

export const fetchEventsByAdmin = async (adminId) => {
  return axios.get(`${EVENT_URL}/admin/${adminId}`);
};

export const createEvent = async (eventData) => {
  return axios.post(`${EVENT_URL}/create`, eventData);
};

export const uploadImage = async (id, file) => {
  const formData = new FormData();
  formData.append('image', file);
  return axios.post(`${EVENT_URL}/${id}/upload-image`, formData);
};

export const updateEvent = async (id, data) => {
  return axios.put(`${EVENT_URL}/update/${id}`, data);
};

export const deleteEvent = async (id) => {
  return axios.delete(`${EVENT_URL}/delete/${id}`);
};
