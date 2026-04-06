import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEdit, FaCamera } from 'react-icons/fa';

const ProfileHeader = ({ user, setActiveTab }) => {
  if (!user) return null;

  const getInitials = (name) => {
     return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white border border-zinc-100 rounded-[32px] p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 transition-all hover:shadow-xl">
      <div className="flex items-center gap-6">
         {/* Avatar with Camera Icon */}
         <div className="relative group">
            <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl font-black shadow-2xl shadow-purple-200 group-hover:scale-105 transition-transform duration-500">
               {getInitials(user.fullName)}
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-zinc-950 text-white rounded-xl flex items-center justify-center border-2 border-white cursor-pointer hover:bg-purple-600 transition-colors shadow-lg">
               <FaCamera size={12} />
            </button>
         </div>

         {/* Identity Info */}
         <div className="text-left">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 italic leading-none">Standard Member ✨</p>
            <h2 className="text-3xl font-black text-zinc-950 tracking-tighter uppercase mb-1">{user.fullName}</h2>
            <p className="text-zinc-500 text-sm font-medium">{user.email}</p>
         </div>
      </div>

      <button 
        onClick={() => setActiveTab('settings')}
        className="inline-flex items-center gap-3 bg-zinc-50 border border-zinc-100 px-6 py-3.5 rounded-[22px] text-[10px] font-black uppercase tracking-widest text-zinc-800 hover:bg-zinc-950 hover:text-white transition-all shadow-sm active:scale-95 group"
      >
        Edit Account Profile <FaEdit size={12} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ProfileHeader;
