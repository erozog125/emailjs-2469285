import React, { useRef } from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const serviceId = "service_6r3o7ke";
    const templeId = "template_lqajr8o";
    // 3.parametro
    const apikey = "1JZuX6YGCN5Wsr7KP";

    emailjs.sendForm(serviceId, templeId, refForm.current, apikey).then(result => console.log(result.text)).catch(error=> console.log(error))
  }


  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>contact Us</h2>
        <p>please fill this form</p>
      </div>
      <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor="">Name</label>
        <input name='username' type="text" placeholder='Ej: harold rodas' required />
      </fieldset>

      <fieldset className='field-email'>
        <label className='symbol-required' name="email">Email</label>
        <input name='email' id='email' type="email" placeholder='Ej: haroldrodas044qgamil.com' required />
      </fieldset>

      <fieldset className='field-message'>
        <label className='symbol-required'>Email</label>
        <textarea placeholder='type yout message' maxLength={500} name="message" id="" cols="30" rows="10"></textarea>
      </fieldset>

      <button className='btn-send'>send</button>
    </form>
  )
}
