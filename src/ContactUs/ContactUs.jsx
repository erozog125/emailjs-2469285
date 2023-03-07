import React, {useRef} from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {

  const refForm = useRef();

  const handlesubmit = (event) =>{
    event.preventDefault();

     const servicesId = "service_f4gmev6"
     const templateId = "template_krt252p"

     const apikey =  "mKpN-AmliqbSJFUQw"

     emailjs.sendForm(servicesId, templateId, refForm.current, apikey).then( result => console.log(result.text))
     .catch( error => console.log(error))

      
  }
  return (
    <div className="contenedor">
    <form action="" ref={refForm} className="columna" onSubmit={handlesubmit}>

      <fieldset className="field-name">
        <label className='symbol-requires name' htmlFor="">Name</label>
        <input name="name" type="text" placeholder='Name' required/>
      </fieldset>
      
      <fieldset>
        <label className="symbol-requires" htmlFor="">Email</label>
        <input name="email" type="email" placeholder='email'required/>
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
