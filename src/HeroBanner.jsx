// src/components/HeroBanner.jsx
const HeroBanner = () => {
    return (
      <section className="bg-cover bg-center h-[90vh] text-white flex items-center justify-center" style={{ backgroundImage: 'url(/assets/images/hero.jpg)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Home with Heerach Interiors</h1>
          <p className="text-lg mb-6">Elegant. Affordable. Timeless Designs for Every Taste.</p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">Explore Designs</button>
        </div>
      </section>
    );
  };
  
  export default HeroBanner;
  