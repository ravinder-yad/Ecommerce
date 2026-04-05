import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Tag, Truck, ShieldCheck, ArrowRight, Notebook } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { cartTotal } = useApp();
  const [coupon, setCoupon] = useState('');
  const [showNote, setShowNote] = useState(false);
  
  const shipping = cartTotal > 5000 ? 0 : 250;
  const tax = cartTotal * 0.12; // 12% Luxury Tax
  const finalTotal = cartTotal + shipping + tax;

  return (
    <div className="bg-white rounded-[48px] border border-zinc-100 p-8 md:p-12 shadow-2xl sticky top-32 transition-all duration-500 hover:shadow-purple-900/5">
      <h2 className="text-3xl font-black text-zinc-900 uppercase italic tracking-tighter mb-10 border-b border-zinc-50 pb-8">Order <span className="text-purple-600">Summary.</span></h2>
      
      {/* Totals Grid */}
      <div className="space-y-6 mb-12">
         <div className="flex justify-between items-center group">
            <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest leading-none flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full group-hover:bg-purple-600 transition-all"></div>
               Subtotal
            </span>
            <span className="text-sm font-black text-zinc-900 tabular-nums">₹{cartTotal.toLocaleString()}</span>
         </div>
         <div className="flex justify-between items-center group">
            <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest leading-none flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full group-hover:bg-purple-600 transition-all"></div>
               Luxury Tax (12%)
            </span>
            <span className="text-sm font-black text-zinc-900 tabular-nums">₹{tax.toLocaleString()}</span>
         </div>
         <div className="flex justify-between items-center group">
            <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest leading-none flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full group-hover:bg-purple-600 transition-all"></div>
               Shipping
            </span>
            <span className={`text-sm font-black tabular-nums ${shipping === 0 ? 'text-green-600 uppercase tracking-widest text-[10px]' : 'text-zinc-900'}`}>
               {shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}
            </span>
         </div>
      </div>

      {/* Coupon Field */}
      <div className="mb-10">
         <div className="flex gap-4 p-2 bg-zinc-50 border border-zinc-100 rounded-3xl group focus-within:ring-2 focus-within:ring-purple-600/20 transition-all">
            <div className="flex items-center pl-4 text-zinc-300">
               <Tag size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Coupon Code" 
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="bg-transparent border-none outline-none flex-grow text-[10px] font-black uppercase text-zinc-900 placeholder:text-zinc-300 tracking-[0.2em]"
            />
            <button className="bg-zinc-900 text-white font-black px-6 py-3.5 rounded-2xl hover:bg-purple-600 transition-all uppercase tracking-widest text-[9px] shadow-lg">
               Apply
            </button>
         </div>
      </div>

      {/* Order Note Toggle */}
      <div className="mb-12">
         <button 
           onClick={() => setShowNote(!showNote)}
           className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:text-purple-600 transition-colors mb-4"
         >
           <Notebook size={14} />
           {showNote ? 'Hide Order Note' : 'Add Special Instructions'}
         </button>
         {showNote && (
           <motion.textarea 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 80, opacity: 1 }}
             placeholder="Notes for packaging or delivery..."
             className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-[10px] font-medium text-zinc-600 outline-none focus:ring-2 focus:ring-purple-600/10 placeholder:italic transition-all resize-none"
           />
         )}
      </div>

      {/* Total Display */}
      <div className="relative pt-10 border-t-2 border-zinc-950/5 mb-12">
         <div className="flex justify-between items-end">
            <span className="text-[11px] font-black text-zinc-950 uppercase tracking-[0.3em] italic mb-1 leading-none">Order Total</span>
            <span className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter italic leading-none tabular-nums">
               ₹{finalTotal.toLocaleString()}
            </span>
         </div>
      </div>

      {/* Primary Actions */}
      <div className="space-y-4">
         <Link 
            to="/checkout"
            className="w-full flex items-center justify-center gap-4 bg-zinc-950 text-white font-black px-12 py-6 rounded-[32px] hover:bg-purple-600 transition-all uppercase tracking-widest text-xs shadow-2xl active:scale-95 group"
         >
            Proceed To Checkout <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
         </Link>
         
         <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none italic">
               <ShieldCheck size={14} className="text-green-500" /> Secure SSL Encryption
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none italic">
               <Truck size={14} className="text-purple-500" /> Fast Express Shipping
            </div>
         </div>
      </div>

    </div>
  );
};

export default CartSummary;
