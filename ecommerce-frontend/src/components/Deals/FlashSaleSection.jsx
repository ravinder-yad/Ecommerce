import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Zap, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FLASH_PRODUCTS = [
  { id: 10, name: 'Crystal Luxury Sunglasses', price: 5499, oldPrice: 9999, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop', stock: 8, total: 30 },
  { id: 11, name: 'Pro Wireless Earbuds', price: 12499, oldPrice: 18999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop', stock: 3, total: 20 },
  { id: 12, name: 'Silk Signature Tie', price: 2499, oldPrice: 4999, image: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?q=80&w=1887&auto=format&fit=crop', stock: 15, total: 20 },
];

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 3, m: 59, s: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h> 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
           <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center text-white animate-pulse">
                    <Zap size={18} fill="currentColor" />
                 </div>
                 <span className="text-[10px] font-black text-rose-600 uppercase tracking-[0.3em]">Hot Flash Sale.</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-4">Hurry Up! <br/> Deals Expire In:</h2>
           </div>

           {/* Countdown Display */}
           <div className="flex gap-4">
              {[
                { val: timeLeft.h, label: 'Hours' },
                { val: timeLeft.m, label: 'Min' },
                { val: timeLeft.s, label: 'Sec' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                   <div className="w-20 h-24 bg-zinc-900 rounded-[24px] flex items-center justify-center mb-3 shadow-2xl border border-white/5">
                      <span className="text-4xl font-black text-white italic tabular-nums">{item.val < 10 ? `0${item.val}` : item.val}</span>
                   </div>
                   <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Product Cards for Flash Sale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {FLASH_PRODUCTS.map((prod) => (
             <motion.div 
               key={prod.id} 
               whileHover={{ y: -10 }}
               className="group bg-zinc-50 border border-zinc-100 rounded-[40px] p-8 flex items-center gap-8 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg border border-zinc-200">
                   <img src={prod.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={prod.name} />
                </div>
                
                <div className="flex-1 text-left">
                   <h3 className="text-base font-black text-zinc-900 uppercase tracking-tighter leading-tight italic truncate mb-2">{prod.name}</h3>
                   <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-black text-rose-600 tracking-tighter italic">₹{prod.price}</span>
                      <span className="text-xs text-zinc-400 line-through font-bold">₹{prod.oldPrice}</span>
                   </div>

                   {/* Stock Status Bar */}
                   <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Left: {prod.stock} Items</span>
                         <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest animate-bounce">Hot Deal</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                         <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(prod.stock / prod.total) * 100}%` }}
                          className="h-full bg-rose-600 rounded-full"
                         />
                      </div>
                   </div>

                   <button className="w-10 h-10 bg-zinc-900 hover:bg-rose-600 text-white rounded-full flex items-center justify-center transition-all animate-bounce hover:animate-none">
                      <ShoppingCart size={16} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
