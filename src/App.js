
import React, { useState, useEffect } from 'react';
import SearchBar from './components/Search';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState('null');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  
  const handleSearch = (text) => {
    setSearchText(text);
  };

  //filtered contacts filterable by name email or phone number
  const filteredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(searchText.toLowerCase()) || 
    contacts.email.toLowerCase().includes(searchText.toLowerCase()) ||
    contacts.phone.toLowerCase().includes(searchText.toLowerCase()) 
  );

  const contactSelection = (contact) =>{
    setSelectedContact(contact);
  }
  
  return (
    <div id = "main">

      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} onClick = { () => contactSelection(contact) } >
            <h1 id = 'name' key = {contact.id}> {contact.name}</h1>
            <p id = 'phone' key = {contact.id}> Phone Number: {contact.phone}</p>
            <p id = 'email'key = {contact.id}> Email: {contact.email}</p>
          </li>
        ))}
      </ul>
      
      <div >
        <ul id = 'infoBar'>

        <SearchBar  id = 'search' handleSearch = {handleSearch} />

        <h2 id = 'info'>{selectedContact.name}</h2>

        {selectedContact.company ? (
          <p id= 'info'> {selectedContact.company.catchPhrase} </p>
        ) : ( null )}
        
        {selectedContact.address ? (
          <p id = 'info'>City:  {selectedContact.address.city} </p>
        ) : ( <p id = 'info'> No Selection </p>)}

        {selectedContact.address ? (
          <p id = 'info'>Street:  {selectedContact.address.street} </p>
        ) : ( null )}
        
        {selectedContact.company ? (
          <p id = 'info'>Company:  {selectedContact.company.name} </p>
        ) : ( null )}
        
        </ul>
      </div>
    </div>
  );
};

export default ContactList;