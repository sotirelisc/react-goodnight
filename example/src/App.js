import React from 'react'

import Provider, { useDarkMode } from 'react-goodnight'

const App = () => {
  const [theme, toggle] = useDarkMode()

  console.log(theme)
  return (
    <Provider>
      <div>hey</div>
      <button onClick={toggle}>Switch Theme</button>
    </Provider>
  )
}

export default App
