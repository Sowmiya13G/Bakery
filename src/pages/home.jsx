import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [imageName, setImageName] = useState(''); // Store the original image name
  const apiKey = 'ZKfDcPxvMesJKy7bEcggFetY';

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImageName(file.name.split('.')[0]); // Get the name without the extension
  };

  const handleRemoveBg = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image_file', selectedFile);
    formData.append('size', 'auto');

    try {
      const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob', // Important to get the image as a blob
      });

      const blob = response.data;
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImage(imageUrl);
    } catch (error) {
      console.error('Error removing background:', error);
    }
  };

  return (
    <div>
      <h1>Remove Image Background</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleRemoveBg}>Remove Background</button>

      {processedImage && (
        <div>
          <h2>Processed Image:</h2>
          <img src={processedImage} alt="Background Removed" />
          <br />
          <a href={processedImage} download={`${imageName}_no-bg.png`}>
            <button>Download Image</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;

