import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export function Contact () {

  const [message, setMessage] = useState('')
  const [classMessage, setClassMessage] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_j1qkshk', 'template_4fz6lqq', form.current, {
        publicKey: 'WkJMRaxI5r1Kp-EWG',
      })
      .then(
        () => {
          form.current.reset()
          setClassMessage('success')
          setMessage('Mensaje enviado correctamente.')
        },
        (error) => {
          form.current.reset()
          setClassMessage('error')
          console.log('FAILED...', error.text)
          setMessage('Error al enviar el correo.')
        },
      )
  }

  return (
    <section className="contact">
      <h1 className="title">Contactame</h1>
      <form onSubmit={ sendEmail } ref={ form } className='form'>
        <input
          type="email"
          name="email"
          className='email'
          placeholder='Correo'
          required
        />
        <input
          type="text"
          name="subject"
          className='asunto'
          placeholder='Asunto'
          required
        />
        <textarea
          name="message"
          className='mensaje'
          placeholder='Mensaje'
          required
        />
        <button className='submit' type="submit">Enviar</button>
      </form>
      <p className={ "message " + classMessage }>{ message }</p>
    </section>
  )
}