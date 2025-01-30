import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "sameer",
    age : 3
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username="Chai aur code"/>
    <Card username="Nitian"/>

     
    </>
  )
}

export default App
