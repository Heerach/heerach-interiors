// src/Gallery.js
import React, { useEffect, useState } from 'react';
import { firestore } from './firebase'; // Import Firestore service
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

export default Gallery;
