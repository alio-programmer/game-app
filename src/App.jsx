import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`${theme} ${theme=='dark'?'bg-gray-900':null} min-h-[100vh] p-3`}>
        <Header/>
        <Home/>
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
