import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import CategoryGrid from '../components/Home/CategoryGrid';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import FlashSale from '../components/Home/FlashSale';
import TrustBadgeBar from '../components/Home/TrustBadgeBar';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Slider (Premium First Impression) */}
      <HeroSlider />

      {/* 2. Trust Builder (Quick Features) */}
      <TrustBadgeBar />

      {/* 3. Categories (Smart Navigation) */}
      <CategoryGrid />

      {/* 4. Featured Section (Editor's Choice) */}
      <FeaturedProducts />

      {/* 5. Flash Sale (Urgency & Conversions) */}
      <FlashSale />

      {/* 6. Extra Banner Section (Visual Highlight) */}
      <section className="py-16 overflow-hidden">
         <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-8">
            {/* Promo 1 */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="flex-1 min-h-[400px] bg-zinc-900 rounded-[40px] relative overflow-hidden group cursor-pointer"
            >
               <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1999&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="Promo" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute bottom-12 left-12 text-left">
                  <span className="inline-block bg-purple-600 text-white text-[10px] font-black tracking-widest px-4 py-1 rounded-full mb-4 uppercase">New Drop</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">Sneaker <br/>Revolution.</h3>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] mb-8">Up to 30% off on all performance gear</p>
                  <button className="bg-white text-black font-black px-8 py-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all uppercase tracking-widest text-[10px]">
                    Explores Now
                  </button>
               </div>
            </motion.div>

            {/* Promo 2 */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="flex-1 min-h-[400px] bg-zinc-100 rounded-[40px] relative overflow-hidden group cursor-pointer border border-zinc-200 shadow-sm"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/40 to-transparent"></div>
               <div className="absolute inset-0 flex items-center justify-center -translate-y-4">
                  <h2 className="text-[140px] md:text-[200px] font-black text-zinc-900 opacity-[0.03] uppercase tracking-tighter italic select-none">Sale</h2>
               </div>
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center pointer-events-none">
                  <div className="max-w-xs pointer-events-auto">
                     <span className="text-purple-600 font-extrabold text-[11px] uppercase tracking-[0.3em] mb-4 block">Flash Event</span>
                     <h3 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter italic leading-none mb-6">Signature <br/>Accessories.</h3>
                     <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest leading-relaxed mb-10">Minimalist designs for the modern visionary architect.</p>
                     <div className="flex justify-center items-center gap-4 text-zinc-900 font-black text-xs uppercase tracking-widest hover:text-purple-600 transition-colors cursor-pointer group-inner">
                        Shop Collection <FaArrowRight className="group-inner-hover:translate-x-2 transition-transform" />
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 7. Instagram / Social Integration (Visual Trust) */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-100">
         <div className="container mx-auto px-8 md:px-16">
            <div className="text-center mb-16">
               <h4 className="text-purple-600 font-black uppercase tracking-widest text-xs mb-3">#ShopVerseLife</h4>
               <h2 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase italic">Follow Our Journey</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
               {[
                 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=1999&auto=format&fit=crop',
                 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop',
                 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop',
                 'https://images.unsplash.com/photo-1511499767350-a1590fdb2e17?q=80&w=1999&auto=format&fit=crop',
                 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1887&auto=format&fit=crop',
                 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
               ].map((img, idx) => (
                 <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className="aspect-square rounded-2xl overflow-hidden cursor-pointer relative group shadow-sm"
                 >
                    <img src={img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50" alt="Instagram" />
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                       <FaInstagram size={28} />
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
