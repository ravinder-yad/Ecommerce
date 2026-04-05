import React from 'react';
import { Modal, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { X, ShoppingBag, Heart, Star, ShieldCheck, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickViewModal = ({ open, handleClose, product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl relative outline-none flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 bg-white/80 backdrop-blur-md p-2 rounded-full border border-zinc-100 hover:bg-zinc-100 transition-all text-zinc-400 hover:text-zinc-900"
            >
              <X size={20} />
            </button>

            {/* Left: Product Image */}
            <div className={`w-full md:w-1/2 relative bg-zinc-50 ${isMobile ? 'h-64' : ''}`}>
               <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
               />
               <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <span className="bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">New Selection</span>
                 {product.discount && <span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">-{product.discount}% OFF</span>}
               </div>
            </div>

            {/* Right: Product Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto text-left">
              <p className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em] mb-4">ShopVerse Exclusive</p>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase tracking-tighter italic leading-none mb-6">
                {product.name}
              </h2>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                   <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">4.9 (12.5k Reviews)</span>
                </div>
                <div className="h-4 w-px bg-zinc-200"></div>
                <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">In Stock</span>
              </div>

              <div className="flex items-baseline gap-4 mb-10">
                 <span className="text-4xl font-black text-zinc-900 tracking-tighter italic">₹{product.price}</span>
                 <span className="text-xl text-zinc-400 line-through font-bold">₹{product.oldPrice || (product.price * 1.2).toFixed(0)}</span>
              </div>

              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10 uppercase tracking-wide">
                Experience unparalleled luxury and performance with our latest signature edition. Built with premium materials for those who demand excellence in every detail.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                 <button className="flex-1 bg-zinc-900 hover:bg-purple-600 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-zinc-900/20 active:scale-95">
                   <ShoppingBag size={18} />
                   Add To Cart
                 </button>
                 <button className="w-16 h-16 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-rose-500 hover:bg-rose-50 transition-all active:scale-95">
                    <Heart size={20} />
                 </button>
              </div>

              {/* Mini Features */}
              <div className="grid grid-cols-2 gap-6 pt-10 border-t border-zinc-100">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-purple-600"><Truck size={18} /></div>
                    <div>
                       <p className="text-[10px] font-black text-zinc-900 uppercase">Free Delivery</p>
                       <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">On orders above ₹999</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-emerald-600"><ShieldCheck size={18} /></div>
                    <div>
                       <p className="text-[10px] font-black text-zinc-900 uppercase">Verified Quality</p>
                       <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">100% Original</p>
                    </div>
                 </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default QuickViewModal;
