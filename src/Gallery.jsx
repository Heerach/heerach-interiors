// src/Gallery.jsx
import React, { useEffect, useState } from 'react';
import { firestore, storage } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fetchImages = async () => {
    const snapshot = await firestore.collection('gallery').get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setImages(items);
  };

  const handleImageChange = e => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Choose a file first.");
    const fileRef = storage.ref().child(`gallery/${uuidv4()}_${file.name}`);
    await fileRef.put(file);
    const imageUrl = await fileRef.getDownloadURL();
    await firestore.collection('gallery').add({ imageUrl });
    setPreview(null);
    setFile(null);
    fetchImages();
  };

  const handleDelete = async (id, imageUrl) => {
    const imageRef = storage.refFromURL(imageUrl);
    await imageRef.delete();
    await firestore.collection('gallery').doc(id).delete();
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery Manager</h2>

      <input type="file" onChange={handleImageChange} />
      {preview && (
        <div>
          <img src={preview} alt="Preview" className="w-40 mt-2" />
          <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2">Upload</button>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {images.map((img) => (
          <div key={img.id} className="relative">
            <img src={img.imageUrl} alt="Gallery" className="w-full h-48 object-cover rounded" />
            <button
              onClick={() => handleDelete(img.id, img.imageUrl)}
              className="absolute top-1 right-1 bg-red-600 text-white p-1 text-xs rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const storageRef = ref(storage, `gallery/${file.name}`);
    try {
      // Upload file
      await uploadBytes(storageRef, file);

      // Get URL
      const url = await getDownloadURL(storageRef);

      // Save to Firestore
      await addDoc(collection(firestore, 'gallery'), { imageUrl: url });

      alert('Upload successful!');
      window.location.reload(); // refresh page to show new image
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      {/* Upload Area */}
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div>

      {/* Gallery Area */}
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
    </div>
  );


export default Gallery;
