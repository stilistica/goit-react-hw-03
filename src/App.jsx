import './App.css'
import ContactForm from './components/contactForm/ContactForm.jsx';
import SearchBox from "./components/searchBox/SearchBox.jsx";
import ContactList from "./components/contactList/ContactList.jsx";
import contactsAll from './assets/contacts.json'
import {useEffect, useState} from "react";

function App() {
const [contacts, setContacts] = useState(() => {
    const savesContacts = localStorage.getItem('contacts');
    return savesContacts ? JSON.parse(savesContacts) : contactsAll;
});
const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

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
