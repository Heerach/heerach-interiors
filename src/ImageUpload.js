// src/ImageUpload.js
import React, { useState } from 'react';
import { storage, firestore } from './firebase'; // Import Firebase storage and Firestore
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');

    // Create a reference to the storage path where the image will be stored
    const storageRef = ref(storage, `gallery/${file.name}`);

    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the file's download URL after upload
    const fileURL = await getDownloadURL(storageRef);

    // Save the image URL and other details in Firestore
    await addDoc(collection(firestore, 'gallery'), {
      imageUrl: fileURL,
      title: file.name
    });

    alert('Image uploaded successfully');
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
