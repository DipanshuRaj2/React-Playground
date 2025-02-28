import Hello from "./Hello"
import Dipanshu from "./dipanshu"
function App() {
  const username = "chai aur code"
  return (
    <>
      <Hello/>
     <Dipanshu/> 
     
     
     <h1 style={{ color: "green" }}>Hello bro {username}</h1>

     </>
  )
}

export default App
