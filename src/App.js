import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/theme'
import { GlobalStyles } from './components/globalStyle'

import Dashboard from './components/Dashboard'

// The function that toggles between themes
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Dashboard toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  )
}

export default App
