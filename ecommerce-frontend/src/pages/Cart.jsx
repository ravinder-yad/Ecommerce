import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

const CartPage = () => {
  const { cart, cartCount } = useApp();

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Cart Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-100 pb-12">
           <div className="text-left">
              <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-left">Your Selections</h4>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-6 text-left">
                 Shopping <span className="text-purple-600">Cart.</span>
              </h1>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[9px] italic text-left">
                Refining your style. {cartCount} items awaiting your final decision.
              </p>
           </div>
           
           <div className="flex gap-4">
              <Link to="/shop" className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 font-black uppercase text-[10px] tracking-widest transition-all">
                 <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                 Explore More
              </Link>
           </div>
        </div>

        {/* Cart Layout Area */}
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             
             {/* Left: Products List (8 Columns) */}
             <div className="lg:col-span-8 flex flex-col gap-0 border border-zinc-100 rounded-[48px] overflow-hidden shadow-sm">
                <AnimatePresence>
                   {cart.map((item) => (
                     <CartItem key={item.id} item={item} />
                   ))}
                </AnimatePresence>
                
                {/* Cart Footer Note */}
                <div className="p-8 bg-zinc-50/50 flex flex-col sm:flex-row justify-between items-center gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm border border-zinc-100">
                         <ShieldCheck size={24} />
                      </div>
                      <div className="text-left leading-none">
                         <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest mb-1 italic">Shop with Confidence</p>
                         <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">30-Day Easy Returns Guaranteed</p>
                      </div>
                   </div>
                   <Link to="/shop" className="text-[10px] font-black text-purple-600 uppercase tracking-widest hover:underline decoration-zinc-200 underline-offset-4">
                      Continue Shopping
                   </Link>
                </div>
             </div>

             {/* Right: Summary Box (4 Columns) */}
             <div className="lg:col-span-4">
                <CartSummary />
             </div>

          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-32 text-center max-w-lg mx-auto"
          >
             <div className="w-24 h-24 bg-zinc-50 rounded-[40px] flex items-center justify-center text-zinc-200 mx-auto mb-8 shadow-inner border border-zinc-100">
                <ShoppingBag size={40} fill="currentColor" />
             </div>
             <h2 className="text-3xl font-black text-zinc-900 uppercase italic tracking-tighter mb-4">Your cart is lonely.</h2>
             <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                Looks like you haven't added anything yet. Our premium collection is waiting for you to discover perfection.
             </p>
             <Link 
               to="/shop" 
               className="inline-flex items-center gap-4 bg-zinc-950 text-white font-black px-12 py-5 rounded-[28px] hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px] shadow-2xl group"
             >
                Start Shopping <Zap size={16} className="group-hover:scale-110 transition-transform" />
             </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default CartPage;
