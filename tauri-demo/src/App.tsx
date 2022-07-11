import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { invoke } from '@tauri-apps/api';

function App() {
  
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("Hello There!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>

          <button type="button" onClick={() => invoke('greet',{'name': 'General Kenobi'}).then(t => setGreeting(t as string))}>
            {greeting}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}



export default App
