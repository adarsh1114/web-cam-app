// App.js
import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const App = () => {
  const webcamRef = React.useRef(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Send image to backend for face recognition
    try {
      const response = await axios.post('/api/recognize-face', { image: imageSrc });
      console.log(response.data);
      setIsDetecting(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsDetecting(true);
    const interval = setInterval(() => {
      capture();
    }, 3000); // Every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Webcam ref={webcamRef} />
      {isDetecting && <p>Detecting...</p>}
    </div>
  );
};

export default App;
