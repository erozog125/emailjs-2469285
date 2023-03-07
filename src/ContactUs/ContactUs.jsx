import React, {useRef} from 'react' ;
import emailjs from '@emailjs/browser';
import './contactus.css'

export const ContactUs = () => {
  const refForm = useRef();
  const handleSubmit = (Event) => {
    Event.preventDefault();
    const serviceId = "service_q0e0a7l";
    const templateId = "template_hbcsxd4";
    const apikey = "TIk5oQfZ7k2hoXF0E";

    emailjs.sendForm(serviceId,templateId, refForm.current, apikey)
    .then(result => console.log(result.text))
    .catch(error => console.error(error))
  }
  return (
    <form ref={refForm} action="" onSubmit={handleSubmit} >
      <div className='header-contact'>
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
      </div>
      <fieldset className='field-name'>
       <label className='symbol-required' htmlFor="">Name</label>
       <input name='username' type="text" placeholder='Ej: Juan pablo' required />
      </fieldset>

      <fieldset className='field-email'>
       <label className='symbol-required' name='email'>Email</label>
       <input placeholder='Ej: motattojp14@gmail.com' type="email" name="email" id="email" required />
      </fieldset>

      <fieldset className='field-message'>
       <label className='symbol-required'>Email</label>
       <textarea maxLength="500" placeholder='type yout message' name="messaage" id='' cols="30" rows=""> </textarea>
      </fieldset>

    <button className='btn-send'>Send</button>
    </form>
  )
}
