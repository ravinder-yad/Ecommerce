import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import WishlistCard from '../components/Wishlist/WishlistCard';

const WishlistPage = () => {
  const { wishlist, setWishlist } = useApp();

  const clearWishlist = () => {
    // In a real app, this would be a method in AppContext
    // For now, I'll just use the setter if available, or I'll add the method to AppContext next.
    // Wait, I'll add the method to AppContext first to be clean.
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Wishlist Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-100 pb-12">
           <div className="text-left">
              <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Curated Intentions</h4>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-6">
                 Your <span className="text-purple-600">Wishlist.</span>
              </h1>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[9px] italic">
                Items you loved enough to save for later. {wishlist.length} items curated.
              </p>
           </div>
           
           <div className="flex gap-4">
              <Link to="/shop" className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 font-black uppercase text-[10px] tracking-widest transition-all">
                 <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                 Continue Shopping
              </Link>
           </div>
        </div>

        {/* Wishlist Content */}
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             <AnimatePresence>
                {wishlist.map((item) => (
                  <WishlistCard key={item.id} product={item} />
                ))}
             </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-32 text-center max-w-lg mx-auto"
          >
             <div className="w-24 h-24 bg-zinc-50 rounded-[40px] flex items-center justify-center text-zinc-200 mx-auto mb-8 shadow-inner border border-zinc-100">
                <Heart size={40} fill="currentColor" />
             </div>
             <h2 className="text-3xl font-black text-zinc-900 uppercase italic tracking-tighter mb-4">Your wishlist is empty.</h2>
             <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                You haven't saved any items yet. Browse our collections and tap the heart icon to save your favorites here.
             </p>
             <Link 
               to="/shop" 
               className="inline-flex items-center gap-4 bg-zinc-950 text-white font-black px-12 py-5 rounded-[28px] hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px] shadow-2xl group"
             >
                Start Exploring <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
             </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default WishlistPage;
