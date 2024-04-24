import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

//Memomized selector
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) => {
    return items.filter((contact) => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });
  }
);
