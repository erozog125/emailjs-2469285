import {useRef} from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();

    const serviceId = "service_22e9hes";
    const templateId = "template_havn4yo";
    
    const apiKey = "5CQTAYXP4nS0p-pWU";

    //Retorna una promesa
    emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
    .then( result => console.log(result.text))
    .catch( error => console.error(error))
  }

  
  return (
    <div className="contact-form">
            
      <h2>Contact Us</h2>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name='from_name' type="text" placeholder='Name' required/>
          <label htmlFor="email">Email:</label>
          <input  type="email" placeholder='email' name='email' id='email' required/>
          <label htmlFor="message">Message:</label>
          <textarea maxLength="500" name='message' id="message" />
          <button type='submit'>Send</button>
      </form>
    </div>
  )
}
