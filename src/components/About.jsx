import { about } from '../cv.json'
import style from '../styles/about.module.css'

export function About () {
  return (
    <section className={ style.about }>
      <h1 className={ style.title }>Mi perfil</h1>
      <p className={ style.label }>{ about }</p>
    </section>
  )
}