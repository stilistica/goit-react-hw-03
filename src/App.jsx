import './App.css'
import ContactForm from './components/contactForm/ContactForm.jsx';
import SearchBox from "./components/searchBox/SearchBox.jsx";
import ContactList from "./components/contactList/ContactList.jsx";
import contactsAll from './assets/contacts.json'
import {useState} from "react";

function App() {
const [contacts, setContacts] = useState(contactsAll);
const [filter, setFilter] = useState('');

const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
}
const onDelete = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
}
const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
        <SearchBox name={filter} onFilter={setFilter}/>
        <ContactList contacts={visibleContacts} onDelete={onDelete}/>
      </div>
  )
}

export default App
