import React, { useEffect } from 'react';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Take the first 4 products for the featured section
  const featured = products.slice(0, 4);

  if (isLoading && products.length === 0) return null;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 md:px-16 text-left">
        <div className="mb-12 flex items-end justify-between">
           <div className="text-left">
              <h4 className="text-purple-600 font-black uppercase tracking-widest text-xs mb-2">Editor's Choice</h4>
              <h2 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase italic">Featured Selection</h2>
           </div>
           <div className="flex gap-2">
             <div className="px-4 py-2 bg-zinc-100 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-purple-600 hover:text-white transition-all text-zinc-500">New Arrivals</div>
             <div className="px-4 py-2 bg-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer text-white shadow-lg">Trending</div>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
           <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 italic">Discover our full catalog of 500+ premium products</p>
           <button className="bg-zinc-900 text-white font-black px-12 py-5 rounded-[24px] hover:bg-purple-600 transition-all hover:shadow-2xl hover:scale-105 duration-300 uppercase tracking-widest text-xs">
             Browse Full Collection
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
