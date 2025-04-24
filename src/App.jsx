import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
          <div className="style-card">
            <h3>Modern</h3>
            <p>Sleek, clean lines with contemporary finishes and smart functionality.</p>
          </div>
          <div className="style-card">
            <h3>Traditional</h3>
            <p>Warm tones, detailed woodwork, and timeless elegance rooted in culture.</p>
          </div>
          <div className="style-card">
            <h3>Minimalist</h3>
            <p>Simple and clutter-free designs for a calm, open, and airy space.</p>
          </div>
          <div className="style-card">
            <h3>Industrial</h3>
            <p>Raw textures, exposed brick, and metallic finishes for a rugged vibe.</p>
          </div>
        </div>
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
          <img src="https://images.unsplash.com/photo-1588854337236-f44f644013b7?auto=format&fit=crop&w=800&q=80" alt="Gallery 2" />
          <img src="https://images.unsplash.com/photo-1622650247048-b98c7e3619a2?auto=format&fit=crop&w=800&q=80" alt="Gallery 3" />
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
          <li><strong>Mr. Rakesh Mehta</strong> - 📞 +91 98765 43210, 📍 Bangalore</li>
          <li><strong>Ms. Priya Desai</strong> - 📞 +91 91234 56789, 📍 Mumbai</li>
          <li><strong>Mr. Amit Verma</strong> - 📞 +91 99887 76655, 📍 Hyderabad</li>
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
