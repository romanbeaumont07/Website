import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>About Me!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
      <p className="aboutMe">
       Hi! My name is Roman. I'm a 17 year old aspiring web developer!
      </p>
    </>
  )
}

export default App
