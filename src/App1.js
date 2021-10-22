// import {useEffect, useState} from "react";
// import Form from "./components/FormList/Form";
// import Filter from "./components/Search/Search";
// import ContactsList from "./components/ContactList/ContactsList";
// import {v4 as localID} from "uuid";
//
// // const useSavedLocalStorage = (key, defaultValue) => {
// //   const [state, setState] = useState(() => {
// //     return JSON.parse(window.localStorage.getItem(key)) || defaultValue
// //   })
// //   useEffect(() => {
// //     window.localStorage.setItem(key, JSON.stringify(state))
// //   }, [key, state])
// //
// //   return [state, setState]
// // }
//
//
// const App = () => {
//   const [filter, setFilter] = useState("")
//   const [contacts, setContacts] = useState([])
//   const [filterContacts, setFilterContacts] = useState([])
//
//
//   const addContact = (contact) => {
//     if (contacts.filter((e) => (e.name === contact.name && e.number === contact.number)).length) {
//       alert(`${contact.name} is already in contacts`);
//     } else {
//       let array = [...contacts]
//       array.push(contact)
//       setContacts(array)
//       contact.id = localID()
//     }
//   }
//   const formSubmitHandler = (data) => {
//     console.log(data)
//   }
//   const changeFilter = (el) => {
//     setFilter(el.target.value)
//     setFilterContacts(contacts.filter(contact => contact.name.toLowerCase().includes(el.currentTarget.value.toLowerCase())))
//   }
//   const deleteContact = (contactId) => {
//     setContacts(prevState => prevState.filter(({id}) => id !== contactId))
//   }
//
//   return (
//     <div className={"main_content"}>
//       <h1>Phonebook</h1>
//       <Form onSubmit={formSubmitHandler} getContact={addContact}/>
//       <h2>Contacts</h2>
//       <p>Find contacts by name</p>
//       <Filter value={filter} onChange={changeFilter}/>
//       <ContactsList deleteContact={deleteContact}
//                     contacts={!filterContacts.length ? contacts : filterContacts}/>
//     </div>
//   )
//
// }
// export default App