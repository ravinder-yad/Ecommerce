import React from 'react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className="space-y-6 mb-10">
      <div className="flex gap-4">
        <button className="flex-1 bg-zinc-50 border border-zinc-100 py-4 rounded-[20px] flex items-center justify-center text-zinc-950 transition-all hover:border-blue-500/30 hover:bg-blue-50/20 active:scale-95 group">
           <FaGoogle className="text-rose-500 group-hover:scale-110 transition-transform" />
        </button>
        <button className="flex-1 bg-zinc-50 border border-zinc-100 py-4 rounded-[20px] flex items-center justify-center text-zinc-950 transition-all hover:border-blue-600/30 hover:bg-blue-50/20 active:scale-95 group">
           <FaFacebookF className="text-blue-600 group-hover:scale-110 transition-transform" />
        </button>
        <button className="flex-1 bg-zinc-50 border border-zinc-100 py-4 rounded-[20px] flex items-center justify-center text-zinc-950 transition-all hover:border-zinc-300 hover:bg-zinc-100 active:scale-95 group">
           <FaApple className="text-zinc-950 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="relative flex items-center py-5">
        <div className="flex-grow border-t border-zinc-100"></div>
        <span className="flex-shrink mx-4 text-[10px] font-black text-zinc-300 uppercase tracking-widest">Or Continue With Email</span>
        <div className="flex-grow border-t border-zinc-100"></div>
      </div>
    </div>
  );
};

export default SocialLogin;
