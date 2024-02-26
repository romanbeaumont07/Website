import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
      </div>
      <h1>About Me!</h1>
      <p className="aboutMe">
       Hi! My name is Roman. I'm a 17 year old aspiring web developer!
      </p>

      <div className="card">
        <Button variant='contained' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button> 
        <br />
        <br /> 
        <Button variant='contained' href="https://github.com/romanbeaumont07">My Github</Button>
        <br />
        <br />
        <Button variant='contained' href="https://www.youtube.com/channel/UCEEjzQIRY2C40etJqP4njZQ">My Youtube</Button>
      </div>
      
    </>
  )
}

export default App
