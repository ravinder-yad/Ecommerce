import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Zap, ShoppingCart, Tag } from 'lucide-react';

const ComboOffers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-12">
        
        {/* Deal 1: Tech Bundle */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="flex-1 bg-zinc-950 rounded-[48px] p-8 md:p-16 relative overflow-hidden group cursor-pointer border border-zinc-900 shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-rose-600/20 transition-all"></div>
           
           <div className="relative z-10 text-left">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-all">
                    <Tag size={16} />
                 </div>
                 <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.3em]">Combo Exclusive</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white leading-[0.9] uppercase tracking-tighter italic mb-8">
                 Tech <br/> <span className="text-rose-600">Starter</span> <br/> Bundle.
              </h3>
              
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest leading-relaxed mb-12 max-w-[240px]">
                 Buy any Elite Smartphone and get Pro Earbuds at flat 50% discount. Unleash performance.
              </p>

              <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest group-hover:text-rose-400 transition-colors">
                 Grab Bundle <Zap size={16} fill="currentColor" className="group-hover:translate-x-2 transition-transform" />
              </div>
           </div>
        </motion.div>

        {/* Deal 2: BOGO Offer */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="flex-1 bg-rose-50 rounded-[48px] p-8 md:p-16 relative overflow-hidden group cursor-pointer border border-rose-100 shadow-sm"
        >
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-600/10 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2 group-hover:bg-rose-200 transition-all"></div>
           
           <div className="relative z-10 text-left">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-rose-600 group-hover:bg-zinc-950 group-hover:text-white transition-all shadow-sm">
                    <Tag size={16} />
                 </div>
                 <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Season Sale</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-zinc-950 leading-[0.9] uppercase tracking-tighter italic mb-8">
                 Buy <span className="text-rose-600">1</span> Get <span className="text-rose-600 text-6xl">1</span> <br/> <span className="text-zinc-300">Free.</span>
              </h3>
              
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest leading-relaxed mb-12 max-w-[240px]">
                 On all signature tees and essentials. Mix and match your style for the festive season now.
              </p>

              <div className="flex items-center gap-4 text-zinc-950 font-black text-xs uppercase tracking-widest group-hover:text-rose-600 transition-colors">
                 Shop BOGO <ShoppingCart size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComboOffers;
