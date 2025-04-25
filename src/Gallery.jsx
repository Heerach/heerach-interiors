// src/Gallery.js
/*import React, { useEffect, useState } from 'react';
import { firestore } from './firebaseConfig'; // Import Firestore service
import { collection, getDocs } from 'firebase/firestore';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from Firestore
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'gallery'));
      const imagesData = querySnapshot.docs.map(doc => doc.data());
      setImages(imagesData);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <img key={index} src={image.imageUrl} alt={image.title} />
      ))}
    </div>
  );
};

export default Gallery;*/
// src/Gallery.jsx
import React, { useEffect, useState } from 'react';
import { firestore } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'gallery'));
        const imagesData = querySnapshot.docs.map(doc => doc.data());
        setImages(imagesData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-grid">
      {images.length === 0 ? (
        <p>No images found in gallery.</p>
      ) : (
        images.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={image.title || `Gallery ${index + 1}`}
            className="gallery-image"
          />
        ))
      )}
    </div>
  );
};

export default Gallery;

