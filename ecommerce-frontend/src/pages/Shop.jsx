import React, { useState } from 'react';
import FilterSidebar from '../components/Shop/FilterSidebar';
import SortBar from '../components/Shop/SortBar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Shop/Pagination';
import QuickViewModal from '../components/Shop/QuickViewModal';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Premium Leather Watch', category: 'Watches', price: 12999, oldPrice: 15999, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop', isNew: true, discount: 20 },
  { id: 2, name: 'Ultra Noise-Cancel Headphones', category: 'Audio', price: 24999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop', isNew: false, discount: 15 },
  { id: 3, name: 'Signature Scent No. 5', category: 'Luxury', price: 8999, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2008&auto=format&fit=crop', isNew: true, discount: null },
  { id: 4, name: 'Minimalist Tech Backpack', category: 'Bags', price: 4499, oldPrice: 5999, image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1887&auto=format&fit=crop', isNew: false, discount: 25 },
  { id: 5, name: 'Crystal Luxury Sunglasses', category: 'Accessories', price: 5499, oldPrice: 9999, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop', isNew: false, discount: 45 },
  { id: 6, name: 'Silk Business Suit', category: 'Fashion', price: 18999, oldPrice: 25999, image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2080&auto=format&fit=crop', isNew: true, discount: 30 },
  { id: 7, name: 'Smart Fitness Band X', category: 'Electronics', price: 2999, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=2070&auto=format&fit=crop', isNew: true, discount: 10 },
  { id: 8, name: 'Elite Running Shoes', category: 'Shoes', price: 7499, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', isNew: false, discount: null },
];

const Shop = () => {
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({ priceRange: [0, 50000] });
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <SortBar totalProducts={MOCK_PRODUCTS.length} view={view} setView={setView} />

            {/* Product Rendering Grid */}
            <div className={`grid gap-8 ${
              view === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {MOCK_PRODUCTS.map((product) => (
                  <ProductCard 
                    key={product.id} 
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
