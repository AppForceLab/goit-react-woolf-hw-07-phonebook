import axios from 'axios';

const api = axios.create({
  baseURL: 'https://65f58f5b41d90c1c5e09b2c7.mockapi.io/contacts',
});

export const fetchContactsApi = () => api.get('/');
export const addContactApi = (contact) => api.post('/', contact);
export const deleteContactApi = (contactId) => api.delete(`/${contactId}`);
