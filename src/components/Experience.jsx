import { experiences } from '../cv.json'
import style from '../styles/experience.module.css'

export function Experience () {
  return (
    <section className={ style.experiences }>
      <h1 className={ style.title }>Experiencia</h1>
      {
        experiences.map((experience, index) => {
          return (
            <div key={ index } className={ style.experience }>
              <a href={ experience.url } target='_blank' className={ style.link }>
                <h3 className={ style.name }>{ experience.name }</h3>
              </a>
              <p className={ style.position }>{ experience.position }</p>
              <p className={ style.time }>{ experience.startDate } / { experience.endDate }</p>
              <p className={ style.description }>{ experience.summary }</p>
            </div>
          )
        })
      }
    </section>
  )
}