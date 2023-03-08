import React,{ useRef }from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef () ;

  const handleSubmit =(event) =>{
   event.preventDefault();
   console.log(refForm.current);
   const serviceId = "service_8gtjh0h";
   const templateId = "template_bcal9yo";
   //3 parametro
   const apikey = "DDUHXGIFhQScn-nBL";

   emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
   .then( result => console.log(result.text))
   .catch(error => console.error(error) )
  }
  

  return (
    <form ref ={refForm} action="" onSubmit={handleSubmit}>
    <div className='header-contact'>
      <h2>Contact Us</h2>
     <p>please fill this form</p>

    </div>

    <fieldset className='field-name'>
    <label className ='symbol-required name'htmlFor="">Name</label>
    <input name='username' type="text" placeholder='Escribe tu nombre' required />
    </fieldset>
    
    <fieldset className='field-email'>
    <label className ='symbol-required' name='email'>Email</label>
    <input placeholder='ej: Email'  type="email" name="email" required/>
    </fieldset>

    <fieldset className='field-message'>
    <label className ='symbol-required'>Message</label>
    <textarea maxLength="100" placeholder='type you message' name="message" id = "" cols="30" rows="10"></textarea>
    </fieldset>

    <button className='btn-send'>Send</button>
    </form>
  )
}
