import { skills } from '../cv.json'
import style from '../styles/skills.module.css'

export function Skills () {
  return (
    <section className={ style.skills }>
      {
        skills.map((skill, index) => {
          return (
            <a key={ index } href={ skill.url } target='_blank' className={ style.link }>
              <p className={ style.skill }>
                { skill.name }
              </p>
            </a>
          )
        })
      }
    </section>
  )
}