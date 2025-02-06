import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
    return (
        <div className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
            ))}
        </div>
    );
}

export default ContactList;
