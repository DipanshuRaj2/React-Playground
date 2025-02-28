import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);
  
  // let counter = 5;  
  const addValue = () =>{
  
    // counter = counter + 1;
    if(counter <20){
    setCounter(counter+1)
    }
  }
  const removeValue = () =>{
    if(counter > 0){
    counter = counter -1;
    setCounter(counter);
    }
  }

  return (
    <>
    <h1>Hooks Project</h1>
    <h2>Counter value: {counter}</h2>


    <button onClick ={addValue}>Add value {counter}</button>
    <br/>
    <button
    onClick = {removeValue}>Remove value {counter}</button>
    <footer>footer: {counter}</footer>

    </>
  )
}

export default App
