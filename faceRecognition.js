// faceRecognition.js
const { loadImage, detectAllFaces } = require('face-api.js');
const canvas = require('canvas');

const { Canvas, Image, ImageData } = canvas;
// Configure face-api.js
const faceapi = require('face-api.js');
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

async function detectFaces(image) {
  const img = await loadImage(image);
  const faces = await detectAllFaces(img);
  return faces;
}

module.exports = { detectFaces };
