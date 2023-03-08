import React , { useRef }from 'react';
import  './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  
const reForm = useRef();
const handleSubmit =(event) =>{
  event.preventDefault();
  const serviceId = "service_cia84cl";
  const templateId = "template_xxniet5"
  const apikey = "ozYip14w9-_M0eoMv"

  emailjs.sendForm(serviceId,templateId,reForm.current,apikey)
  .then(result => console.log(result.text))
  .catch( error => console.error(error))  
}

return (
    <div>
      <form ref={reForm} action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='username' required/>
        <input type="email" placeholder='email' name='Gmail' required/>
        <textarea placeholder='escriba aqui el motivo por el cual nos contacta' name='message'/>
        <button>Submit</button>
      </form>
    </div>
  )
}
