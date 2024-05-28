const UploadButton = () => {
  const handleClick = () => {
    alert("File uploaded!");
  };

  return <button onClick={handleClick}>Upload Screenshot</button>;
};

export default UploadButton;
