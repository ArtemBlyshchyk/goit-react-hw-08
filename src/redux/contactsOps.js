import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddContact,
  requestAllContacts,
  requestDeleteContact,
} from "../services/api";

// Return all contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await requestAllContacts();
      return data; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Added new contact
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const data = await requestAddContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Remove contact
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const data = await requestDeleteContact(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
