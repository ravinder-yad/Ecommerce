import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

const CategoryPromo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-12">
        
        {/* Promo 1: Luxury Focus */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="flex-1 bg-zinc-950 rounded-[48px] p-8 md:p-16 relative overflow-hidden group cursor-pointer border border-zinc-900 border-zinc-800 shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-600/20 transition-all"></div>
           
           <div className="relative z-10 text-left">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Tag size={16} />
                 </div>
                 <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em]">Exclusive Offer</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white leading-none uppercase tracking-tighter italic mb-8">
                 The <br/> <span className="text-purple-600">Luxury</span> <br/> Choice.
              </h3>
              
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest leading-relaxed mb-12 max-w-[240px]">
                 Flat 30% OFF on all premium jewelry and signature timepieces. Limited time only.
              </p>

              <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest group-hover:text-purple-400 transition-colors">
                 Explores Deal <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
           </div>
        </motion.div>

        {/* Promo 2: Modern Essentials */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="flex-1 bg-zinc-50 rounded-[48px] p-8 md:p-16 relative overflow-hidden group cursor-pointer border border-zinc-200 shadow-sm"
        >
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-200/50 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2 group-hover:bg-purple-100 transition-all"></div>
           
           <div className="relative z-10 text-left">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                    <Tag size={16} />
                 </div>
                 <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Season Sale</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-zinc-900 leading-none uppercase tracking-tighter italic mb-8">
                 Modern <br/> <span className="text-zinc-300">Essentials.</span>
              </h3>
              
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest leading-relaxed mb-12 max-w-[240px]">
                 Upgrade your daily wardrobe with our minimalist selection. Now with extra benefits.
              </p>

              <div className="flex items-center gap-4 text-zinc-900 font-black text-xs uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                 Browse Sale <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CategoryPromo;
