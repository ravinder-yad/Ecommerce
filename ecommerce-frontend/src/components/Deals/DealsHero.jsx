import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap } from 'lucide-react';

const DealsHero = () => {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-rose-600">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-900/40 blur-[80px] rounded-full translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white text-rose-600 text-[10px] font-black tracking-[0.3em] px-5 py-2 rounded-full mb-8 uppercase shadow-xl"
          >
            <Zap size={14} fill="currentColor" className="animate-pulse" />
            Limited Season Festival
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-zinc-950 leading-[0.85] uppercase tracking-tighter italic mb-8"
          >
            Big <br/> <span className="text-white">Savings.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-rose-100 font-bold uppercase tracking-widest text-xs md:text-sm max-w-md leading-relaxed mb-10"
          >
            Unbeatable prices on global brands. Bag your favorites before the clock runs out on the boldest sale of 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
             <button className="bg-zinc-950 text-white font-black px-10 py-5 rounded-3xl hover:bg-white hover:text-rose-600 transition-all duration-300 uppercase tracking-widest text-xs flex items-center gap-3 active:scale-95 shadow-2xl">
                <ShoppingBag size={18} />
                Explore All Deals
             </button>
             <div className="text-white font-black text-4xl italic tracking-tighter underline underline-offset-8 decoration-8 decoration-rose-400/50">
               -70%
             </div>
          </motion.div>
        </div>

        {/* Hero Visual Element (Abstract Shape) */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
           <div className="w-[450px] h-[450px] bg-zinc-950 rounded-[80px] rotate-12 shadow-2xl overflow-hidden flex items-center justify-center p-12 border border-white/10">
              <div className="text-center text-white">
                 <p className="text-[140px] font-black italic tracking-tighter opacity-10 uppercase leading-none">HOT</p>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Zap size={160} fill="#e11d48" className="text-rose-600 filter drop-shadow-2xl" />
                 </div>
                 <p className="text-[140px] font-black italic tracking-tighter opacity-10 uppercase leading-none mt-12">SALE</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DealsHero;
