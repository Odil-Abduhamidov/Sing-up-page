import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="card">
      <h1>Sign Up</h1>
          <form action="">
            <input type="text" className="name" placeholder='Enter  your Name:' /><br />
            
            <input type="text" className="email" placeholder='Enter  your Email:' /><br />
            
            <input type="text" className="email" placeholder='Repeat your Email:' /><br />
        
            <input type="text" className="pasword" placeholder='Enter your Pasword: '/><br />
            <input type="text" className="pasword"  placeholder='Repeat your Password: '/><br />
            <button>SUBMIT</button>            
          </form>
      </div>
    </>
  )
}

export default App
