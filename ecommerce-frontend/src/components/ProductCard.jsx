import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaShoppingBag, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';

const ProductCard = ({ product, onQuickView }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  
  const isWishlisted = wishlistItems.some(item => (item._id || item.id) === (product._id || product.id));

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem({
      product: product._id || product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      qty: 1
    }));
    toast.success(`${product.name} added to bag!`, {
      style: { borderRadius: '12px', background: '#18181b', color: '#fff' }
    });
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const productId = product._id || product.id;
    if (!isWishlisted) {
      dispatch(addToWishlist(productId));
      toast.success('Added to wishlist!', { icon: '❤️' });
    } else {
      dispatch(removeFromWishlist(productId));
      toast('Removed from wishlist', { icon: '💔' });
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-white border border-zinc-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Product Image */}
      <div className="block relative aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => onQuickView && onQuickView(product)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
           {product.isNew && <span className="bg-zinc-900 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">New Selection</span>}
           {product.discount && <span className="bg-rose-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">-{product.discount}% OFF</span>}
        </div>
        
        {/* Quick Actions (Floating) */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
           <button 
             onClick={handleToggleWishlist}
             className={`p-3 rounded-full transition-all shadow-md active:scale-90 ${isWishlisted ? 'bg-rose-500 text-white' : 'bg-white text-zinc-400 hover:text-rose-500'}`}
           >
             <FaHeart size={14} />
           </button>
           <button 
             onClick={handleQuickView}
             className="bg-white p-3 rounded-full text-zinc-400 hover:text-purple-600 hover:bg-white transition-all shadow-md active:scale-90"
           >
             <FaEye size={14} />
           </button>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <button 
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur-md text-zinc-900 font-black py-4 rounded-2xl hover:bg-white transition-all shadow-xl uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
           >
             <FaShoppingBag size={14} />
             Add To Bag
           </button>
        </div>

        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Product Info */}
      <div className="p-6 text-left">
        <div className="flex justify-between items-start mb-2">
           <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest">{product.category}</p>
           <div className="flex items-center gap-1">
             <FaStar className="text-yellow-400 text-[10px]" />
             <span className="text-[10px] font-bold text-zinc-400">4.9</span>
           </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base font-black text-zinc-900 tracking-tight leading-tight uppercase group-hover:text-purple-600 transition-colors mb-4 truncate italic leading-tight">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center bg-zinc-50 p-2 rounded-2xl group-hover:bg-purple-50 transition-colors">
          <div className="pl-2">
            <span className="text-[10px] font-black text-zinc-900 tracking-tighter italic leading-none">₹{product.price.toLocaleString()}</span>
            {product.oldPrice && <span className="text-[9px] text-zinc-400 line-through ml-2 font-bold">₹{product.oldPrice.toLocaleString()}</span>}
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-zinc-300 group-hover:text-purple-600 transition-colors"
          >
             <FaShoppingBag size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
