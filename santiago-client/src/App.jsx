import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to my react app</h1>
        <p>
          Name: Eileen Julia Santiago <br />
          Email: santiagoem@students.national-u.edu.ph   <br />
          Other Personal Info: http://github.com/Julia-Santiago/santiago-webprog
        </p>
      </header>
    </div>
  )
}

export default App
