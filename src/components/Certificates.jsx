import { certificates, lenguages } from '../cv.json'

export function CertificatesLenguages () {
  return (
    <section className='certificates-lenguages'>
      <div className='certificates'>
        <h1 className='title'>Certificados</h1>
        {
          certificates.map((certificate, index) => {
            return (
              <div key={ index } className="certificate">
                <h3 className='name'>{ certificate.name }</h3>
                <a href={ certificate.url } target='_blank' className='link'>
                  <p className='issuer'>{ certificate.issuer }</p>
                </a>
              </div>
            )
          })
        }
      </div>
      <div className="lenguages">
        <h1 className="title">Lenguajes</h1>
        {
          lenguages.map((lenguage, index) => {
            return (
              <div key={ index } className="lenguage">
                <h3 className='name'>{ lenguage.language }</h3>
                <p className='fluency'>{ lenguage.fluency }</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}