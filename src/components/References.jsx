import { references } from '../cv.json'
import style from '../styles/references.module.css'

export function References () {
  return (
    <section className={ style.references }>
      <h1 className={ style.title }>Referencias</h1>
      <div className={ style.ref }>
        {
          references.map((reference, index) => {
            return (
              <div key={ index } className={ style.reference }>
                <a href={ reference.url } target='_blank' className={ style.link }>
                  <h3 className={ style.name }>{ reference.name }</h3>
                </a>
                <p className={ style.description }>{ reference.reference }</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}