import { Dropzone, UploadButton } from "./components";
import "./App.css";
import { useEffect, useState } from "react";
import { Image } from "./types/forms";
import "./style/Button.css";

const App = () => {
  const [image, setImage] = useState<Image>();

  return (
    <>
      <h1>BetterSEO</h1>
      <p>Take your website to the next level</p>
      <Dropzone image={image} setImage={setImage} />
      <UploadButton disabled={image === undefined} />
    </>
  );
};

export default App;
