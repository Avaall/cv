import { useEffect, useState } from 'react'

export function Controls () {

  const [lightDark, setLightDark] = useState(true)

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = (e) => {
      if (!e.matches) setLightDark(true)
      else setLightDark(false)
    }

    handleThemeChange(darkModeMediaQuery)
  }, [])

  const setTheme = (theme) => {
    const root = document.documentElement

    if (theme) {
      root.style.setProperty('--white', '#000000')
      root.style.setProperty('--black', '#ffffff')
    } else {
      root.style.setProperty('--white', '#ffffff')
      root.style.setProperty('--black', '#000000')
    }

    setLightDark(!theme)
  }

  return (
    <section className="controls">
      <button onClick={ () => setTheme(lightDark) } className={"light-dark " + lightDark}></button>
    </section>
  )
}