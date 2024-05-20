import { useDropzone, FileWithPath } from "React-dropzone"
import { IconContext } from "react-icons"
import { FiUpload } from "react-icons/fi"
import '../style/Dropzone.css'

export default function Dropzone() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({})

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="dropzone-content">
        <div className="card"> 
          <IconContext.Provider value={{ color: "white", size: '80px' }}>
            <div>
              <FiUpload />
            </div>
          </IconContext.Provider>
          <h2 >Drag and drop files or browse</h2>
          <p>Supported formats: PNG, JPG, JPEG</p>
        </div>
      </div>
      <h2>Upload your screenshot, we will handle it.</h2>
      <aside>
        <p className="file">{files}</p>
      </aside>
    </div>
  )
}