// import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "../filters/selectors";

export const selectPhoneBookContacts = (state) => state.phoneBook.contacts;

export const selectPhoneBookIsLoading = (state) => state.phoneBook.isLoading;

export const selectPhoneBookIsError = (state) => state.phoneBook.isError;

//Memomized selector
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (items, name) => {
//     return items.filter((contact) => {
//       return contact.name.toLowerCase().includes(name.toLowerCase());
//     });
//   }
// );
