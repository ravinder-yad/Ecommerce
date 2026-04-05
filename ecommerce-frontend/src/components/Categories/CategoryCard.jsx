import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative group overflow-hidden rounded-[40px] shadow-sm transition-all duration-700 bg-zinc-900 ${category.span}`}
    >
      <Link to={`/shop?category=${category.slug}`} className="block w-full h-full">
        {/* Background Image */}
        <img 
          src={category.image} 
          alt={category.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:brightness-50 transition-transform duration-1000"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/50 transition-all"></div>
        
        {/* Content */}
        <div className="absolute top-10 left-10 right-10 bottom-10 flex flex-col justify-end text-left pointer-events-none">
           <div className="mb-6 flex justify-between items-end">
              <div>
                 <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">{category.count} Items</span>
                 <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic mb-4">
                    {category.name}
                 </h3>
                 <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-[200px]">
                    {category.description}
                 </p>
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-xl pointer-events-auto">
                 <ArrowUpRight size={24} strokeWidth={3} />
              </div>
           </div>
           
           {/* CTA */}
           <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="bg-white text-black px-6 py-3 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                Dive In
              </span>
              <ChevronRight size={16} className="text-purple-400" />
           </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
