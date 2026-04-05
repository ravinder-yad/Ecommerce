import React from 'react';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

const SortBar = ({ totalProducts, view, setView }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-zinc-100 rounded-3xl p-4 mb-8 gap-4 shadow-sm">
      <div className="flex items-center gap-4">
        <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
          Showing <span className="text-zinc-900 font-black">{totalProducts}</span> Products
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Sort Dropdown */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 bg-zinc-50 px-5 py-2.5 rounded-2xl border border-zinc-100 hover:border-purple-200 transition-all">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Sort by:</span>
            <span className="text-xs font-black text-zinc-900 uppercase">Newest</span>
            <ChevronDown size={14} className="text-zinc-400 group-hover:text-purple-600 transition-colors" />
          </div>
          {/* Mock Dropdown items */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-zinc-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2 overflow-hidden">
             {['Newest', 'Price: Low to High', 'Price: High to Low', 'Popularity'].map((item) => (
               <div key={item} className="px-4 py-2 text-[10px] font-black uppercase text-zinc-500 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors cursor-pointer">
                 {item}
               </div>
             ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-zinc-50 p-1 rounded-2xl border border-zinc-100">
           <button 
            onClick={() => setView('grid')}
            className={`p-2.5 rounded-xl transition-all ${view === 'grid' ? 'bg-white text-purple-600 shadow-md' : 'text-zinc-400 hover:text-zinc-600'}`}
           >
             <LayoutGrid size={18} strokeWidth={2.5} />
           </button>
           <button 
            onClick={() => setView('list')}
            className={`p-2.5 rounded-xl transition-all ${view === 'list' ? 'bg-white text-purple-600 shadow-md' : 'text-zinc-400 hover:text-zinc-600'}`}
           >
             <List size={18} strokeWidth={2.5} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
