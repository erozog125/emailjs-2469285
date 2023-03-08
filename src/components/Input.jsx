import React from 'react'

export const Input = ({ estado, cambiarEstado, expresionReguslar, type, placeholder, name, leyendaError }) => {
    const onchage = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value })
    }

    const validate = () => {
        if (expresionReguslar) {
            if (expresionReguslar.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' })
            } else {
                cambiarEstado({ ...estado, valido: 'false' })
            }
        }
    }

    return (
        <div class="mb-4">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={estado.campo}
                onChange={onchage}
                onKeyUp={validate}
                onBlur={validate}
                className={`appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${estado.valido === 'false' ? 'border-red-600' : 'border-sky-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'}` } 
            />
            <h2 className={`w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${estado.valido === 'false' ? 'text-red-600 block' : 'border-blue-600  hidden'}` }
            >{leyendaError}</h2>
        </div>
        
    )
}
