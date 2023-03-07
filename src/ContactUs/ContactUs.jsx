import React, { useRef } from 'react';

import './contactus.css';

import emailjs from '@emailjs/browser';

export const ContactUs = () => {

const refForm = useRef()

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(refForm)

  const serviceId = "service_qyjjldi"
  const templateId = "template_6fxe0mp"
  //3 parametros
  const apikey = "ospbHENwtcFOKS5sh"

  emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then( result => console.log(result.text))
    .catch( error => console.error(error) )
}

  return (
    <div className="contenedor">

      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
      </div>

      <form ref={refForm} action="" onSubmit={handleSubmit}>
       
<fieldset>
          <label className="symbol-required name" htmlFor="">Name</label>
          <input name='username' type="text" placeholder="Ingrese su nombre" required/>
      </fieldset>

        <fieldset>
          <label className="symbol-required name" htmlFor="">Email</label>
          <input name='email' type="email" placeholder="Ingrese su email" required/>
      </fieldset>
      
        <fieldset>
          <label className="symbol-required name" htmlFor="">Mensaje</label>
        <textarea name='message' id="" cols="30" rows="10" maxLength="500" placeholder="Ingrese un mensaje"  required></textarea>
        </fieldset>
        
        <div>
          <button className='btn-send'>Send</button>
        </div>

      </form>
    </div>
  )
}