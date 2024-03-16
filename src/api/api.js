import axios from 'axios';

const API_URL = 'https://65f58f5b41d90c1c5e09b2c7.mockapi.io/contacts';

export const fetchContactsApi = () => axios.get(API_URL);
export const addContactApi = (contact) => axios.post(API_URL, contact);
export const deleteContactApi = (contactId) => axios.delete(`${API_URL}/${contactId}`);
