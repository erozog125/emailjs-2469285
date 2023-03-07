import React, {useRef} from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_68lsffd";
    const templateId = "template_vs8qwlf";
    const apiKey = "j-g5wq-ApMjVkpKhb";

    emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
    .then( result => console.log(result.text))
    .catch( error => console.error(error))
  }

return (
  <form ref={refForm} action="" onSubmit={handleSubmit}>
    <div className='header-contact'>
    <h2>Contact Us</h2>
    <p>Please fill this form</p>
    </div>

    <fieldset className='field-name'>
    <label className='symbol-required name' htmlFor="">Name</label>
    <input name= 'username' type="text" placeholder='Your name'  required/>
    </fieldset>

    <fieldset className='field-email'>
    <label className='symbol-required ' name="email">Email</label>
    <input name= 'email' type="email" id ="email" placeholder='example@gmail.com'  required/>
    </fieldset>

    <fieldset className='field-message'>
    <label className='symbol-required '>Email</label>
    <textarea maxLength={500} placeholder="Type your message" name='message' id='' cols={30} rows ={10}  required/>
    </fieldset>
    
    <button className='btn-send'>Send</button>

   </form>
  )

}
