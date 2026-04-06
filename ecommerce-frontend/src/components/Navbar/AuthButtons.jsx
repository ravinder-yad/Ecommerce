import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-3 ml-2">
      <Link 
        to="/login" 
        className="hidden md:block text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-purple-600 transition-colors"
      >
        Sign In
      </Link>
      <Link 
        to="/signup" 
        className="flex items-center border border-zinc-200 rounded-full px-5 py-2.5 gap-2 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all hover:shadow-md group text-left"
      >
        <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center border border-zinc-300 group-hover:border-purple-400 group-hover:bg-white overflow-hidden transition-all">
          <FaUser className="text-zinc-500 text-[10px] group-hover:text-purple-600" />
        </div>
        <p className="text-[10px] font-black text-zinc-800 uppercase tracking-widest hidden sm:block">Join Now</p>
      </Link>
    </div>
  );
};

export default AuthButtons;
