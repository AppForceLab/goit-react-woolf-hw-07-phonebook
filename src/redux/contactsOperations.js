import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api'; // Убедитесь, что пути корректны

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchContactsApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await api.addContactApi(contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await api.deleteContactApi(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
