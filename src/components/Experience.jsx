import { experiences } from '../cv.json'

export function Experience () {
  return (
    <section className='experiences'>
      <h1 className='title'>Experiencia</h1>
      {
        experiences.map((experience, index) => {
          return (
            <div key={ index } className='experience'>
              <a href={ experience.url } target='_blank' className='link'>
                <h3 className='name'>{ experience.name }</h3>
              </a>
              <p className='position'>{ experience.position }</p>
              <p className='time'>{ experience.startDate } / { experience.endDate }</p>
              <p className='description'>{ experience.summary }</p>
            </div>
          )
        })
      }
    </section>
  )
}