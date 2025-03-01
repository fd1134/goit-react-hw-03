
import { useState} from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
function App() {
  console.log("render");
  
 
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');
  const addContact=(newContact)=>{   
       
    setContacts((prevContacts)=> [
     
       newContact ,
      ...prevContacts
    ]);
  }
  
  const visibleConatacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
   
  return (
    <>
     <h1>Phonebook</h1>
     <ContactForm  addContact={addContact}/>
     <SearchBox filterContact={setFilter}/>
     <ContactList  contactList={visibleConatacts}/>
    

    </>
  )
}

export default App
