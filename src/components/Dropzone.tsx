import { useDropzone, FileWithPath } from "React-dropzone";
import { IconContext } from "react-icons";
import { FiUpload } from "react-icons/fi";
import { Image } from "../types/forms";
import "../style/Dropzone.css";
import { useEffect } from "react";

interface Props {
  image: Image | undefined;
  setImage: React.Dispatch<React.SetStateAction<Image | undefined>>;
}

const Dropzone = ({ image, setImage }: Props) => {
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage({ file: file, preview: URL.createObjectURL(file) });
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpeg", ".jpg"],
    },
    onDrop: onDrop,
  });

  useEffect(() => {
    if (acceptedFiles.length === 0) {
      setImage(undefined);
    }
  }, [acceptedFiles.length, setImage]);

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {(file.size / 1e6).toFixed(2)} mb
    </li>
  ));

  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="dropzone-content">
          <div className="card">
            <IconContext.Provider value={{ color: "white", size: "80px" }}>
              <FiUpload />
            </IconContext.Provider>
            <h2>Drag and drop files or browse</h2>
            <p>Supported formats: PNG, JPG, JPEG</p>
            {files.length !== 0 && (
              <img src={image?.preview} className="imagePreview" />
            )}
          </div>
        </div>
      </div>
      <div>
        <h2>Upload your screenshot, we will handle it.</h2>
        <aside>
          {files.length !== 0 ? <p className="file">{files}</p> : <p>&nbsp;</p>}
        </aside>
      </div>
    </>
  );
};

export default Dropzone;
