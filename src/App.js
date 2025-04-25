// src/App.js
import React from 'react';
import Gallery from './Gallery';
import ImageUpload from './ImageUpload';
import Auth from './Auth';

const App = () => {
  return (
    <div className="App">
      <Auth /> {/* Authentication Component */}
      <h2>Gallery</h2>
      <Gallery /> {/* Gallery Component */}
      <h2>Upload Image</h2>
      <ImageUpload /> {/* Image Upload Component */}
    </div>
  );
};

export default App;
