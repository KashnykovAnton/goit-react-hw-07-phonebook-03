import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from 'services';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data;
    } catch (err) {
      return rejectWithValue(err.error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchAddContact(item);
      return data;
    } catch (err) {
      return rejectWithValue(err.error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchDeleteContact(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.error.message);
    }
  },
);
