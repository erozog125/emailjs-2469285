import React, {useRef, useState} from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {

  const refForm = useRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlesubmit = (event) =>{
    event.preventDefault();

     const servicesId = "service_f4gmev6"
     const templateId = "template_krt252p"

     const apikey =  "mKpN-AmliqbSJFUQw"

     emailjs.sendForm(servicesId, templateId, refForm.current, apikey).then( result => console.log(result.text))
     .catch( error => console.log(error))

       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailRegex.test(email)) {
      alert('Email válido:', email);
      setEmailError('');
    } else {
      setEmailError('Por favor, ingrese una dirección de correo electrónico válida.');
    }
      
  }

  return (
    <div className="contenedor">
    <form action="" ref={refForm} className="columna" onSubmit={handlesubmit}>

      <fieldset className="field-name">
        <label className='symbol-requires name' htmlFor="">Name</label>
        <input name="name" type="text"  placeholder='Name' required/>
      </fieldset>
      
      <fieldset>
        <label className="symbol-requires" htmlFor="">Email</label>
        <input name="email" type="email"onChange={handleEmailChange} placeholder='email'required/>
      </fieldset>
      
      <fieldset>
        <label className="field-message" htmlFor="">Messager Email</label>
          <textarea name="message" id="" cols="30" rows="10" placeholder="type your message"></textarea>
      </fieldset>
      
      <button>Submit</button>
    </form>
  </div>
  )
}
