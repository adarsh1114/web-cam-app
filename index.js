// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { detectFaces } = require('./faceRecognition'); // Function to detect faces

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Endpoint for face recognition
app.post('/api/recognize-face', async (req, res) => {
  const { image } = req.body;
  try {
    const faces = await detectFaces(image);
    res.json({ faces });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
