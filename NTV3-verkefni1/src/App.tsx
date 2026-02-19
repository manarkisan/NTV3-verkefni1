import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [myName, setMyName] = useState("")
  const handleNameChange = (e) => {
    setMyName(e.target.value);
  }

  const [email, setEmail] = useState("")
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AAAAAAAAA</h1>
      
      <div>
        <input 
        name='thy name'
        type="text" 
        value={myName} 
        onChange={(e) => handleNameChange(e)}
        />
  
        <div>my Name is</div>
      <div>{myName}</div>
      </div>

      <div>
        <input 
        name='thy email'
        type="email" 
        value={email} 
        onChange={(e) => handleEmailChange(e)}
        />
        
        <div>my email is</div>
      <div>{email}</div>
      <button type='submit' >Submit</button>
      
      </div>
    </>
  )
}

export default App
