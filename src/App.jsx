/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import './Rick.mp3';

function App() {
  const audio = new Audio('src/Rick.mp3')
  const [count, setCount] = useState(0)
  if(count == 100){
   window.alert("100 Clicks!!");
   audio.play();
  }
  return (
    
    <>
      <div>
      </div>
      <h1 className='header'>About Me!</h1>
      <p className="aboutMe">
       Hi! My name is Roman. I'm an aspiring web developer! <br /> Aside from coding I play a lot of different instruments: baritone, tuba, trumpet, trombone, guitar, and piano to name a few.
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
