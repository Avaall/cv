import { About } from './components/About.jsx'
import { Basics } from './components/Basics.jsx'
import { CertificatesLenguages } from './components/Certificates.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { References } from './components/References.jsx'
import { Skills } from './components/Skills.jsx'
import { Controls } from './components/Controls.jsx'
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
    </>
  )
}

export default App
