import React, { useRef, useState} from 'react'
import emailjs from '@emailjs/browser'



export const ContactUs = () => {

  const refForm = useRef();

   const [name, setName] = useState("")
   const [nameError, setNameError] = useState("")
   const [email, setEmail] = useState("")
   const [emailError, setEmailError] = useState("")
   const [disable,setDisable] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const serviceId = "service_tzez0wl"
      const templateId = "template_b5jpeeo"
      const apiKey = "tdMX-mNNJsbmaAjtK"

      emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
      .then(result => console.log(result.text))
      .catch(e => console.error(e))

    };

    const handleChageName = (e) =>{
      const {value} = e.target;

      if(/\d/.test(value)){
        setNameError('Por favor, ingrese un nombre válido!')
        setDisable(true)
      }else{
        setName(value)
        setNameError("")
        setDisable(false)
      }
    }

    const handleBlurEmail = (e) =>{
      const {value} = e.target;
      const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!validation.test(value)){
        setEmailError('Por favor, ingrese un correo electronico válido!')
        setDisable(true)
      }else{
        setEmail(value)
        setEmailError("")
        setDisable(false)
      }

    }

    const handleChageEmail = (e)=>{
      const {value} = e.target;
      const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(validation.test(value)){
        setEmail(value)
        setEmailError("")
        setDisable(false)
      }
    }

    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-900 text-white">
    <h1 className='font-bold mb-10 text-3xl md:text-4xl'>Formulario de contáctenos</h1>
    <div className="max-w-md w-full p-6 rounded-lg shadow-lg border">
      <h1 className="text-xl font-bold mb-6">Envianos tus comentarios y sugerencias!</h1>
      <form ref={refForm} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nameuser" className="block text-gray-400 mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="nameuser"
            name="nameuser"
            onChange={handleChageName}
            placeholder="Ingresea tu nombre..."
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
            required
          />
          <div className='flex items-center justify-center'>
          {nameError && <p className='text-red-600 text-xs font-bold'>{nameError}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">
            Correo Electronico:
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChageEmail}
            onBlur={handleBlurEmail}
            name="email"
            placeholder="EJ: correo@gmail.com"
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
            required
          />
          <div className='flex items-center justify-center'>
            {emailError && <p className='text-red-600 text-xs font-bold'>{emailError}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-400 mb-2">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribe el mensaje que quieras enviar..."
            className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={disable == true ? "py-2 px-10 bg-black text-white rounded-lg hover:bg-black focus:outline-none" :"py-2 px-10 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none" }
            disabled={disable}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
