import React from 'react';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const FEATURED_PRODS = [
  { id: 7, name: 'Precision Series X Headphones', category: 'Audio', price: 34999, oldPrice: 39999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop', isNew: true, discount: 12 },
  { id: 8, name: 'Minimalist Gold Chronograph', category: 'Watches', price: 15999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop', isNew: false, discount: null },
  { id: 9, name: 'Aero Running Elite', category: 'Shoes', price: 9499, oldPrice: 12999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', isNew: true, discount: 25 },
];

const FeaturedCategorySection = () => {
  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           
           {/* Section Info */}
           <div className="lg:w-1/3 text-left">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
                    <Sparkles size={20} strokeWidth={2.5} />
                 </div>
                 <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em]">Editor's Choice</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 leading-none uppercase tracking-tighter italic mb-8">
                 Trending in <br/> <span className="text-zinc-300">Electronics.</span>
              </h2>
              
              <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest leading-relaxed mb-10">
                 Explore the most-wanted tech essentials this week. Meticulously tested for performance and design elegance.
              </p>

              <button className="flex items-center gap-4 group">
                 <div className="bg-zinc-900 text-white font-black px-10 py-5 rounded-2xl group-hover:bg-purple-600 transition-all uppercase tracking-widest text-xs shadow-xl shadow-zinc-900/10">
                    Explore Trends
                 </div>
                 <div className="w-14 h-14 rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-purple-600 group-hover:text-purple-600 transition-all">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </button>
           </div>

           {/* Products Grid */}
           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_PRODS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCategorySection;
