// src/components/DesignStyles.jsx
const styles = [
    {
      title: 'Modern',
      image: '/assets/images/modern.jpg',
      description: 'Clean lines, neutral colors, and smart space use.',
    },
    {
      title: 'Traditional',
      image: '/assets/images/traditional.jpg',
      description: 'Classic wooden textures and rich details.',
    },
    {
      title: 'Minimalist',
      image: '/assets/images/minimalist.jpg',
      description: 'Simplicity with function and elegance.',
    },
    {
      title: 'Industrial',
      image: '/assets/images/industrial.jpg',
      description: 'Raw finishes and bold, rustic elements.',
    },
  ];
  
  const DesignStyles = () => {
    return (
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Design Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition">
              <img src={style.image} alt={style.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{style.title}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default DesignStyles;
  