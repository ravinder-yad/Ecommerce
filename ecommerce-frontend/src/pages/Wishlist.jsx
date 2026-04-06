import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWishlist } from '../redux/slices/wishlistSlice';
import WishlistCard from '../components/Wishlist/WishlistCard';

const WishlistPage = ({ isTab = false }) => {
  const dispatch = useDispatch();
  const { wishlistItems, isLoading } = useSelector((state) => state.wishlist);
  const { token } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (token) {
      dispatch(fetchWishlist());
    }
  }, [dispatch, token]);

  const wishlist = wishlistItems;

  const WishlistContent = (
    <div className="text-left w-full">
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
           <AnimatePresence>
              {wishlist.map((item) => (
                <WishlistCard key={item.id} product={item} />
              ))}
           </AnimatePresence>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-zinc-100 rounded-[32px] p-16 text-center shadow-sm"
        >
           <div className="w-20 h-20 bg-zinc-50 rounded-[32px] flex items-center justify-center text-zinc-100 mx-auto mb-6">
              <Heart size={32} fill="currentColor" />
           </div>
           <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-950 mb-2 font-sans italic">Your curation is empty.</h4>
           <p className="text-[10px] text-zinc-400 font-medium tracking-tight mb-8">Tap the heart on items you love to save them here.</p>
           <Link 
             to="/shop" 
             className="inline-flex items-center gap-4 bg-zinc-950 text-white font-black px-8 py-4 rounded-2xl hover:bg-purple-600 transition-all uppercase tracking-widest text-[9px] shadow-lg group"
           >
              Explore Collection <ShoppingBag size={14} className="group-hover:scale-110 transition-transform" />
           </Link>
        </motion.div>
      )}
    </div>
  );

  if (isTab) return WishlistContent;

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
        {WishlistContent}

      </div>
    </div>
  );
};

export default WishlistPage;
