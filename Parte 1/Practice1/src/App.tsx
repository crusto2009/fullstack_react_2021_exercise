import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface UsuarioData {
  nombre?: string;
}

const HelloWorld = (props:UsuarioData) => {
  const now: Date = new Date()

  return (
    <>
      <div>
        <h1>hola mundo {props.nombre} {now.toDateString()}</h1>
      </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <HelloWorld nombre="carlos"></HelloWorld>
    <HelloWorld nombre="pedro"></HelloWorld>
    <HelloWorld nombre="sandra"></HelloWorld>
    </>
  )
}

export default App
