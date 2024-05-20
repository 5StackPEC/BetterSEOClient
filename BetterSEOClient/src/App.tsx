import { useState } from 'react'
import Dropzone from './components/dragAndDrop'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    alert('File uploaded!');
  }
  
  return (
    <>
      <h1>BetterSEO</h1>
      <p>Take your website to the next level</p>
      <Dropzone />
      <button onClick={handleClick}>Upload Screenshot</button>
    </>
  )
}

export default App
