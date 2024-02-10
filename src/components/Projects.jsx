import { projects } from '../cv.json'
import Portafolio from '../assets/portafolio.png'
import Eva from '../assets/eva.png'
import Ova from '../assets/ova.png'
import DomiSAI from '../assets/domisai.png'
import Vue from '../assets/vue.svg'
import Node from '../assets/node.svg'
import React from '../assets/react.svg'
import Postgres from '../assets/pg.svg'
import style from '../styles/projects.module.css'

const imagesProjects = [Eva, DomiSAI, Ova, Portafolio]

export function Projects () {
  return (
    <section className={ style.projects }>
      <h1 className={ style.title }>Projectos</h1>
      <div className={ style.content }>
        {
          projects.map((project, index) => {
            return (
              <div key={ index } className={ style.project }>
                <a href={ project.url } title={ project.name } target='_blank' className={ style.link }>
                  <img src={ imagesProjects[index] } alt={ project.name } title={ project.name } className={ style.image } />
                </a>
                <a href={ project.url } title={ project.name } target='_blank' className={ style.linkText }>
                  <p className={ style.name }>{ project.name }</p>
                </a>
                <p className={ style.description }>{ project.description }</p>
                <div className={ style.technologies }>
                  {
                    project.technologies.map((technologie, index) => {
                      let logoUse = ''

                      switch (technologie) {
                        case 'React':
                          logoUse = React
                          break
                        case 'PostgreSQL':
                          logoUse = Postgres
                          break
                        case 'Node.js':
                          logoUse = Node
                          break
                        default:
                          logoUse = Vue
                          break
                      }

                      return (
                        <img key={ index } src={ logoUse } alt={ technologie } title={ technologie } className={ style.logo } />
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}