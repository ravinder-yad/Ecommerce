import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../ProductCard';

const saleProducts = [
  { id: 5, name: 'Crystal Luxury Sunglasses', category: 'Accessories', price: 5499, oldPrice: 9999, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop', isNew: false, discount: 45 },
  { id: 6, name: 'Silk Business Suit', category: 'Fashion', price: 18999, oldPrice: 25999, image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6fe0f?q=80&w=2080&auto=format&fit=crop', isNew: true, discount: 30 },
];

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 42,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-zinc-950 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sales Info & Timer */}
          <div className="lg:col-span-5 text-left">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center text-white animate-pulse">
                   <FaBolt />
                </div>
                <span className="text-xs font-black text-rose-500 uppercase tracking-widest leading-none">Limited Time Offer</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter italic mb-8">
                Midnight <br/> 
                <span className="text-purple-500">Flash Sale.</span>
             </h2>
             
             <p className="text-zinc-500 font-medium text-lg mb-12 max-w-md">
                Our most exclusive items at prices you won't believe. Once the timer hits zero, these deals are gone forever.
             </p>

             {/* Timer Components */}
             <div className="flex gap-4 mb-12">
                {[
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Sec' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                     <div className="w-20 h-24 bg-white/5 border border-white/10 backdrop-blur-md rounded-[24px] flex items-center justify-center mb-3">
                        <span className="text-4xl font-black text-white italic tabular-nums">{item.value < 10 ? `0${item.value}` : item.value}</span>
                     </div>
                     <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
             </div>

             <button className="flex items-center gap-4 group">
                <div className="bg-purple-600 text-white font-black px-8 py-4 rounded-2xl group-hover:bg-purple-700 transition-all uppercase tracking-widest text-xs">
                   Claim Deal Now
                </div>
                <div className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
             </button>
          </div>

          {/* Featured Sale Products */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
             {saleProducts.map((p) => (
               <div key={p.id} className="scale-100 lg:scale-105 first:translate-y-8 last:-translate-y-8">
                 <ProductCard product={p} />
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlashSale;
