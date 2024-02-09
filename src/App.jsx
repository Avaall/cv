import { About } from './components/About.jsx'
import { Basics } from './components/Basics.jsx'
import { CertificatesLenguages } from './components/Certificates.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { References } from './components/References.jsx'
import { Skills } from './components/Skills.jsx'
import { Controls } from './components/Controls.jsx'
import { Contact } from './components/Contact.jsx'
import './App.css'

function App() {

  return (
    <>
      <Controls />
      <Basics />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <CertificatesLenguages />
      <References />
      <Contact />
      <section className="portafolio">
        <a href="https://portafolio-andres.onrender.com/" target='_self' className='url'>Conoce mi portafolio</a>
      </section>
    </>
  )
}

export default App
