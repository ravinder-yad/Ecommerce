import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-20">
      <button className="w-12 h-12 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm">
        <ChevronLeft size={18} />
      </button>
      
      <div className="flex gap-2">
        {[1, 2, 3, 4, '...', 12].map((num, idx) => (
          <button 
            key={idx}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-black uppercase tracking-widest transition-all ${
              num === 1 
              ? 'bg-zinc-900 text-white shadow-xl shadow-zinc-900/20' 
              : 'text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 border border-transparent'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <button className="w-12 h-12 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm">
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
