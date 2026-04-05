import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SUB_CATS = [
  { id: 1, name: 'Outerwear', count: 120 },
  { id: 2, name: 'Digital Gear', count: 450 },
  { id: 3, name: 'Activewear', count: 85 },
  { id: 4, name: 'Precision Audio', count: 120 },
  { id: 5, name: 'Luxury Scents', count: 95 },
  { id: 6, name: 'Daily Essentials', count: 210 },
  { id: 7, name: 'Home Studio', count: 156 },
  { id: 8, name: 'Smart Tech', count: 320 },
];

const SubCategoryMiniList = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 overflow-x-auto no-scrollbar">
         <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-12 py-4">
            {SUB_CATS.map((sub, idx) => (
               <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center cursor-pointer group whitespace-nowrap px-4"
               >
                  <Link to={`/shop?subcategory=${sub.name.toLowerCase()}`} className="relative flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:scale-110 mb-4">
                       <span className="text-xl font-black italic">{sub.name[0]}</span>
                    </div>
                    <h4 className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.2em] group-hover:text-purple-600 transition-colors mb-1 italic">
                       {sub.name}
                    </h4>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{sub.count} Items</span>
                  </Link>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default SubCategoryMiniList;
