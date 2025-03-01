import Contact from "../Contact/Contact";

const ContactList=({contactList})=>{
    return(
        <>
      <ul>
      
      {contactList.map((item)=>{

        return  <li key={item.id}><Contact item={item}/> </li>
      })}
    </ul>
        </>
    )
}


export default ContactList;