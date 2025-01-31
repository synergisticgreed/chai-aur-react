import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //let counter=5

  //Interview question
  const addValue=()=>{
    setCounter((prevCounter)=> prevCounter+1 )    //useState send signals in batches
    setCounter((prevCounter) => prevCounter+1 )
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    //console.log("Value added", Math.random());
    //counter=counter+1
    

  }
  
  //let counter=5
  
  const removeValue=()=>{
    if(counter>0) setCounter(counter-1)
    
  }
  return (
    
    <>
      
      <h1>Chai aur react</h1>
      <h2> Counter Value : {counter}</h2>

      <button onClick={addValue} >Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      <p> footer: {counter}</p>

    </>
  )
}

export default App
