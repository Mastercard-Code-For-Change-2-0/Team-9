import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/loginpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>hiiiii</div>
      <LoginPage/>
    </>
  )
}

export default App
