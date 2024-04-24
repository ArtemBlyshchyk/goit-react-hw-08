import axios from "axios";

const instance = axios.create({
  baseURL: "https://662636d4052332d5532210a4.mockapi.io/",
});

export const requestAllContacts = async () => {
  const { data } = await instance.get("contacts");
  return data;
};

export const requestAddContact = async (contact) => {
  const { data } = await instance.post("contacts", contact);
  return data;
};

export const requestDeleteContact = async (id) => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};
