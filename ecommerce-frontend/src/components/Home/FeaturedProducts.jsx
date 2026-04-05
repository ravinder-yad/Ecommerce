import React from 'react';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Premium Leather Watch', category: 'Watches', price: 12999, oldPrice: 15999, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop', isNew: true, discount: 20 },
  { id: 2, name: 'Ultra Noise-Cancel Headphones', category: 'Audio', price: 24999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop', isNew: false, discount: 15 },
  { id: 3, name: 'Signature Scent No. 5', category: 'Luxury', price: 8999, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2008&auto=format&fit=crop', isNew: true, discount: null },
  { id: 4, name: 'Minimalist Tech Backpack', category: 'Bags', price: 4499, oldPrice: 5999, image: 'https://images.unsplash.com/photo-1553062407-98eeb94c6a62?q=80&w=1887&auto=format&fit=crop', isNew: false, discount: 25 },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 md:px-16 text-left">
        <div className="mb-12 flex items-end justify-between">
           <div className="text-left">
              <h4 className="text-purple-600 font-black uppercase tracking-widest text-xs mb-2">Editor's Choice</h4>
              <h2 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase italic">Featured Selection</h2>
           </div>
           <div className="flex gap-2">
             <div className="px-4 py-2 bg-zinc-100 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-purple-600 hover:text-white transition-all text-zinc-500">New Arrivals</div>
             <div className="px-4 py-2 bg-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer text-white shadow-lg">Trending</div>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
           <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 italic">Discover our full catalog of 500+ premium products</p>
           <button className="bg-zinc-900 text-white font-black px-12 py-5 rounded-[24px] hover:bg-purple-600 transition-all hover:shadow-2xl hover:scale-105 duration-300 uppercase tracking-widest text-xs">
             Browse Full Collection
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
