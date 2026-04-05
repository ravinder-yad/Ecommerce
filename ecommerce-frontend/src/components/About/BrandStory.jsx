import React from 'react';
import { motion } from 'framer-motion';

const JOURNEY = [
  { year: '2023', title: 'The Vision Born', desc: 'A collective of 3 designers and developers met in a small studio with one goal: to create a digital marketplace that felt like a luxury physical store.' },
  { year: '2024', title: 'The Expansion', desc: 'ShopVerse reached its first 10,000 customers. We integrated global logistics and added 200+ premium categories to our growing collection.' },
  { year: '2025', title: 'The New Standard', desc: 'Establishing our presence as the leading luxury eCommerce hub. Introducing AI-powered personalization and signature collections.' },
];

const BrandStory = () => {
  return (
    <section className="py-32 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 text-center max-w-4xl relative">
        <h2 className="text-4xl md:text-6xl font-black text-zinc-950 leading-none uppercase tracking-tighter italic mb-20 text-center">
           Our <span className="text-zinc-300">Journey.</span>
        </h2>

        {/* Vertical Timeline */}
        <div className="relative pt-10">
           {/* Center Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2"></div>
           
           <div className="space-y-32">
              {JOURNEY.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex items-center justify-center gap-12 relative ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                   {/* Year Bubble */}
                   <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-black text-xs italic shadow-xl z-10 transition-all group-hover:scale-110">
                      {step.year}
                   </div>
                   
                   {/* Info Side */}
                   <div className={`w-1/2 transition-all p-8 flex flex-col ${idx % 2 === 0 ? 'items-end' : 'items-start'}`}>
                      <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter italic mb-4 leading-none">{step.title}</h3>
                      <p className={`text-zinc-500 font-bold text-[10px] uppercase tracking-widest leading-relaxed max-w-[280px] ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                         {step.desc}
                      </p>
                   </div>
                   
                   {/* Empty Side (Space Filler) */}
                   <div className="w-1/2"></div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;
