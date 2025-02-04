import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewApp from './assets/component/NewApp'
import NewApp2 from './assets/component/NewApp2'

function App() {
  const [count, setCount] = useState(0)

  const aggiornaCount = (nuovoCount) => {
    console.log(nuovoCount)
    setCount(nuovoCount);
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <NewApp />
      <NewApp2 onCountChange={aggiornaCount} count={count} />
    </>
  )
}

export default App
