import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactList, onDelete }) => {
 
  return (
    <>
      <ul className={css.contactList}>
        {contactList.map((item) => (
          <li key={item.id}>
            <Contact item={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
