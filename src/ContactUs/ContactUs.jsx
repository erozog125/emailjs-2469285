import React, { useRef, useState } from 'react';
import '../ContactUs/contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const refForm = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const Send = (event) => {
    event.preventDefault();
    const serviceId = "service_nc7jwsh";
    const templateId = "template_db3bm6h";
    const apikey ="RLd0hLVf2eqiypNbm";

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
      .then(result => {
        console.log('Mensaje enviado con éxito');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => console.log(error));
  };
    
  return (
    <div className="boxContent">
      <form ref={refForm} action="" onSubmit={Send}>
        <input type="text" id="name" className="name" value={name} placeholder='Su nombre aquí' name='username' onChange={(event) => setName(event.target.value)} required />
        <input type="email" name="email" id="email" className='email' value={email} placeholder='Su correo aquí' onChange={(event) => setEmail(event.target.value)} required />
        <textarea id="message" name="message" value={message} placeholder=" Aqui redacte el mensaje que desea enviar" onChange={(event) => setMessage(event.target.value)} required></textarea>
        <p><button type="submit">Enviar formulario</button></p>
      </form>
    </div>
  );
};
