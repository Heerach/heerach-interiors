// src/components/Contact.jsx
const managers = [
    {
      name: 'Ravi Mehta',
      phone: '+91 98765 43210',
      address: 'Heerach Interiors, Andheri East, Mumbai',
    },
    {
      name: 'Sneha Kapoor',
      phone: '+91 91234 56789',
      address: 'Heerach Interiors, HSR Layout, Bengaluru',
    },
  ];
  
  const Contact = () => {
    return (
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">Interested in a home transformation? Call or visit our managers in your city.</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          {managers.map((manager, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{manager.name}</h3>
              <p className="text-gray-700"><strong>Phone:</strong> {manager.phone}</p>
              <p className="text-gray-700"><strong>Address:</strong> {manager.address}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Contact;
  