import React, {useRef} from 'react'
import './contactus.css'
import emailjs from '@emailjs/Browser'
export const ContactUs = () => {
  const refForm= useRef ();
  const handleSubmit = (Event) => {
    Event.preventDefault();

    const servideId = "service_j14iihn";
    const templateId = "template_5u6dvyg";
    //3 parametro
    const apikey= "Te8swX8eFfYsvxcRJ";
    emailjs.sendForm(servideId, templateId,refForm.current,apikey)
    .then(result => console.log(result.text))
    .catch(error => console.log(error))
  }
  return (
    <form ref={refForm} action ="" onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>please fill this form </p>
      </div>
      <fieldset className='field-name'>
        <label className='symbold-required-name' htmlFor="">Name</label>
        <input name='username' type="text" placeholder='EJ: Cristian Dev' required/>
      </fieldset>
      <fieldset className='field-email'>
        <label className='symbold-required' name='email'>Email</label>
        <input placeholder='EJ: Cristiandev@gmail.com' type="email" name='email' id='email' required/>
      </fieldset>
      <fieldset className='field-message'>
        <label className='symbold-required'>Message</label>
       <textarea className='message' maxLength="500" placeholder='type your message' name="message" id="" cols="30" rows="10"></textarea>
      </fieldset>
    <button className='btn-send'>Send</button>
    </form>
  )
}
