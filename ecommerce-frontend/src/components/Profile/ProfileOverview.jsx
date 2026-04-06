import React from 'react';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaHeart, FaMapMarkerAlt, FaCreditCard, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileOverview = ({ setActiveTab }) => {
  const stats = [
    { icon: <FaBoxOpen />, label: 'Orders placed', value: '4', color: 'bg-indigo-50 text-indigo-600' },
    { icon: <FaHeart />, label: 'In Wishlist', value: '12', color: 'bg-rose-50 text-rose-500' },
    { icon: <FaMapMarkerAlt />, label: 'Addresses', value: '2', color: 'bg-emerald-50 text-emerald-600' },
  ];

  const quickActions = [
    { label: 'View Order History', sub: 'Manage your recent purchases', icon: <FaBoxOpen />, tab: 'orders' },
    { label: 'Edit Profile Settings', sub: 'Update name, email & privacy', icon: <FaUserCircle size={16} />, tab: 'settings' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-zinc-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group flex flex-col items-center justify-center text-center">
            <div className={`w-14 h-14 rounded-[22px] ${stat.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
               {stat.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-zinc-950 tracking-tighter">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Quick Access Card */}
      <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm text-left">
         <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-950 mb-6">Recent Activity Hub</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => setActiveTab('orders')}
              className="flex items-center justify-between p-6 bg-zinc-50 border border-zinc-100 rounded-[28px] hover:border-purple-200 group transition-all text-left"
            >
               <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-purple-600 transition-colors shadow-sm">
                     <FaBoxOpen />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black text-zinc-950 uppercase tracking-widest leading-none">View All Orders</h5>
                    <p className="text-[10px] text-zinc-400 font-medium">Track your luxury purchases</p>
                  </div>
               </div>
               <FaChevronRight className="text-zinc-200 group-hover:text-purple-600 transition-colors" />
            </button>

            <button 
              onClick={() => setActiveTab('settings')}
              className="flex items-center justify-between p-6 bg-zinc-50 border border-zinc-100 rounded-[28px] hover:border-purple-200 group transition-all text-left"
            >
               <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-purple-600 transition-colors shadow-sm">
                     <FaCreditCard />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black text-zinc-950 uppercase tracking-widest leading-none">Settings Hub</h5>
                    <p className="text-[10px] text-zinc-400 font-medium">Manage your personal space</p>
                  </div>
               </div>
               <FaChevronRight className="text-zinc-200 group-hover:text-purple-600 transition-colors" />
            </button>
         </div>
      </div>
    </motion.div>
  );
};

// Placeholder for user circle icon
const FaUserCircle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default ProfileOverview;
