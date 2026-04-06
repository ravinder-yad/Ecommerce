import React from 'react';
import { motion } from 'framer-motion';
import { FaThLarge, FaBoxOpen, FaHeart, FaMapMarkerAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
     dispatch(logout());
     toast.success('Logged out successfully');
  };

  const menuItems = [
    { id: 'dashboard', icon: <FaThLarge />, label: 'Dashboard' },
    { id: 'orders', icon: <FaBoxOpen />, label: 'My Orders' },
    { id: 'wishlist', icon: <FaHeart />, label: 'Wishlist' },
    { id: 'address', icon: <FaMapMarkerAlt />, label: 'Addresses' },
    { id: 'settings', icon: <FaCog />, label: 'Settings' },
  ];

  return (
    <div className="bg-white border border-zinc-100 rounded-[32px] p-4 shadow-sm sticky top-28 h-fit">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group text-left
              ${activeTab === item.id 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-100' 
                : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950'}
            `}
          >
            <div className={`text-lg transition-transform group-hover:scale-110 duration-300
               ${activeTab === item.id ? 'text-white' : 'text-zinc-300 group-hover:text-purple-600'}
            `}>
               {item.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}

        <div className="h-[1px] bg-zinc-50 my-4 mx-4"></div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-rose-500 hover:bg-rose-50 transition-all group text-left"
        >
          <div className="text-lg text-rose-300 group-hover:text-rose-600 transition-colors">
             <FaSignOutAlt />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
