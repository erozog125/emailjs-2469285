import React, { useRef } from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

   // console.log(refForm.current);

    const serviceId = "service_sa75fne";
    const templateId = "template_jqi43b9";
    const apikey = "AY6s3ltkjAVukcVva";

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then( result => console.log(result.text))
    .catch( error => console.error(error) )
  }


  return (
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Por favor llena este formulario</p>
        </div>
        <fieldset className='field-name'>
          <label className='symbol-required name' htmlForm="">Name</label>
        <input name='username' type="text" placeholder='Name' required />
        </fieldset>
        <fieldset className='field_email'>
          <label className='symbol-required' name='email'>Email</label>
        <input name='email' type="email" id='email' placeholder='email' required />
        </fieldset>
        <fieldset className='field-message'>
          <label className='symbol-required'>Menssage</label>
          <textarea maxLength="500" placeholder='type yout message' name='message' id='' cols="30" rows="15"></textarea>
        </fieldset>
        <button className="btn-send">Ingresar</button>
      </form>

  )
}
