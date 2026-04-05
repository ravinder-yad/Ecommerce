import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-white flex overflow-hidden">
      {/* 1. Left Visual Side (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900 items-center justify-center p-20 overflow-hidden">
         {/* Premium Image Background */}
         <div className="absolute inset-0">
            <img 
               src={isLogin 
                 ? "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
                 : "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
               } 
               className="w-full h-full object-cover opacity-60" 
               alt="Auth Visual" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/80 via-transparent to-transparent"></div>
         </div>

         {/* Content Overlay */}
         <div className="relative z-10 text-left w-full h-full flex flex-col justify-between">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer w-fit">
               <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:bg-purple-600 transition-all">
                  <ArrowLeft size={20} />
               </div>
               <span className="text-white font-black uppercase tracking-widest text-[10px]">Back to Home</span>
            </Link>

            <div>
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="w-16 h-16 bg-purple-600 rounded-[24px] flex items-center justify-center text-white font-black text-3xl mb-8 shadow-2xl"
               >
                  SV
               </motion.div>
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-6xl xl:text-8xl font-black text-white leading-none uppercase tracking-tighter italic mb-8"
               >
                  {isLogin ? "Welcome" : "Join The"} <br/> 
                  <span className="text-purple-400">{isLogin ? "Back." : "Vibe."}</span>
               </motion.h1>
               <p className="text-zinc-300 font-bold uppercase tracking-[0.3em] text-xs max-w-sm leading-relaxed">
                  {isLogin 
                    ? "Step into the world of luxury retail and personalized experiences." 
                    : "Create your signature profile and unlock exclusive designer collections."}
               </p>
            </div>

            <div className="flex gap-12">
               <div className="text-left border-l-2 border-white/20 pl-6">
                  <p className="text-white font-black text-2xl italic tracking-tighter mb-1">50K+</p>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[8px]">Active Users</p>
               </div>
               <div className="text-left border-l-2 border-white/20 pl-6">
                  <p className="text-white font-black text-2xl italic tracking-tighter mb-1">99%</p>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[8px]">Satisfaction</p>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Right Form Side */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-20 relative overflow-y-auto no-scrollbar">
         <div className="max-w-md w-full py-12">
            <div className="mb-12">
               <h2 className="text-4xl font-black text-zinc-950 uppercase tracking-tighter italic leading-none mb-4">{title}</h2>
               <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{subtitle}</p>
            </div>

            {children}

            {/* Footer Links */}
            <div className="mt-12 text-center">
               <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">
                  {isLogin ? "Don't have an account?" : "Already an insider?"}
               </p>
               <Link 
                 to={isLogin ? "/signup" : "/login"} 
                 className="inline-block w-full border border-zinc-200 text-zinc-950 font-black py-5 rounded-[24px] uppercase tracking-widest text-[10px] hover:border-purple-600 hover:text-purple-600 transition-all active:scale-95 shadow-sm"
               >
                  {isLogin ? "Create New Account" : "Access Your Account"}
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AuthLayout;
