import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 5;
  const addValue = () =>{
    console.log("clicked", counter);
    counter = counter + 1;
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter value: {counter}</h2>


    <button onClick ={addValue}>Add value {counter}</button>
    <br/>
    <button>Remove value {counter}</button>
    <footer>footer: {counter}</footer>

    </>
  )
}

export default App
