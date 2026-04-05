import React, { useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative flex-1 max-w-2xl px-4 transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
      <div className={`flex items-center bg-zinc-100 rounded-full py-1.5 px-4 shadow-sm border transaction-all duration-300 ${isFocused ? 'ring-2 ring-purple-100 border-purple-300 bg-white shadow-md' : 'border-transparent hover:bg-zinc-200'}`}>
        <FaSearch className="text-zinc-500 mr-3" />
        <input
          type="text"
          placeholder="Search for luxury watches, electronics, fashion..."
          className="w-full bg-transparent border-none outline-none text-sm font-medium py-1 placeholder:text-zinc-400"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="flex items-center gap-3 border-l border-zinc-300 pl-3">
          <FaMicrophone className="text-zinc-500 cursor-pointer hover:text-purple-600 transition-all hover:scale-110" />
        </div>
      </div>
      
      {/* Search suggestions dropdown (mock) */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-zinc-200 shadow-xl rounded-2xl p-4 z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="mb-4">
            <h4 className="text-xs font-bold uppercase text-zinc-400 mb-2 px-1">Recent Searches</h4>
            <div className="flex gap-2 flex-wrap">
              {['Rolex', 'MacBook Pro', 'AirPods'].map((item) => (
                <span key={item} className="bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full hover:bg-zinc-200 cursor-pointer transition-colors border border-zinc-200">
                  {item}
                </span>
              ))}
            </div>
           </div>
           
           <div>
            <h4 className="text-xs font-bold uppercase text-zinc-400 mb-2 px-1 text-purple-500">Trending Now</h4>
            <ul className="space-y-1">
              {['Samsung S24 Ultra', 'Luxury Silk Sarees', 'Ray-Ban Sunglasses'].map((item) => (
                <li key={item} className="p-2 hover:bg-purple-50 rounded-lg cursor-pointer flex items-center gap-3 transition-colors group">
                   <div className="w-8 h-8 bg-zinc-100 rounded-md flex items-center justify-center group-hover:bg-purple-100">
                     <FaSearch className="text-zinc-400 text-xs group-hover:text-purple-500" />
                   </div>
                   <span className="text-sm text-zinc-700 font-medium group-hover:text-purple-700">{item}</span>
                </li>
              ))}
            </ul>
           </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
