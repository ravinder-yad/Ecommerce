import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-zinc-50 border-b border-zinc-100">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block bg-white text-zinc-400 text-[10px] font-black tracking-[0.4em] px-8 py-2.5 rounded-full mb-8 uppercase border border-zinc-200 shadow-sm"
        >
          Always Connected
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[100px] font-black text-zinc-950 leading-[0.85] uppercase tracking-tighter italic mb-10"
        >
          Get <br/> <span className="text-purple-600">In Touch.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs max-w-xl leading-loose"
        >
          Have questions about an order, a product, or just want to say hi? Our team is available 24/7 to ensure your ShopVerse experience is nothing short of extraordinary.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
