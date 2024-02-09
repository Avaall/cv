import { basics } from '../cv.json'
import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'

const imagesLogoProfiles = [LinkedIn, GitHub]

export function Basics () {
  
  return (
    <section className='basics'>
      <figure className='perfil'>
      <img src={basics.image} loading='eager' alt="Foto perfil Andrés Cifuentes Lozada" title='Andrés Cifuentes Lozada' className='image' />
      </figure>
      <div className='information'>
        <h1 className='title'>Web Developer</h1>
        <p className="email">
          <a href='' className='link' target='_blank'>{ basics.email }</a>
        </p>
        <p className="label">{ basics.label }</p>
        <div className="profiles">
          {
            basics.profiles.map((profile, index) => {
              return (
                <a key={ index } href={ profile.url } target='_blank' className={ 'profile ' + profile.network}>
                  <img src={ imagesLogoProfiles[index] } alt={ profile.network } title={ profile.network } className='logo' />
                </a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}