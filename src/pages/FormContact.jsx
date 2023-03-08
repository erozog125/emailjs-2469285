import React, { useRef, useState } from 'react'
import img from '../assets/undraw_Message_sent_re_q2kl.png'
import emailjs from '@emailjs/browser'
import { Input } from '../components/Input'

export const FormContact = () => {
    const [username, setCambiarUsername] = useState({ campo: '', valido: null });
    const [email, setCambiarEmail] = useState({ campo: '', valido: null })
    const [message, setCambiarMessage] = useState({ campo: '', valido: null })
    const [formularioValido, cambiarFormularioValido] = useState(null);


    const refFrom = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.valido === 'true' && email.valido === 'true') {
            const value = []
            const servicesId = "service_7i9oh6h";
            const templateId = "template_3nnbl48";
            const apiKey = "AZhoxzk2v_pU0nVkY"
            value.push(username.campo, email.campo, message.campo)    
            emailjs.sendForm(servicesId, templateId, refFrom.current , apiKey)
                .then((result) => {
                    console.log(result.text);
                    cambiarFormularioValido(true)
                }).chatch((err) => console.log("errr"))
        } else {
            cambiarFormularioValido(false);
        }

    }

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    return (
        <div class="flex justify-center items-center h-screen bg-blue-900">
            <div className='flex justify-around items-center w-[70%] h-[70%] py-24 sm:px-6 sm:py-32 lg:px-8 bg-white'>
                <div className='w-[490px] h-[500px]'>
                    <img src={img} className='w-[100%] h-[100%]' />
                </div>
                <form ref={refFrom} onSubmit={handleSubmit} className='mt-8 space-y-6 w-[690px] h-[470px] flex justify-center items-center flex-col'>
                    <h1 className='text-2xl font-bold mb-2'>Comentario</h1>
                    <div class="rounded-sm shadow-sm w-[90%] flex justify-center items-center flex-col">
                        <Input
                            estado={username}
                            cambiarEstado={setCambiarUsername}
                            type="text"
                            placeholder='Ingresa tu Nombre'
                            name="username"
                            leyendaError="El username tiene que ser Letras y espacios"
                            expresionReguslar={expresiones.nombre}
                        />
                        <Input
                            estado={email}
                            cambiarEstado={setCambiarEmail}
                            type="email"
                            placeholder='Ingresa tu email'
                            name="email"
                            leyendaError="Debe ser un email"
                            expresionReguslar={expresiones.correo}
                        />
                        <div class="mb-6">
                            <textarea name="message" id="message" rows="5" value={message.campo} onChange={(e) => setCambiarMessage(e.target.value)} class="appearance-none border rounded w-80 py-2 px-3 text-gray-700 border-sky-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm leading-tight focus:outline-none focus:shadow-outline" maxLength="500"></textarea>
                        </div>
                        {formularioValido === false &&
                            <p className='text-red-600'>
                                <span>Error:</span> Por favor rellena el formulario correctamente.
                            </p>
                        }
                    </div>
                    <div>
                        <button type="submit" class="group relative flex  justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            </span>
                            Sign in
                        </button>
                    </div>
                        {formularioValido === true && <p className='text-blue-600'>Formulario enviado exitosamente!</p>}

                </form>
            </div>
        </div>
    )
}
