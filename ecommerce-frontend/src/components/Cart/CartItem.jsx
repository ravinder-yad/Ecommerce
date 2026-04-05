import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useApp();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
      className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 bg-white border-b border-zinc-100 group hover:bg-zinc-50/50 transition-all transition-all duration-300 relative"
    >
      {/* Product Image Area */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 flex-shrink-0 relative group-hover:shadow-xl transition-all duration-500">
         <img 
           src={item.image} 
           alt={item.name} 
           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
         />
         {item.discount && (
           <div className="absolute top-2 left-2 bg-rose-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-lg italic">-{item.discount}%</div>
         )}
      </div>

      {/* Product Info */}
      <div className="flex-grow text-center sm:text-left">
         <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest leading-none mb-2">{item.category}</p>
         <h3 className="text-sm md:text-lg font-black text-zinc-900 uppercase tracking-tighter leading-tight mb-4 italic truncate max-w-[200px] md:max-w-md">{item.name}</h3>
         
         <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
            <div className="flex flex-col items-center sm:items-start leading-none">
               <span className="text-lg md:text-xl font-black text-zinc-950 tracking-tighter italic">₹{item.price.toLocaleString()}</span>
               {item.oldPrice && (
                 <span className="text-[10px] text-zinc-300 line-through font-bold">₹{item.oldPrice.toLocaleString()}</span>
               )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-6 p-1 bg-zinc-100 rounded-2xl border border-zinc-200">
               <button 
                 onClick={() => updateQuantity(item.id, -1)}
                 disabled={item.quantity <= 1}
                 className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-950 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
               >
                 <Minus size={14} strokeWidth={3} />
               </button>
               <span className="text-sm font-black text-zinc-900 tabular-nums w-4 text-center">{item.quantity}</span>
               <button 
                 onClick={() => updateQuantity(item.id, 1)}
                 className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-950 transition-colors"
               >
                 <Plus size={14} strokeWidth={3} />
               </button>
            </div>
         </div>
      </div>

      {/* Subtotal & Action */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-6 w-full sm:w-auto px-4 md:px-0">
         <div className="text-right flex flex-col leading-none">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 italic">Total</p>
            <span className="text-xl md:text-2xl font-black text-zinc-950 tracking-tighter italic">₹{(item.price * item.quantity).toLocaleString()}</span>
         </div>
         
         <button 
           onClick={() => removeFromCart(item.id)}
           className="p-3 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-300 hover:text-rose-500 hover:bg-rose-50 hover:border-rose-100 hover:shadow-xl transition-all duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100 md:translate-x-2 group-hover:translate-x-0"
         >
           <Trash2 size={18} />
         </button>
      </div>

    </motion.div>
  );
};

export default CartItem;
