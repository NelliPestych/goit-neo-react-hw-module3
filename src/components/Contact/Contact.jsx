import styles from "./Contact.module.css";

function Contact({ id, name, number, deleteContact }) {
    return (
        <div className={styles.contact}>
            <p>
                <strong>{name}</strong>
            </p>
            <p>{number}</p>
            <button onClick={() => deleteContact(id)}>Delete</button>
        </div>
    );
}

export default Contact;
