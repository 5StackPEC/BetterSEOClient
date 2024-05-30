import { Dropzone, UploadButton } from "./components";
import "./App.css";
import { useState } from "react";
import { Image } from "./types/forms";
import "./style/Button.css";
import useClient from "./hooks/useClient/useClient";
import axios from "axios";

const App = () => {
  const [image, setImage] = useState<Image>();
  const client = useClient();

  const handleUpload = async () => {
    const imageToUpload = new FormData();
    imageToUpload.append("file", image!.file);

    const res = await client.getScore(imageToUpload);
    console.log(res);
  };

  return (
    <>
      <h1>BetterSEO</h1>
      <p>Take your website to the next level</p>
      <Dropzone image={image} setImage={setImage} />
      <UploadButton onClick={handleUpload} disabled={image === undefined} />
    </>
  );
};

export default App;
