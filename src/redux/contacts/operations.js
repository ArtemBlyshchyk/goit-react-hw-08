import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";
// import {
//   requestAddContact,
//   requestAllContacts,
//   requestDeleteContact,
// } from "../../services/api.js";

// Return all contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log("GET data: ", data);
      return data; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// //Added new contact
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/contacts", formData);
      console.log("addContact data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Remove contact
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Update contact
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, formData }, thunkApi) => {
    try {
      const { data } = await instance.patch(`/contacts/${contactId}`, formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
