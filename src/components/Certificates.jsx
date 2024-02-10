import { certificates, lenguages } from '../cv.json'
import style from '../styles/certificates.module.css'

export function CertificatesLenguages () {
  return (
    <section className={ style.certificatesLenguages }>
      <div className={ style.certificates }>
        <h1 className={ style.title }>Certificados</h1>
        {
          certificates.map((certificate, index) => {
            return (
              <div key={ index } className={ style.certificate }>
                <h3 className={ style.name }>{ certificate.name }</h3>
                <a href={ certificate.url } target='_blank' className={ style.link }>
                  <p className={ style.issuer }>{ certificate.issuer }</p>
                </a>
              </div>
            )
          })
        }
      </div>
      <div className={ style.lenguages }>
        <h1 className={ style.title }>Lenguajes</h1>
        {
          lenguages.map((lenguage, index) => {
            return (
              <div key={ index } className={ style.lenguage }>
                <h3 className={ style.name }>{ lenguage.language }</h3>
                <p className={ style.fluency }>{ lenguage.fluency }</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}