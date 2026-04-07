import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, resetProductState } from '../redux/slices/productSlice';
import { addItem } from '../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { ShoppingBag, Heart, ShieldCheck, Truck, Star, ArrowLeft, RefreshCw, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.products);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const isWishlisted = wishlistItems.some(item => (item._id || item.id) === id);

  useEffect(() => {
    dispatch(fetchProductById(id));
    return () => dispatch(resetProductState());
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addItem({
      product: product._id || product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      qty: qty
    }));
    toast.success(`${product.name} added to bag!`, {
      style: { borderRadius: '12px', background: '#18181b', color: '#fff' }
    });
    navigate('/cart');
  };

  const handleToggleWishlist = () => {
    if (!isWishlisted) {
      dispatch(addToWishlist(product._id || product.id));
      toast.success('Added to wishlist!', { icon: '❤️' });
    } else {
      dispatch(removeFromWishlist(product._id || product.id));
      toast('Removed from wishlist', { icon: '💔' });
    }
  };

  if (isLoading) return (
     <div className="min-h-screen flex items-center justify-center bg-white">
        <RefreshCw size={40} className="text-purple-600 animate-spin" />
     </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">
       <h2 className="text-2xl font-black text-zinc-900 uppercase italic tracking-tighter">Connection Lost.</h2>
       <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] italic">The treasury could not find this selection.</p>
       <Link to="/shop" className="bg-zinc-950 text-white font-black px-12 py-5 rounded-[28px] uppercase tracking-widest text-[10px]">Back to Gallery</Link>
    </div>
  );

  if (!product) return null;

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-16 flex items-center gap-4">
           <Link to="/shop" className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 font-black uppercase text-[10px] tracking-widest transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
              Collections
           </Link>
           <span className="text-zinc-200">/</span>
           <span className="text-zinc-400 font-black uppercase text-[10px] tracking-widest italic">{product.category}</span>
           <span className="text-zinc-200">/</span>
           <span className="text-zinc-950 font-black uppercase text-[10px] tracking-widest italic">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Premium Image Gallery */}
          <div className="space-y-6">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="aspect-[4/5] bg-zinc-50 rounded-[48px] overflow-hidden border border-zinc-100 shadow-sm relative group"
             >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                
                {/* Floating Badge */}
                <div className="absolute top-10 left-10">
                   <div className="bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-zinc-100 shadow-2xl">
                      <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em] italic">Limited Edition</span>
                   </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:opacity-0 transition-opacity"></div>
             </motion.div>
          </div>

          {/* Right Side: Product Information */}
          <div className="text-left py-4">
            <div className="flex items-center gap-3 mb-6">
               <div className="flex items-center gap-1 bg-yellow-100/50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-200">
                  <Star size={10} fill="currentColor" />
                  <span className="text-[10px] font-black">4.9 Confidence Rating</span>
               </div>
               <span className="text-zinc-300">|</span>
               <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Inventory: {product.countInStock} Pieces</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-tight mb-8">
               {product.name}
            </h1>

            <div className="flex items-end gap-6 mb-12">
               <span className="text-4xl md:text-5xl font-black text-purple-600 tracking-tighter italic leading-none tabular-nums">₹{product.price.toLocaleString()}</span>
               {product.oldPrice && <span className="text-xl text-zinc-400 line-through font-bold tabular-nums italic mb-1">₹{product.oldPrice.toLocaleString()}</span>}
            </div>

            <p className="text-zinc-500 font-medium leading-relaxed mb-12 max-w-lg text-lg italic">
               "{product.description}"
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 mb-12">
               <div className="flex items-center bg-zinc-50 border border-zinc-100 rounded-3xl p-2 h-16">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-zinc-950 transition-colors font-black text-lg">─</button>
                  <span className="w-12 text-center font-black text-zinc-950 tabular-nums italic">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-zinc-950 transition-colors font-black text-lg">┼</button>
               </div>
               
               <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Select Desired <br/> Quantity</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
               <button 
                 onClick={handleAddToCart}
                 className="flex-grow flex items-center justify-center gap-4 bg-zinc-950 text-white font-black px-12 py-7 rounded-[36px] hover:bg-purple-600 transition-all uppercase tracking-widest text-xs shadow-2xl active:scale-95 group"
               >
                 Initiate Possession <ShoppingBag size={20} className="group-hover:translate-y-[-2px] transition-transform" />
               </button>
               <button 
                 onClick={handleToggleWishlist}
                 className={`w-full sm:w-[88px] h-[88px] flex items-center justify-center rounded-[36px] border-2 transition-all active:scale-90 ${isWishlisted ? 'bg-rose-500 border-rose-500 text-white shadow-rose-200' : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-950 hover:text-zinc-950'} shadow-xl`}
               >
                 <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={2.5} />
               </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-12 border-t border-zinc-50">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm border border-zinc-100">
                     <ShieldCheck size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest mb-1 italic">Supreme Lock</p>
                     <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest italic">Secure SSL Exchange</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm border border-zinc-100">
                     <Truck size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest mb-1 italic">Private Courier</p>
                     <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest italic">Fast Express Shipments</p>
                  </div>
               </div>
            </div>

          </div>

        </div>

        {/* Feature Tabs */}
        <div className="mt-32 border-t border-zinc-50 pt-20">
           <div className="flex gap-12 mb-12 border-b border-zinc-50">
              {['details', 'shipping', 'returns'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-8 font-black uppercase text-[11px] tracking-[0.3em] italic transition-all relative ${activeTab === tab ? 'text-purple-600' : 'text-zinc-300 hover:text-zinc-600'}`}
                >
                  {tab}
                  {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600" />}
                </button>
              ))}
           </div>

           <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-2xl text-left"
              >
                 {activeTab === 'details' && (
                   <p className="text-zinc-500 font-bold leading-relaxed uppercase tracking-widest text-[10px] italic">
                     This high-performance artifact is crafted from first-tier materials, curated by the ShopVerse treasury for individuals who demand perfection. Each piece is unique and serial-registered for long-term value appreciation.
                   </p>
                 )}
                 {activeTab === 'shipping' && (
                   <p className="text-zinc-500 font-bold leading-relaxed uppercase tracking-widest text-[10px] italic">
                     Dispatched within 24 hours via our private express network. Fully tracked and insured until it reaches your secure location.
                   </p>
                 )}
                 {activeTab === 'returns' && (
                   <p className="text-zinc-500 font-bold leading-relaxed uppercase tracking-widest text-[10px] italic">
                     We offer a 30-day effortless return policy for vault-sealed products. Your satisfaction is our primary obligation.
                   </p>
                 )}
              </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
