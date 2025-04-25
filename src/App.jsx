import React, { useState } from 'react'; 
import './App.css';

const styleImages = {
  Modern: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1588854337236-f44f644013b7?auto=format&fit=crop&w=800&q=80'
  ],
  Traditional: [
    'https://images.unsplash.com/photo-1600573472534-69b2231d1e8b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
  ],
  Minimalist: [
    'https://images.unsplash.com/photo-1617806113683-6eeda5600653?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615873968403-fd51f8c70c7f?auto=format&fit=crop&w=800&q=80'
  ],
  Industrial: [
    'https://images.unsplash.com/photo-1617104674894-63a7e26b55a7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  ]
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
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
            <li><button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '☀️ Light' : '🌙 Dark'}</button></li>
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
          <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80" alt="Gallery 1" />
          <img src="https://plus.unsplash.com/premium_photo-1670359039073-90ded4b26501?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" alt="Gallery 2" />
          <img src="https://plus.unsplash.com/premium_photo-1687995672988-be514f56428e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80" alt="Gallery 3" />
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
      </section>

      <section className="manager-contact">
        <h2>Our Managers</h2>
        <ul>
          <li><strong>Mr. Rupesh Raju </strong> - 📞 +91 987654321, 📍 Bangalore</li>
          <li><strong>Mr. Achyuth Reddy</strong> - 📞 +91 912345678, 📍 Mumbai</li>
          <li><strong>Mr. Mahesh </strong> - 📞 +91 998877665, 📍 Hyderabad</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Book a Free Consultation</h2>
        <form action="https://formspree.io/f/xblojbwp" method="POST">
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
