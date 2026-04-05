import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-charcoal text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center bg-[#1a1a1a]">
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center gap-1">
          <FaPhoneAlt className="text-purple-400" />
          <span>+91 89494 77114</span>
        </div>
        <div className="flex items-center gap-1 border-l border-zinc-700 pl-4">
          <FaEnvelope className="text-purple-400" />
          <span>support@shopverse.com</span>
        </div>
      </div>

      <div className="flex-1 text-center md:flex-none">
        <span className="font-medium">🎉 Free Delivery on orders above ₹999!</span>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-colors">
          <FaMapMarkerAlt />
          <span>Location</span>
        </div>
        <div className="border-l border-zinc-700 pl-4 flex gap-3">
          <Link to="/login" className="cursor-pointer hover:text-purple-400 transition-colors">Login</Link>
          <Link to="/signup" className="cursor-pointer hover:text-purple-400 transition-colors">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
