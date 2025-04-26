import React, { useState, useEffect } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyClBA1_h7NiOhK6a3uh4gSuUGZmbCm1iCA",  // This is your actual API key
  authDomain: "heerach-495f1.firebaseapp.com",  // Replace with your Firebase Auth domain (auto-generated)
  projectId: "heerach-495f1",  // Your Firebase project ID
  storageBucket: "heerach-495f1.appspot.com",  // Your Firebase Storage Bucket
  messagingSenderId: "933639217329",  // Your Firebase Messaging Sender ID
  appId: "1:933639217329:web:b8b17fded3fc7ca8238290",  // Your Firebase App ID
  measurementId: "G-M8TTNGJNFB",  // Your Firebase Measurement ID (for Google Analytics)
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

const styleImages = {
  Modern: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1588854337236-f44f644013b7?auto=format&fit=crop&w=800&q=80',
  ],
  Traditional: [
    'https://images.unsplash.com/photo-1600573472534-69b2231d1e8b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
  ],
  Minimalist: [
    'https://images.unsplash.com/photo-1617806113683-6eeda5600653?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615873968403-fd51f8c70c7f?auto=format&fit=crop&w=800&q=80',
  ],
  Industrial: [
    'https://images.unsplash.com/photo-1617104674894-63a7e26b55a7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  ],
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  };

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(console.error);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleUpload = () => {
    if (!imageFile) return;
    const storageRef = ref(storage, `designs/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    setUploading(true);

    uploadTask.on(
      'state_changed',
      () => {},
      (error) => {
        console.error(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          alert('Image uploaded successfully!');
          console.log('Download URL:', downloadURL);
          setUploading(false);
          setImageFile(null);
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    if (!name || !email || !phone) {
      alert('All fields are required.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        e.target.reset();
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const review = e.target.review.value;

    if (!name || !email || !review) {
      alert('All fields are required.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, review }),
      });

      if (response.ok) {
        alert('Review submitted successfully!');
        e.target.reset();
      } else {
        alert('Failed to submit the review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="navbar">
        <div className="brand">Heerach Interiors</div>
        <nav>
          <ul>
            <li><a href="#designs">Designs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#why">Why Heerach</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button onClick={scrollToContact}>Get Consultation</button></li>
            <li>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
            {user ? (
              <li><button onClick={handleSignOut}>Sign Out</button></li>
            ) : (
              <li><button onClick={handleSignIn}>Admin Login</button></li>
            )}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Smart Designs for Elegant Living</h1>
          <p>Turn your home into a style statement with Heerach Interiors.</p>
          <button onClick={scrollToContact}>Book Free Visit</button>
        </div>
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="interior" />
        </div>
      </section>

      <section id="designs" className="designs">
        <h2>Our Design Styles</h2>
        <div className="styles-grid">
          {Object.keys(styleImages).map(style => (
            <div key={style} className="style-card" onClick={() => setSelectedStyle(style)}>
              <h3>{style}</h3>
              <p>{style === 'Modern' && 'Sleek, clean lines with contemporary finishes and smart functionality.'}
                {style === 'Traditional' && 'Warm tones, detailed woodwork, and timeless elegance rooted in culture.'}
                {style === 'Minimalist' && 'Simple and clutter-free designs for a calm, open, and airy space.'}
                {style === 'Industrial' && 'Raw textures, exposed brick, and metallic finishes for a rugged vibe.'}</p>
            </div>
          ))}
        </div>
        {selectedStyle && (
          <div className="style-gallery">
            <h3>{selectedStyle} Style Inspirations</h3>
            <div className="gallery-grid">
              {styleImages[selectedStyle].map((img, i) => (
                <img key={i} src={img} alt={`${selectedStyle} ${i + 1}`} />
              ))}
            </div>
          </div>
        )}
        {selectedStyle && (
  <div className="style-gallery">
    <h3>{selectedStyle} Style Inspirations</h3>
    <div className="gallery-grid">
      {selectedStyle === 'Modern' &&
        [1, 2, 3, 4].map(num => (
          <img key={num} src={`/designs/modern/m${num}.jpg`} alt={`Modern ${num}`} />
        ))
      }

      {selectedStyle === 'Traditional' &&
        [1, 2].map(num => (
          <img key={num} src={`/designs/traditional/t${num}.jpg`} alt={`Traditional ${num}`} />
        ))
      }

      {selectedStyle === 'Minimalist' &&
        [1, 2].map(num => (
          <img key={num} src={`/designs/minimalist/min${num}.jpg`} alt={`Minimalist ${num}`} />
        ))
      }

      {selectedStyle === 'Industrial' &&
        [1, 2].map(num => (
          <img key={num} src={`/designs/industrial/i${num}.jpg`} alt={`Industrial ${num}`} />
        ))
      }
    </div>
  </div>
)}


        {user && (
          <div className="upload-section">
            <h3>Upload New Design</h3>
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
            <button onClick={handleUpload} disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</button>
          </div>
        )}
      </section>

      <section id="why" className="why-heerach">
        <h2>Why Choose Heerach?</h2>
        <ul>
          <li>Personalized Designs Tailored to Your Taste</li>
          <li>10-Year Warranty on Interiors</li>
          <li>Dedicated Project Manager</li>
          <li>45-Day Delivery Promise</li>
        </ul>
      </section>

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Gallery 1" />
        <img src="https://media-hosting.imagekit.io/fef928b97d694009/00190dd1-1c01-42f8-832d-f0153d40a8c2.jpeg?Expires=1840264408&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TzNE~7nQqEsOSJJ~MNCwgTyS~YGIz79XkN4qWWP1X4wjLpS5jSdzaC-B-IqsVuB~SL1-FozWy8s4RNZfW9sVoR7E~NVH9QqMW5ADPCYz7S75y3VJFi5URM0lH3rEbmnakjFzc~kh6-A3HesPFKyNYGP4dXWoZh3leVypmqSQculy7y3dVS4WC3Sw-weD6cVwTtmlPjke5ZdBDm86-RnJq9Q8M4eMr9QJv~~A81kqBC5hyIHHGQb0ak5sDzYSqqr6bGp83SvWl9dY~biIChvMJo8IVQa-cNxs-Tndzu0NCL0YXsk1dDnp8vODmzLIPGbsGfNiWLFAoSapShBLLnWBoA__" alt="Gallery 1" />
         {/*<img src="https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%2200190dd1-1c01-42f8-832d-f0153d40a8c2.jpeg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-04-25T08%3A33%3A28.343Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2Ffef928b97d694009%2F00190dd1-1c01-42f8-832d-f0153d40a8c2.jpeg%3FExpires%3D1840264408%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DTzNE~7nQqEsOSJJ~MNCwgTyS~YGIz79XkN4qWWP1X4wjLpS5jSdzaC-B-IqsVuB~SL1-FozWy8s4RNZfW9sVoR7E~NVH9QqMW5ADPCYz7S75y3VJFi5URM0lH3rEbmnakjFzc~kh6-A3HesPFKyNYGP4dXWoZh3leVypmqSQculy7y3dVS4WC3Sw-weD6cVwTtmlPjke5ZdBDm86-RnJq9Q8M4eMr9QJv~~A81kqBC5hyIHHGQb0ak5sDzYSqqr6bGp83SvWl9dY~biIChvMJo8IVQa-cNxs-Tndzu0NCL0YXsk1dDnp8vODmzLIPGbsGfNiWLFAoSapShBLLnWBoA__%22%7D" alt="Gallery 2" />*/}
          <img src="https://plus.unsplash.com/premium_photo-1670359039073-90ded4b26501?q=80&w=1470&auto=format&fit=crop" alt="Gallery 2" />
          <img src="https://plus.unsplash.com/premium_photo-1687995672988-be514f56428e?q=80&w=1470&auto=format&fit=crop" alt="Gallery 3" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Gallery 4" />
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Heerach Interiors transformed our house beautifully. Truly happy with the results!"</p>
          <strong>- Akash Mehta</strong>
        </div>
        <div className="testimonial">
          <p>"Loved the professional approach and speedy delivery. Highly recommend them!"</p>
          <strong>- Riya Kapoor</strong>
        </div>

        <div className="review-form">
          <h3>Leave a Review</h3>
          <form onSubmit={handleReviewSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="review" placeholder="Your Review" rows="4" required></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </section>

      <section className="manager-contact">
        <h2>Our Managers</h2>
        <ul>
          <li><strong>Mr. Rupesh Raju</strong> - 📞 +91 98765 4321, 📍 Bangalore</li>
          <li><strong>Mr. Achyuth Reddy</strong> - 📞 +91 91234 5678, 📍 Mumbai</li>
          <li><strong>Mr. Mahesh</strong> - 📞 +91 99887 7665, 📍 Hyderabad</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Book a Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Heerach Interiors | Designed with ❤️</p>
      </footer>
    </div>
  );
};

export default App;
