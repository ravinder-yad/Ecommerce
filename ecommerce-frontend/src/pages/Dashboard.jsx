import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FaUser, FaBoxOpen, FaHeart, FaMapMarkerAlt, FaCreditCard, FaEdit, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return null;

  const stats = [
    { icon: <FaBoxOpen />, label: 'Active Orders', value: '2', color: 'bg-purple-50 text-purple-600' },
    { icon: <FaHeart />, label: 'Wishlist Items', value: '5', color: 'bg-rose-50 text-rose-500' },
    { icon: <FaMapMarkerAlt />, label: 'Saved Addresses', value: '1', color: 'bg-emerald-50 text-emerald-600' },
  ];

  const quickLinks = [
    { icon: <FaUser />, label: 'Personal Information', sub: 'Name, Email, Profile Pic', path: '/profile' },
    { icon: <FaBoxOpen />, label: 'Order History', sub: 'View all past purchases', path: '/orders' },
    { icon: <FaHeart />, label: 'My Favorites', sub: 'Your curated wishlist', path: '/wishlist' },
    { icon: <FaCreditCard />, label: 'Payment Methods', sub: 'Manage cards & wallets', path: '/payments' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* 👋 Header Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 text-left"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl font-black shadow-2xl shadow-purple-200">
               {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic mb-1">Authenticated Account ✨</p>
              <h1 className="text-3xl font-black text-zinc-950 uppercase tracking-tighter">Welcome, {user.fullName.split(' ')[0]}</h1>
              <p className="text-zinc-500 text-sm font-medium">{user.email}</p>
            </div>
          </div>
          
          <Link to="/profile" className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-3.5 rounded-[22px] text-[10px] font-black uppercase tracking-widest text-zinc-800 hover:bg-zinc-950 hover:text-white transition-all shadow-sm">
            Edit Account Profile <FaEdit size={12} />
          </Link>
        </motion.div>

        {/* 📊 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {stats.map((stat, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all"
             >
                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                   {stat.icon}
                </div>
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 italic">{stat.label}</h4>
                <p className="text-3xl font-black text-zinc-950 tracking-tighter">{stat.value}</p>
             </motion.div>
           ))}
        </div>

        {/* 🧩 Quick Links section */}
        <div className="text-left mb-6">
           <h3 className="text-[11px] font-black text-zinc-950 uppercase tracking-widest ml-4">Account Essentials</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {quickLinks.map((link, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 + idx * 0.1 }}
             >
               <Link to={link.path} className="flex items-center justify-between p-6 bg-white border border-zinc-100 rounded-[28px] hover:border-purple-200 group transition-all shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                      {link.icon}
                    </div>
                    <div className="text-left">
                       <h4 className="text-[10px] font-black text-zinc-950 uppercase tracking-widest mb-0.5">{link.label}</h4>
                       <p className="text-[10px] font-medium text-zinc-400 leading-none">{link.sub}</p>
                    </div>
                  </div>
                  <FaChevronRight className="text-zinc-200 group-hover:text-purple-600 transition-colors" />
               </Link>
             </motion.div>
           ))}
        </div>

        {/* 🏷️ Logout Prompt */}
        <div className="mt-12 text-center">
           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-4 italic leading-relaxed">Want to switch accounts or end your session?</p>
           <button 
             onClick={() => {/* Use profile menu logout logic */}}
             className="text-xs font-black text-rose-500 hover:text-rose-600 uppercase tracking-widest underline decoration-rose-100 underline-offset-8"
           >
             Sign Out Account Securely
           </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
