import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Zap } from 'lucide-react';

const DailyDealCard = () => {
  const dealProd = {
    id: 111,
    name: 'Precision Tech Elite Smartphone',
    category: 'Electronics',
    price: 44999,
    oldPrice: 59999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
    reduction: 15000,
    rating: 4.9,
    reviews: 1250,
  };

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-full bg-rose-600/5 blur-[120px] rounded-full translate-x-1/2"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
           
           {/* Section Info & Product Visual */}
           <div className="lg:w-1/2 relative group cursor-pointer">
              <motion.div 
               whileHover={{ scale: 0.98 }}
               className="relative aspect-video rounded-[60px] overflow-hidden border border-zinc-200 shadow-2xl"
              >
                 <img src={dealProd.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Deal" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                 <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                    <span className="bg-white text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full mb-2 shadow-xl border border-rose-100">Deal of the Day.</span>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">{dealProd.name}</h3>
                 </div>
                 <div className="absolute top-10 right-10 w-24 h-24 bg-rose-600 rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-2xl animate-pulse">
                    <span className="text-xs font-black uppercase leading-none">Save</span>
                    <span className="text-2xl font-black italic tracking-tighter leading-none mb-1">₹{dealProd.reduction}</span>
                 </div>
              </motion.div>
           </div>

           {/* Sales Mechanics & Details */}
           <div className="lg:w-1/2 text-left">
              <div className="flex items-center gap-4 mb-8">
                 <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none tracking-widest">{dealProd.rating} ({dealProd.reviews} Reviews)</span>
                 <div className="h-3 w-px bg-zinc-200"></div>
                 <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest animate-pulse">Hot Selection</span>
              </div>
              
              <h4 className="text-sm font-black text-purple-600 uppercase tracking-widest mb-4 italic leading-none">{dealProd.category} Focus</h4>
              <h2 className="text-4xl md:text-7xl font-black text-zinc-950 leading-none uppercase tracking-tighter italic mb-10">
                 Elite Performance <br/> <span className="text-zinc-300">New Standard.</span>
              </h2>

              <div className="flex items-baseline gap-6 mb-12">
                 <span className="text-6xl font-black text-zinc-950 tracking-tighter italic leading-none">₹{dealProd.price}</span>
                 <span className="text-2xl text-zinc-300 line-through font-bold leading-none">₹{dealProd.oldPrice}</span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-12">
                 <div className="p-6 bg-white border border-zinc-100 rounded-3xl group hover:shadow-xl transition-all">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 italic">Offer Type</p>
                    <p className="text-xs font-black text-zinc-900 uppercase tracking-tighter">Flat Discount.</p>
                 </div>
                 <div className="p-6 bg-white border border-zinc-100 rounded-3xl group hover:shadow-xl transition-all">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 italic">Stock Available</p>
                    <p className="text-xs font-black text-zinc-900 uppercase tracking-tighter">Limited Stock.</p>
                 </div>
              </div>

              <button className="w-full sm:w-auto bg-zinc-950 text-white font-black px-16 py-6 rounded-[28px] hover:bg-rose-600 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                 <ShoppingBag size={20} />
                 Bag This Deal
              </button>
           </div>

        </div>
      </div>
    </section>
  );
};

export default DailyDealCard;
