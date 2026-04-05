import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const WishlistCard = ({ product }) => {
  const { addToCart, removeFromWishlist } = useApp();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="group bg-white rounded-[32px] border border-zinc-100 p-4 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square rounded-[24px] overflow-hidden mb-6 bg-zinc-50 border border-zinc-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-purple-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">New In</span>
          )}
          {product.discount && (
            <span className="bg-rose-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg italic">-{product.discount}%</span>
          )}
        </div>

        {/* Quick Actions (Remove) */}
        <button 
          onClick={() => removeFromWishlist(product.id)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-zinc-400 hover:text-rose-500 hover:scale-110 transition-all shadow-xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Product Info */}
      <div className="text-left px-2">
         <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest leading-none mb-2">{product.category}</p>
         <h3 className="text-sm font-black text-zinc-900 uppercase tracking-tighter leading-none mb-4 truncate italic">{product.name}</h3>
         
         <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
               <span className="text-xl font-black text-zinc-950 tracking-tighter italic leading-none mb-1">₹{product.price.toLocaleString()}</span>
               {product.oldPrice && (
                 <span className="text-[10px] text-zinc-300 line-through font-bold">₹{product.oldPrice.toLocaleString()}</span>
               )}
            </div>

            <button 
              onClick={() => addToCart(product)}
              className="bg-zinc-900 text-white p-4 rounded-2xl hover:bg-purple-600 transition-all hover:shadow-xl active:scale-95 group"
            >
              <ShoppingCart size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
         </div>
      </div>

      {/* Hover Overlay Message */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-rose-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

export default WishlistCard;
