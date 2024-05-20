import { useState } from 'react'
import { IconContext } from "react-icons"
import { FiUpload } from "react-icons/fi"
import { FileUploader } from "react-drag-drop-files"
import DragNdrop from "./components/dragAndDrop"
import './App.css'

const fileTypes = ["JPEG", "PNG", "JPG"];

function App() {
  const [count, setCount] = useState(0)
  const [file, setFile] = useState(null)
  const handleChange = (file:any) => {
    setFile(file);
  }

  return (
    <>
      <h1>BetterSEO</h1>
      <p>Take your website to the next level</p>
      <div className="card">
        <IconContext.Provider value={{ color: "white", size: '80px' }}>
          <div>
            <FiUpload />
          </div>
        </IconContext.Provider>
        <h2>Drag and drop files or browse</h2>
        <p>Supported formats: PNG, JPG, JPEG</p>
      </div>
      <h2>Upload your screenshot, we will handle it.</h2>
      <button>Upload Screenshot</button>
    </>
  )
}

export default App
