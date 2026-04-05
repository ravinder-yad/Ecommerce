import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-16 pb-32 overflow-hidden bg-white">
      {/* Soft Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-50 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-50 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block bg-zinc-100 text-zinc-400 text-[10px] font-black tracking-[0.4em] px-8 py-2.5 rounded-full mb-10 uppercase border border-zinc-200 shadow-sm"
        >
          Beyond Commercials
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[120px] font-black text-zinc-950 leading-[0.8] uppercase tracking-tighter italic mb-12"
        >
          We Are <br/> <span className="text-purple-600">ShopVerse.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs max-w-2xl mx-auto leading-loose"
        >
          Born from a desire to bridge technical precision with lifestyle elegance. We don't just sell products; we curate experiences that define the bold and the visionary. Our journey is a testament to the power of pure design and trust.
        </motion.p>
      </div>

      {/* Aesthetic Divider Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
    </section>
  );
};

export default AboutHero;
