import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';




function App() {

  const [count, setCount] = useState(0)
  if(count == 100){
    window.alert("100 Click!!!")
  }
  return (
    
    <>
      <div>
      </div>
      <h1 className='header'>About Me!</h1>
      <p className="aboutMe">
       Hi! My name is Roman. I'm a 17 year old aspiring web developer!
      </p>

      <div className="card">
        <Button
        style={{backgroundColor:'#F64C72'}}
        onClick={() => setCount((count) => count + 1)}
        variant='contained'
        elevation={60}
        >
          count is {count}
        </Button> 
        <br />
        <br /> 
        <Button 
        style={{backgroundColor:'#F64C72'}}
        variant='contained'
        href="https://github.com/romanbeaumont07">
          My Github
        </Button>
        <br />
        <br />
        <Button 
        style={{backgroundColor:'#F64C72'}}
        variant='contained'
        href="https://www.youtube.com/channel/UCEEjzQIRY2C40etJqP4njZQ">
          My Youtube
        </Button>
      </div>
      
    </>
  )
}

export default App
