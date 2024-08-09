import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App(){

  let [counter, setCounter] = useState(15)

  const addvalue = () =>{


    if(counter < 20){
    setCounter(counter + 1)
  }
    else{
      alert("project working")
    }
 
    console.log("clicked", counter)
  }

  const removevalue = () =>{
    if(counter > 0){
    setCounter(counter - 1)
  }

else{
  alert('minimum value')

}
}


  return (
    <>
      <h1>Counter-React-Project</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>+</button>
      
      <button onClick={removevalue}>-</button>
      
    </>
  )
}

export default App
