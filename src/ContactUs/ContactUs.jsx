import React, {useRef }from 'react';
import './ContactUs.css'
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const refForm = useRef();
    
  const handleSubmit = (event) =>{
    event.preventDefault();

    const serviceId = "service_begnxtb";
    const TemplateId = "template_ondp1lr";
    const apiKey = "rLwjIEF2_hHzIDs57";

    emailjs.sendForm(serviceId, TemplateId, refForm.current , apiKey)
    .then( result => console.log(result.text))
    .catch( eror => console.error(error))
  }

  return (
    <div>
      <form class='container' ref={refForm} action="" onSubmit={handleSubmit}>
        <fieldset className='field-name'>
          <label>Name</label>
          <input name='name' type="text" placeholder='Write your name' required/>
        </fieldset>
        <fieldset className='field-name'>
          <label>Email</label>
          <input name='email' type="email" id="email" placeholder='Write your email adress' required />
        </fieldset>
        <fieldset className='field-message'>
          <label>message</label>
          <textarea name='message' type="text" placeholder='Type yout message' />
        </fieldset>

        <button>Submit</button>
      </form>
    </div>
  )
}
