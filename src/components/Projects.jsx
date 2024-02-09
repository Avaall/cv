import { projects } from '../cv.json'
import Portafolio from '../assets/portafolio.png'
import Eva from '../assets/eva.png'
import Ova from '../assets/ova.png'
import DomiSAI from '../assets/domisai.png'
import Vue from '../assets/vue.svg'
import Node from '../assets/node.svg'
import React from '../assets/react.svg'
import Postgres from '../assets/pg.svg'

const imagesProjects = [Eva, DomiSAI, Ova, Portafolio]

export function Projects () {
  return (
    <section className='projects'>
      <h1 className='title'>Projectos</h1>
      <div className='content'>
        {
          projects.map((project, index) => {
            return (
              <div key={ index } className="project">
                <a href={ project.url } title={ project.name } target='_blank' className='link'>
                  <img src={ imagesProjects[index] } alt={ project.name } title={ project.name } className='image' />
                </a>
                <a href={ project.url } title={ project.name } target='_blank' className='link-text'>
                  <p className="name">{ project.name }</p>
                </a>
                <p className="description">{ project.description }</p>
                <div className="technologies">
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
                        <img key={ index } src={ logoUse } alt={ technologie } title={ technologie } className='logo' />
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