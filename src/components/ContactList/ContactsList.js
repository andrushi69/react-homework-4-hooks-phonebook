import React from "react";
import styles from "./ContactList.module.scss"


const ContactsList = ({contacts, deleteContact}) => {
  return (
    <ul className={styles.contact_list}>
      {contacts.map(({id, name, number}) => {
        return (
          <li key={id}><span className={styles.name}>{name}:</span><span
            className={styles.number}>{number}</span>
            {<button type="button" name="delete"
                     onClick={() => deleteContact(id)}>Delete</button>}
          </li>
        )
      })}

    </ul>

  )
}
export default ContactsList


