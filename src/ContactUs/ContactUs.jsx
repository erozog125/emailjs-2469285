import React,{useRef} from 'react'
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    //  console.log(refForm.current);
    const ServiceId = "service_aoyjsmq";
    const templateId = "template_zqgceoo";
    const apikey = "Q88AmNookpcytsg2d"

    emailjs.sendForm(ServiceId,templateId,refForm.current,apikey)
    .then (result => console.log(result.text))
    .catch (error => console.error(error))
    
  }


  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
      <div className='header-contact'>
      <h2>contact Us</h2>
      <p>please fill this form</p>
      </div>

      <fieldset className='field-name'>
      <label className='symbol-required name' htmlFor="">Name</label>
      <input name= 'username' type="text" placeholder='ejemplo: juan s'  required/>
      </fieldset>

      <fieldset className='field-email'>
      <label className='symbol-required ' name="email">Email</label>
      <input name= 'email' type="email" id ="email" placeholder='ejemplo: ds6714955@gmail.com'  required/>
      </fieldset>

      <fieldset className='field-message'>
      <label className='symbol-required '>Email</label>
      <textarea maxLength={500} placeholder="type you message" name='message' id='' cols={30} rows ={10}  required/>
      </fieldset>
     
      <button className='btn-send'>Send</button>

    </form>
  )
}