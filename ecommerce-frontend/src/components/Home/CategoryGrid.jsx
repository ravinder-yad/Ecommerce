import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Mens Fashion', image: 'https://images.unsplash.com/photo-1490578474895-6a9c96802ce6?q=80&w=2070&auto=format&fit=crop', path: '/shop?category=men', span: 'col-span-1 row-span-1' },
  { id: 2, name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop', path: '/shop?category=electronics', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 3, name: 'Jewelry & Watches', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop', path: '/shop?category=jewelry', span: 'col-span-1 row-span-1 md:row-span-2' },
  { id: 4, name: 'Womens Store', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop', path: '/shop?category=women', span: 'col-span-1 md:col-span-2 row-span-1' },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-12 flex items-end justify-between">
           <div className="text-left">
              <h4 className="text-purple-600 font-black uppercase tracking-widest text-xs mb-2">Shop by Category</h4>
              <h2 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase italic">Curated Collections</h2>
           </div>
           <Link to="/categories" className="text-sm font-black uppercase tracking-widest text-zinc-400 hover:text-purple-600 transition-colors border-b-2 border-zinc-100 hover:border-purple-200 pb-1">
             View All
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[500px]">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group rounded-3xl cursor-pointer ${cat.span}`}
            >
              <Link to={cat.path} className="group-hover:scale-110 transition-transform duration-700 block h-full">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-50"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-8 left-8 text-left pointer-events-none">
                 <p className="text-xs font-black text-purple-400 uppercase tracking-[0.2em] mb-1">Explore</p>
                 <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{cat.name}</h3>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/30 rotate-45 group-hover:rotate-0 duration-500">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="7" y1="17" x2="17" y2="7"></line>
                   <polyline points="7 7 17 7 17 17"></polyline>
                 </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
