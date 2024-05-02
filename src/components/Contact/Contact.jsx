import css from "./Contact.module.css";
import {
  FaUser,
  // FaPencilAlt
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  // editContact
} from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  //Функція видалення контактів
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  //Function of edit contacts
  // const onEditContact = (contactId, formData) => {
  //   dispatch(editContact({ contactId, formData }));
  // };

  return (
    <li className={css.itemContact}>
      <div>
        <p>
          <span>
            <FaUser className={css.icon} />
          </span>
          <span>{contact.name}</span>
        </p>
        <p>
          <span>
            <BsFillTelephoneFill className={css.icon} />
          </span>
          <span>{contact.number}</span>
        </p>
      </div>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
      {/* <button type="button" onClick={() => onEditContact(contact.id)}>
        <span>
          <FaPencilAlt />
        </span>
      </button> */}
    </li>
  );
};

export default Contact;
