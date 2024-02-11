import { basics } from '../cv.json'
import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import style from '../styles/basics.module.css'

const imagesLogoProfiles = [LinkedIn, GitHub]

export function Basics () {
  
  return (
    <section className={ style.basics }>
      <figure className={ style.perfil }>
        <img src={basics.image} loading='lazy' alt="Foto perfil Andrés Cifuentes Lozada" title='Andrés Cifuentes Lozada' className={ style.image } />
      </figure>
      <div className={ style.information }>
        <h1 className={ style.title }>Web Developer</h1>
        <p className={ style.email }>{ basics.email }</p>
        <p className={ style.label }>{ basics.label }</p>
        <div className={ style.profiles }>
          {
            basics.profiles.map((profile, index) => {
              return (
                <a key={ index } href={ profile.url } target='_blank' className={ style.profile + ' ' + profile.network}>
                  <img src={ imagesLogoProfiles[index] } loading='lazy' alt={ profile.network } title={ profile.network } className={ style.logo } />
                </a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}