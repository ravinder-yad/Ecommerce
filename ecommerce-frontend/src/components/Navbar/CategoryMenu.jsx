import React from 'react';
import { FaBars, FaChevronDown, FaTag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/shop' },
  { title: 'Categories', path: '/categories' },
  { title: 'Deals', path: '/deals' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const CategoryMenu = () => {
  return (
    <div className="bg-white border-b border-zinc-200 shadow-sm hidden md:block select-none overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8 whitespace-nowrap overflow-x-auto no-scrollbar">
          {/* All Categories Toggle */}
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm cursor-pointer hover:text-purple-600 transition-colors group mr-4">
            <FaBars className="text-purple-600 group-hover:scale-110 transition-transform" />
            <span>ALL CATEGORIES</span>
            <FaChevronDown className="text-[10px] text-zinc-400 group-hover:text-purple-500" />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.title} 
                to={link.path}
                className={({ isActive }) => `
                  text-[13px] font-bold uppercase tracking-wide transition-all relative group flex items-center gap-0.5
                  ${isActive ? 'text-purple-600' : 'text-zinc-500 hover:text-purple-600'}
                `}
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right: Promotional Links */}
        <div className="hidden xl:flex items-center gap-6 whitespace-nowrap border-l border-zinc-200 pl-8 ml-8">
           <NavLink to="/deals" className="flex items-center gap-1.5 cursor-pointer group">
             <FaTag className="text-rose-500 group-hover:scale-110 transition-transform rotate-90" />
             <span className="text-[13px] font-bold text-zinc-800 hover:text-rose-600 transition-colors">MEGA OFFERS 🔥</span>
           </NavLink>
           <NavLink to="/shop?sort=new" className="flex items-center gap-1.5 cursor-pointer group">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-200"></div>
             <span className="text-[13px] font-bold text-zinc-800 hover:text-emerald-600 transition-colors">NEW ARRIVALS</span>
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
