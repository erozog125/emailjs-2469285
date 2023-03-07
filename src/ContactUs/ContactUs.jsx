import React from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const refForm=React.useRef()

  
  const submit=(event)=>{
    event.preventDefault()
    const serviceId="service_mbxj22c"
    const templateId="template_s4dc765"
    const apiKey="JkikxO-5rwlOIdZEX"
    emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
    .then(result=>console.log(result.text)).catch(error=>console.log(error.text))
    console.log(refForm.current.elements[3])
   

  }
  
  return (
    <div>
      <form  ref={refForm} action="" onSubmit={submit}>
        <fieldset className='container_img'>
          <img src="./kisspng-message-sms-computer-icons-text-messaging-sms-alert-free-files-5ab0f3f15feb07.2503797315215462253929.png" alt="" />
        </fieldset>
        <fieldset className='container_inputs'>
        
        <input name='username' type="text" placeholder='Name' required />
        
        <input name='username'type="email" placeholder='E-mail' required/>
        
        <input  name='message' type="text" placeholder='Message' required />
        
        <button>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
