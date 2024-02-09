import { references } from '../cv.json'

export function References () {
  return (
    <section className='references'>
      <h1 className='title'>Referencias</h1>
      <div className="ref">
        {
          references.map((reference, index) => {
            return (
              <div key={ index } className="reference">
                <a href={ reference.url } target='_blank' className="link">
                  <h3 className="title">{ reference.name }</h3>
                </a>
                <p className="description">{ reference.reference }</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}