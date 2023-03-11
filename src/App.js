
import React, { useState, useEffect } from 'react';

const ContactList = () => {                     
  const [contacts, setContacts] = useState([]);                      //contacts[], set through set contacts called through useEffect
  const [searchText, setSearchText] = useState('');                  //Seach text  set through setseach test, called through Html INPUT tag      
  const [selectedContact, setSelectedContact] = useState('null');   //Selected contacts set through setSelectedContact, called through LI -> onclick event

  useEffect(() => {                                 //Fetech placeholder data 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);
  
  const handleSearch = (text) => {        //sets search text to be used as a filter for the filtered contacts method
    setSearchText(text);
  };

  const filteredContacts = contacts.filter((contacts) =>                    //filtered contacts filterable by name email or phone number
    contacts.name.toLowerCase().includes(searchText.toLowerCase()) || 
    contacts.email.toLowerCase().includes(searchText.toLowerCase()) ||
    contacts.phone.toLowerCase().includes(searchText.toLowerCase()) 
  );

  const contactSelection = (contact) =>{        //Sets the contactSelection variable by passing a contact. Called through onclick
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

            <input type="text" placeholder="Search: Name, Email or phone" onChange={(event) => handleSearch(event.target.value)}/>

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