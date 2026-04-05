import React from 'react';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';
import { Filter, ChevronRight } from 'lucide-react';

const DEALS_PRODUCTS = [
  { id: 101, name: 'Minimalist Tech Backpack', category: 'Bags', price: 4499, oldPrice: 5999, image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1887&auto=format&fit=crop', discount: 25 },
  { id: 102, name: 'Ultra-Comfort Mesh Sneakers', category: 'Footwear', price: 6499, oldPrice: 8999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', discount: 28 },
  { id: 103, name: 'Pro Noise-Cancel Earbuds', category: 'Audio', price: 12499, oldPrice: 18999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop', discount: 34 },
  { id: 104, name: 'Leather Signature Wallet', category: 'Accessories', price: 2499, oldPrice: 3999, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop', discount: 38 },
  { id: 105, name: 'Matte Finish Sunglasses', category: 'Accessories', price: 3499, oldPrice: 6999, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop', discount: 50 },
  { id: 106, name: 'Luxury Business Chrono', category: 'Watches', price: 18999, oldPrice: 34999, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop', discount: 45 },
  { id: 107, name: 'Signature Silk Shirt', category: 'Fashion', price: 4999, oldPrice: 8999, image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2080&auto=format&fit=crop', discount: 44 },
  { id: 108, name: 'Tech Master Keyboard', category: 'Gadgets', price: 8999, oldPrice: 18999, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop', discount: 52 },
];

const DealsGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 px-4 md:px-0">
           <div className="text-left">
              <h4 className="text-zinc-400 font-black uppercase tracking-widest text-xs mb-3 italic">Discover Massive Savings</h4>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter uppercase italic leading-none">The <span className="text-rose-600">Discounts.</span></h2>
           </div>
           
           <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-zinc-950 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-rose-600 transition-all shadow-xl">
                 <Filter size={14} />
                 Filter Deals
              </div>
              <div className="flex items-center gap-2 bg-zinc-100 text-zinc-400 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-zinc-200 hover:text-zinc-950 transition-all border border-zinc-200">
                 Sort by: Highest Discount
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
           {DEALS_PRODUCTS.map((prod) => (
             <ProductCard key={prod.id} product={prod} />
           ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-zinc-100 text-center"
        >
           <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-8 italic">Showcasing 50+ handpicked exclusive deals for our elite members</p>
           <button className="flex items-center gap-4 bg-zinc-950 text-white font-black px-12 py-5 rounded-[28px] hover:bg-rose-600 transition-all uppercase tracking-widest text-[10px] shadow-2xl mx-auto group">
              Browse More Deals <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DealsGrid;
