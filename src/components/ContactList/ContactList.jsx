import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList=({contactList,onDeleted})=>{
    return(
        <>
      <ul className={css.ul}>
      
      {contactList.map((item)=>{

        return  <li key={item.id}><Contact item={item} onDeleted={onDeleted}/> </li>
      })}
    </ul>
        </>
    )
}


export default ContactList;