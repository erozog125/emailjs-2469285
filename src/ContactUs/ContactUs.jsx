import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { Fade } from "react-awesome-reveal";

export const ContactUs = () => {

  const refForm = useRef()

  const handelSubmit = (event) =>{
    event.preventDefault()

    const serviceId = "service_a5rsz6s"
    const templateId = "template_wj7ym1r"
    const apiKey = "5j-qHoDFj4J9oAJLj"

    emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
    .then(result => console.log(result.text))
    .catch(error => console.error(error))
  }

  return (
    <Fade delay={500} direction={"down"} >
    <div className='flex justify-center items-center h-screen'>
   
      <form className='w-full max-w-lg bg-white rounded-lg shadow-md p-8' ref={refForm} action="" onSubmit={handelSubmit} >
      
        <div className='bg-black rounded'>
          <h2 className='text-5xl font-extrabold dark:text-white m-3'>Contact Us</h2>
          <p className='ml-4 font-semibold m-3 text-gray-500 dark:text-gray-400'>Please fill this form</p>
        </div>
       
        <fieldset className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Name</label>
          <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='username' type="text" placeholder='Name' required/>
        </fieldset>
        <fieldset className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Email</label>
          <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='email' type="email" placeholder='Email' required/>
        </fieldset>
        <fieldset>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Message</label>
          <textarea name="message" id="" cols="30" rows="10" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
        </fieldset>
        <div className='flex items-center justify-center mt-3'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Send</button>
        </div>
      </form>
     
    </div>
    </Fade>
  )
}
