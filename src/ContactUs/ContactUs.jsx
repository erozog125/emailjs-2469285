import React, { useRef }from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refForm.current);

    const serviceId = "service_4r2mn7m";
    const templateId = "template_9u731ha";
    const apikey = "1hXTD_m9ybgxx3ssO"


    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then ( result => console.log(result.text))
    .catch( error => console.error(error))
  }
    
  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
      </div>
      <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor="">Name</label>
        <input name='username' type="text" placeholder='Your name' required />
      </fieldset>

      <fieldset className='field-email'>
        <label className='symbol-required' name="email">Email</label>
        <input  placeholder='Your email' type="email" name='email' id="email" required />
      </fieldset>

      <fieldset className='field-message'>
        <label className='symbol-required'>Message</label>
        <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows="10"></textarea>
      </fieldset>

      <button className='btn-send'>Send</button>
    </form>
  )
}
