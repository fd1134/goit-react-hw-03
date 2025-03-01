import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ item, onDelete }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactItem1}>
      <p><FaUser className={css.icon} /> {item.name}</p>
      <p><FaPhoneAlt className={css.icon} /> {item.number}</p>
      </div>
      <button onClick={() => onDelete(item.id)} className={css.deleteBtn}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
