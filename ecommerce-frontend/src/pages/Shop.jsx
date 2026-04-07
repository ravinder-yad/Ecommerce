import React, { useState } from 'react';
import FilterSidebar from '../components/Shop/FilterSidebar';
import SortBar from '../components/Shop/SortBar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Shop/Pagination';
import QuickViewModal from '../components/Shop/QuickViewModal';
import { motion, AnimatePresence } from 'framer-motion';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({ priceRange: [0, 50000] });
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen pt-8 pb-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        
        {/* Shop Header */}
        <div className="mb-16 text-left">
           <h4 className="text-purple-600 font-black uppercase tracking-widest text-xs mb-3">ShopVerse Catalog</h4>
           <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-6">
              The <span className="text-purple-600 underline decoration-zinc-100 decoration-8 underline-offset-[10px]">Collection.</span>
           </h1>
           <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs max-w-lg leading-relaxed">
             From luxury essentials to performance gear, find everything curated for the modern visionary.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* 1. Filter Sidebar (Sticky) */}
          <FilterSidebar filters={filters} setFilters={setFilters} />

          {/* 2. Main Content Area */}
          <div className="flex-grow">
            
            {/* Sort & Controls Bar */}
            <SortBar totalProducts={products.length} view={view} setView={setView} />

            {/* Product Rendering Grid */}
            <div className={`grid gap-8 ${
              view === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {products.map((product) => (
                  <ProductCard 
                    key={product._id || product.id} 
                    product={product} 
                    onQuickView={handleQuickView}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination Section */}
            <Pagination currentPage={1} totalPages={12} />
          </div>
        </div>

        {/* Quick View Modal */}
        <QuickViewModal 
          open={isModalOpen} 
          handleClose={() => setIsModalOpen(false)} 
          product={quickViewProduct} 
        />
        
      </div>
    </div>
  );
};

export default Shop;
