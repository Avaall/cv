import { education } from '../cv.json'
import style from '../styles/education.module.css'

export function Education () {
  return (
    <section className={ style.education }>
      <h1 className={ style.title }>Educación</h1>
      {
        education.map((edu, index) => {
          return (
            <div key={ index } className={ style.educa }>
              <h3 className={ style.name }>{ edu.title }</h3>
              <a href={ edu.url } target='_blank' className={ style.link }>
                <p className={ style.institucion }>{ edu.institution }</p>
              </a>
              <p className={ style.time }>{ edu.startDate } / { edu.endDate }</p>
            </div>
          )
        })
      }
    </section>
  )
}