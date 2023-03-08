import React from 'react'
import './contactus.css'

export const ContactUs = () => {
  return (
    <div>
      <form action="">
        <div className='header-contact'>
          <h2>ContactUs</h2>
          <p>Please fill  this form</p>
        </div>
        <fieldset className='field-name'>
        <input type="text" placeholder='Name' />
        </fieldset >
        <fieldset className='field-email'>
        <input type="email" placeholder='email' />
        </fieldset>
        <fieldset className='field-message'>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </fieldset>

        <button className='btn-send '>Submit</button>
        
      </form>
    </div>
  )
}
