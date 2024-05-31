import { Dropzone, UploadButton } from "./components";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Image } from "./types/forms";
import "./style/Button.css";
import useClient from "./hooks/useClient/useClient";

const App = () => {
  const [image, setImage] = useState<Image>();
  const client = useClient();
  const [score, setScore] = useState<Number>();
  const [showScore, setShowScore] = useState<Boolean>(false)

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (showScore === true){    
    if (cardRef.current) {
        cardRef.current.scrollIntoView({ behavior: 'smooth' });
      }}
  }, [showScore]) 

  const handleUpload = async () => {
    const imageToUpload = new FormData();
    imageToUpload.append("file", image!.file);

    const res = await client.getScore(imageToUpload);
    console.log(res);

    setScore(Math.floor(res.SEOScore));
    setShowScore(true);

    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <h1>BetterSEO</h1>
      <p>Take your website to the next level</p>
      <Dropzone image={image} setImage={setImage} />
      <UploadButton onClick={handleUpload} disabled={image === undefined} />
      {showScore && <div ref={cardRef}>
        <div className="container">
          <div className="result">
            <p>Your SEO score is: </p>
            <h1 className="score">{score?.toString()}</h1>
          </div>
        </div>
      </div>}
    </>
  );
};

export default App;
