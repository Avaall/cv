import { skills } from '../cv.json'

export function Skills () {
  return (
    <section className='skills'>
      {
        skills.map((skill, index) => {
          return (
            <a key={ index } href={ skill.url } target='_blank' className='link'>
              <p className='skill'>
                { skill.name }
              </p>
            </a>
          )
        })
      }
    </section>
  )
}