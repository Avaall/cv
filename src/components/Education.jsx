import { education } from '../cv.json'

export function Education () {
  return (
    <section className='education'>
      <h1 className='title'>Educación</h1>
      {
        education.map((edu, index) => {
          return (
            <div key={ index } className="educa">
              <h3 className='name'>{ edu.title }</h3>
              <a href={ edu.url } target='_blank' className='link'>
                <p className='institucion'>{ edu.institution }</p>
              </a>
              <p className='time'>{ edu.startDate } / { edu.endDate }</p>
            </div>
          )
        })
      }
    </section>
  )
}