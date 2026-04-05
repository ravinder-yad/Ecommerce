import React from 'react';
import { Slider } from '@mui/material';
import { Star, ChevronRight } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters }) => {
  const categories = ['All Products', 'Mens Fashion', 'Womens Store', 'Electronics', 'Jewelry', 'Watches'];
  const brands = ['Nike', 'Adidas', 'Apple', 'Rolex', 'Sony'];
  
  const handlePriceChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-32 space-y-10">
        
        {/* Categories Section */}
        <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
          <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 italic">Categories</h4>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat}>
                <button className="flex items-center justify-between w-full group text-left">
                  <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                    {cat}
                  </span>
                  <ChevronRight size={14} className="text-zinc-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter Section */}
        <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
          <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 italic">Price Range</h4>
          <div className="px-2">
            <Slider
              value={filters.priceRange || [0, 50000]}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={50000}
              sx={{
                color: '#9333ea',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#fff',
                  border: '2px solid currentColor',
                },
                '& .MuiSlider-track': {
                  border: 'none',
                },
              }}
            />
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">₹{filters.priceRange?.[0] || 0}</span>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">₹{filters.priceRange?.[1] || 50000}</span>
            </div>
          </div>
        </div>

        {/* Ratings Filter Section */}
        <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
          <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 italic">Ratings</h4>
          <div className="space-y-4">
            {[5, 4, 3, 2].map((rating) => (
              <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-200 text-purple-600 focus:ring-purple-500" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-200'} 
                    />
                  ))}
                  <span className="text-[10px] font-bold text-zinc-400 ml-2 uppercase tracking-widest">& Up</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
           <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 italic">Top Brands</h4>
           <div className="space-y-4">
             {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                   <div className="relative flex items-center">
                      <input type="checkbox" className="peer w-5 h-5 rounded-lg border-zinc-200 checked:bg-purple-600 checked:border-purple-600 transition-all appearance-none cursor-pointer" />
                      <div className="absolute inset-0 flex items-center justify-center text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                   </div>
                   <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest group-hover:text-zinc-900 transition-colors">{brand}</span>
                </label>
             ))}
           </div>
        </div>

      </div>
    </aside>
  );
};

export default FilterSidebar;
