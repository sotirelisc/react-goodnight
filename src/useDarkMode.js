import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggle = () => (theme === 'light' ? setMode('dark') : setMode('light'))

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, toggle]
}

export default useDarkMode