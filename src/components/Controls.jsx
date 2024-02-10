import { useEffect, useState } from 'react'
import style from '../styles/controls.module.css'

export function Controls () {

  const [lightDark, setLightDark] = useState('ButtonThemeLight')

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = (e) => {
      if (!e.matches) setLightDark('ButtonThemeLight')
      else setLightDark('ButtonThemeDark')
    }

    handleThemeChange(darkModeMediaQuery)
  }, [])

  const setTheme = (theme) => {
    const root = document.documentElement

    if (theme === 'ButtonThemeLight') {
      root.style.setProperty('--white', '#000000')
      root.style.setProperty('--black', '#ffffff')
    } else {
      root.style.setProperty('--white', '#ffffff')
      root.style.setProperty('--black', '#000000')
    }

    if (theme === 'ButtonThemeDark') setLightDark('ButtonThemeLight')
    else setLightDark('ButtonThemeDark')
  }

  return (
    <section className={ style.controls }>
      <button onClick={ () => setTheme(lightDark) } title='Button theme' type='Button' className={ style.lightDark + ' ' + lightDark}></button>
    </section>
  )
}