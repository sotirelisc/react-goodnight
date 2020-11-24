import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './globalStyles'

import { lightTheme, darkTheme } from './settings'

import ThemeContext from './themeContext'

import useDarkMode from './useDarkMode'

const Provider = ({ children }) => {
  const [theme, toggle] = useDarkMode()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeContext.Provider value={{ theme, toggle }}>
        <button onClick={toggle}>Switch Theme</button>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export { useDarkMode }
export const useDarkModeContext = () => useContext(ThemeContext)
export default Provider
