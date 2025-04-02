import s from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
