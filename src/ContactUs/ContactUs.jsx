import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Style from './contactUs.module.css'

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const serviceId = "service_9iypjs4"
    const templateId = "template_cde0ulh"
    const apiKey = "jgnKysCBmi-JYy15I"

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
      .then(result => console.log(result.text))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className={Style.headerContact}>
          <h2>Contact Us</h2>
          <p>Please fill this form</p>
        </div>
        <fieldset className={Style.fieldsetName}>
          <label className={Style.labelName} htmlFor="username">Name</label>
          <input className={Style.inputName} name='username' type="text" placeholder='Ej: Cristofert Ocampo' required />
        </fieldset>
        <fieldset className={Style.fieldsetEmail}>
          <label className={Style.labelEmail} name='email' htmlFor="email">Email</label>
          <input className={Style.inputEmail} name='email' type="email" placeholder='email' required />
        </fieldset>
        <fieldset className={Style.fieldsetMessage}>
          <label className={Style.labelMessage} htmlFor="message">Message</label>
          <textarea className={Style.textareaMessage} name="message" id="" cols="30" rows="10"></textarea>
        </fieldset>
        <button className={Style.btnSend} >Submit</button>
      </form>
    </div>
  )
}
