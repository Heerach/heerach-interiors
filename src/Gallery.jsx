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
/*import React, { useEffect, useState } from 'react';
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

export default Gallery;*/

// src/components/Gallery.jsx
const galleryItems = [
  { title: 'Living Room Makeover', image: '/assets/images/gallery1.jpg' },
  { title: 'Modular Kitchen', image: '/assets/images/gallery2.jpg' },
  { title: 'Elegant Bedroom', image: '/assets/images/gallery3.jpg' },
  { title: 'Rustic Workspace', image: '/assets/images/gallery4.jpg' },
];

const Gallery = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2 opacity-0 group-hover:opacity-100 transition">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;


