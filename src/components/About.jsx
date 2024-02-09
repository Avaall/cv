import { about } from '../cv.json'

export function About () {
  return (
    <section className='about'>
      <h1 className='title'>Mi perfil</h1>
      <p className="label">{ about }</p>
    </section>
  )
}