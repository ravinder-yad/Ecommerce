import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: 'Elena Gilbert', text: 'ShopVerse is more than just a store; it\'s a curated library of style. The attention to detail is unmatched.', rating: 5, role: 'Fashion Blogger' },
  { id: 2, name: 'Marcus Wright', text: 'Their tech collection is ahead of everything else. The quality is verified and feels premium.', rating: 5, role: 'Tech Enthusiast' },
  { id: 3, name: 'Sarah Connor', text: 'The delivery was lightning fast and the packaging felt like receiving a high-end gift.', rating: 4, role: 'Lifestyle Photographer' },
];

const AboutTestimonials = () => {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 text-center max-w-6xl">
        <div className="mb-20">
           <Quote size={40} className="text-zinc-200 mx-auto mb-6" />
           <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter uppercase italic leading-none mb-6">
              Our <span className="text-purple-600">Voices.</span>
           </h2>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-lg mx-auto">
             Don't take our word for it. Listen to those who have experienced the ShopVerse transformation.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {REVIEWS.map((rev) => (
             <motion.div 
               key={rev.id}
               whileHover={{ y: -10 }}
               className="bg-white p-12 rounded-[56px] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-left relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 transition-all group-hover:bg-purple-100"></div>
                
                <div className="flex gap-1 text-yellow-400 mb-8 relative z-10">
                   {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                
                <p className="text-zinc-950 font-bold text-sm uppercase tracking-tight leading-relaxed mb-10 italic relative z-10">
                   "{rev.text}"
                </p>

                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-black italic text-[10px]">{rev.name[0]}</div>
                   <div>
                      <p className="text-xs font-black text-zinc-950 uppercase tracking-tighter">{rev.name}</p>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{rev.role}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
