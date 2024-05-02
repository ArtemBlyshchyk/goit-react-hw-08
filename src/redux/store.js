import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contacts/slice";
// import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";

const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], //Observing for the state of token in the store
};

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filters: filtersReducer,
    auth: persistReducer(authPeristConfig, authReducer),
    phoneBook: contactsReducer,
    filterContacts: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
