import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBoxOpen, FaHeart, FaSignOutAlt, FaChevronDown, FaThLarge } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';

const ProfileMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
    toast.success('Logged out successfully');
    navigate('/');
  };

  const menuItems = [
    { icon: <FaThLarge className="text-zinc-400 group-hover:text-purple-600 transition-colors" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaUser className="text-zinc-400 group-hover:text-purple-600 transition-colors" />, label: 'My Profile', path: '/profile' },
    { icon: <FaBoxOpen className="text-zinc-400 group-hover:text-purple-600 transition-colors" />, label: 'My Orders', path: '/orders' },
    { icon: <FaHeart className="text-zinc-400 group-hover:text-rose-500 transition-colors" />, label: 'Wishlist', path: '/wishlist' },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* 🟢 Trigger (Navbar UI) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-full px-2 py-2 md:pl-5 md:pr-4 hover:border-purple-200 hover:bg-white transition-all cursor-pointer group shadow-sm active:scale-95"
      >
        {/* Profile Icon 👤 */}
        <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md shadow-purple-100 group-hover:scale-105 transition-transform">
          <FaUser size={14} />
        </div>
        
        {/* User Name (Ravindra) */}
        <div className="hidden md:flex flex-col text-left leading-none">
          <p className="text-[10px] font-black text-zinc-950 uppercase tracking-widest">{user.fullName.split(' ')[0]}</p>
        </div>
        
        {/* Dropdown Arrow ⬇️ */}
        <FaChevronDown className={`text-[10px] text-zinc-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:text-purple-600'}`} />
      </button>

      {/* 🟣 Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-60 bg-white/95 backdrop-blur-xl border border-zinc-100 rounded-[28px] shadow-2xl p-3 z-50 origin-top-right overflow-hidden"
          >
            {/* 👋 Hello, {Name} Greeting */}
            <div className="px-5 py-4 border-b border-zinc-50 mb-2">
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest italic mb-0.5">Welcome back, ✨</p>
              <h4 className="text-[11px] font-black text-zinc-950 truncate uppercase tracking-widest">{user.fullName}</h4>
            </div>

            {/* Menu Items */}
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-zinc-50 group transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center group-hover:bg-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-zinc-950 transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}

              <div className="h-[1px] bg-zinc-50 my-2 mx-5"></div>

              {/* 🔓 Sign Out Button */}
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-rose-50 group transition-all text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center group-hover:bg-white transition-all shadow-sm">
                  <FaSignOutAlt className="text-rose-400 group-hover:text-rose-600 transition-colors" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 group-hover:text-rose-600 transition-colors">
                  Sign Out
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileMenu;
