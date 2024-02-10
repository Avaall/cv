import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import style from '../styles/contact.module.css'

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
          setClassMessage('successFormSend')
          setMessage('Mensaje enviado correctamente.')
        },
        (error) => {
          form.current.reset()
          setClassMessage('errorFormSend')
          console.log('FAILED...', error.text)
          setMessage('Error al enviar el correo.')
        },
      )
  }

  return (
    <section className={ style.contact }>
      <h1 className={ style.title }>Contactame</h1>
      <form onSubmit={ sendEmail } ref={ form } className={ style.form }>
        <input
          type="email"
          name="email"
          className={ style.email }
          placeholder='Correo'
          required
        />
        <input
          type="text"
          name="subject"
          className={ style.asunto }
          placeholder='Asunto'
          required
        />
        <textarea
          name="message"
          className={ style.mensaje }
          placeholder='Mensaje'
          required
        />
        <button className={ style.submit } type="submit">Enviar</button>
      </form>
      <p className={ style.message + ' ' + classMessage }>{ message }</p>
    </section>
  )
}