import React from 'react';
import { Target, Eye, Globe, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Mission Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-zinc-950 p-12 md:p-20 rounded-[60px] relative overflow-hidden group cursor-pointer border border-zinc-900 shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-600/20 transition-all"></div>
           
           <div className="relative z-10 text-left">
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-purple-400 mb-8 border border-white/10 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl">
                 <Target size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-8">Our <span className="text-purple-600">Mission.</span></h3>
              <p className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-sm">
                Deliver unparalleled quality products by merging futuristic technology with timeless design aesthetics at accessible prices.
              </p>
           </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-zinc-50 p-12 md:p-20 rounded-[60px] relative overflow-hidden group cursor-pointer border border-zinc-100 shadow-sm"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-600/10 transition-all"></div>
           
           <div className="relative z-10 text-left">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-zinc-400 mb-8 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm">
                 <Eye size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter italic mb-8">Global <span className="text-zinc-300">Vision.</span></h3>
              <p className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-sm">
                Establishing ourselves as the most trusted online ecosystem where premium craftsmanship and user experience are king.
              </p>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;
