import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:8000', // Replace with your API base URL
});

export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/admin/create', data);

export const getEvents = () => api.get('/event/list');
export const deleteEvent = (id) => api.delete(`/event/delete/${id}`);
export const createEvent = (data) => api.post('/event/create', data);
export const updateEvent = (id, data) => api.put(`/event/update/${id}`, data);
export const getEventById = (id) => api.get(`/event/${id}`);
export const getEventByName = (name) => api.get(`/event/${name}`);
export const getEventByDate = (date) => api.get(`/event/date/${date}`);
export const getEventByLocation = (location) => api.get(`/event/location/${location}`);

export default api;

