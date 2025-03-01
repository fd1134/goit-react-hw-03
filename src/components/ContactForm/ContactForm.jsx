import { Formik ,Form,Field} from "formik";
import {useId } from "react";

const ContactForm=({addContact})=>{
    const nameFieldId = useId();
    const numberFieldId = useId();
  
    const handleSubmit=(values,action)=>{
        
        addContact(values);
        action.resetForm();

    }
  
    return <>
    <Formik initialValues={{name:"",number:"",id:""}} onSubmit={handleSubmit}>
        <Form>
            <Field type="text" name="name" id={nameFieldId}/>
            <Field type="text" name="number" id={numberFieldId}  />
            <Field type="text" name="id" id={useId()}  />
            <button type="submit">Add Contact</button>
        </Form>
    </Formik>
    
    
    </>

}

export default ContactForm;