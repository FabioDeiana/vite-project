import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"

const bottone = "button"

function App() {
  const [count, setCount] = useState(0)

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
      <ButtonComponent bottone="cliccami" />
      <ButtonComponent bottone="click" />
      <ButtonComponent bottone="fatto" />
      <ImageComponent
        src="https://c8.alamy.com/compit/2f5gggt/piccola-rana-illustrazione-vettoriale-di-una-incantevole-piccola-rana-2f5gggt.jpg"
        alt="Una immagine random"
        width="100"
        height="100"
      />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
