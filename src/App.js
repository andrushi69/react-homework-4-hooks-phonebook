import {useEffect, useState} from "react";
import Form from "./components/FormList/Form";
import Filter from "./components/Search/Search";
import ContactsList from "./components/ContactList/ContactsList";
import {v4 as uuidv4} from 'uuid';


const App = () => {

  const [filter, setFilter] = useState("")
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts") || []
    )
  })
  const [filterContacts, setFilterContacts] = useState([])

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    }
    setContacts(prevState => [...prevState, contact]);
  }
  const changeFilter = (e) => {
    setFilter(e.target.value)
    setFilterContacts(contacts.filter(contact => contact.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())))
  }
  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(({id}) => id !== contactId))
  }

  return (
    <div className={"main_content"}>
      <h1>Phonebook</h1>
      <Form getContact={addContact}/>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter value={filter} onChange={changeFilter}/>
      <ContactsList deleteContact={deleteContact}
                    contacts={!filterContacts.length ? contacts : filterContacts}/>
    </div>
  )

}
export default App