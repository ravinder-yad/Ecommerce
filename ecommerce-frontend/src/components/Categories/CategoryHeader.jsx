import React from 'react';
import { motion } from 'framer-motion';

const CategoryHeader = () => {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-zinc-950">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"></div>
         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-black tracking-[0.3em] px-6 py-2 rounded-full mb-8 uppercase"
        >
          Explore All Floors
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter italic mb-8"
        >
          Shop by <br/> <span className="text-purple-600">Categories.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-500 font-bold uppercase tracking-widest text-xs max-w-lg mx-auto leading-relaxed"
        >
          Discover curated worlds of fashion, technology, and lifestyle essentials meticulously picked for the bold.
        </motion.p>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  );
};

export default CategoryHeader;
