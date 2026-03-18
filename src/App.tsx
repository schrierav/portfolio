import { useState } from 'react'
import spheal from './assets/Spheal.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={spheal} className="spheal" width="400" alt="EMBRACE HIM" />
        </div>
        <div>
          <h1>Spheal</h1>
          <p>
           Spheal has been appreciated {count} times.
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Appreciate Spheal
        </button>
      </section>
    </>
  )
}

export default App
