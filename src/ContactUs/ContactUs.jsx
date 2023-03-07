import React, { useRef } from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handlenSubmit = (event) => {
    event.preventDefault();
    console.log(refForm.current);
    const serviceId = "service_3vsjrmt";
    const templateId = "template_ud19fab";
    //3 parametro
    const apikey = "Qznd18ecjqto0kBAf";

    emailjs.sendForm(serviceId, templateId, refForm.current,apikey)
    .then( result => console.log(result.text))
    .catch( error => console.error(error))
  }
  return (
    <form className='frm-try' ref={refForm} action="" onSubmit={handlenSubmit}>
      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
      </div>
      <fieldset className='field-name'>
         <label className='symbol-required name' hymlFor="">Name</label>
         <input name='username' type="text" placeholder='Ej: juan dev' required />
      </fieldset>

      <fieldset className='field-email'>
         <label className='symbol-required' name="email">Email</label>
         <input placeholder='Ej: juandavidgalindo867@gmail.com' type="email" name='email' id="email" required />
      </fieldset>

      <fieldset className='field-message'>
         <label className='symbol-required'>Email</label>
         <textarea maxLength="500" placeholder='type yout message' name='message' id="" cols="30" rows="10"></textarea>
      </fieldset>


     <button className='btn-send'>Send</button>
    </form>
  )
}
