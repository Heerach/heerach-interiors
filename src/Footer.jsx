// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-2xl font-semibold">Heerach Interiors</h4>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Heerach Interiors. All rights reserved.</p>
        </div>

        <div className="flex gap-4 text-white">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
