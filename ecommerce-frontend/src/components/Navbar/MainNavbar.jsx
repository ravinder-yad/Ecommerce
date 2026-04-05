import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBell } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import NotificationDropdown from './NotificationDropdown';

const MainNavbar = () => {
  const { cartCount, wishlist, unreadCount } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="bg-white border-b border-zinc-200 py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-[100] transition-all duration-300">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center group cursor-pointer">
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
          SV
        </div>
        <div className="ml-3 hidden sm:block text-left">
          <h1 className="text-xl font-black tracking-tight text-zinc-900 group-hover:text-purple-600 transition-colors">
            SHOP<span className="text-purple-600 group-hover:text-zinc-900">VERSE</span>
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold leading-none -mt-1">Luxury Retail</p>
        </div>
      </Link>

      {/* Center: Search Bar */}
      <div className="hidden lg:flex flex-1 justify-center mx-10">
        <SearchBar />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-2 md:gap-6 relative">
        {/* Notification Bell */}
        <div className="relative">
           <button 
             onClick={() => setShowNotifications(!showNotifications)}
             className="hover:bg-zinc-100 p-2.5 rounded-full cursor-pointer transition-all hover:scale-110 active:scale-95 group focus:outline-none"
           >
             <Badge 
               badgeContent={unreadCount} 
               color="secondary" 
               overlap="circular" 
               sx={{ '& .MuiBadge-badge': { backgroundColor: unreadCount > 0 ? '#a855f7' : 'transparent', color: 'white', fontSize: '10px', height: '16px', minWidth: '16px' } }}
             >
               <FaBell className={`text-zinc-600 text-xl transition-colors ${showNotifications ? 'text-purple-600' : 'group-hover:text-purple-600'}`} />
             </Badge>
           </button>
           
           <NotificationDropdown 
             isOpen={showNotifications} 
             onClose={() => setShowNotifications(false)} 
           />
        </div>
        
        {/* Wishlist Link */}
        <Link to="/wishlist" className="hover:bg-zinc-100 p-2.5 rounded-full cursor-pointer transition-all hover:scale-110 active:scale-95 group hidden sm:flex">
          <Badge 
            badgeContent={wishlist.length} 
            color="error" 
            overlap="circular"
            sx={{ '& .MuiBadge-badge': { backgroundColor: wishlist.length > 0 ? '#f43f5e' : 'transparent', color: 'white', fontSize: '10px', height: '16px', minWidth: '16px' } }}
          >
            <FaHeart className="text-zinc-600 text-xl group-hover:text-rose-500 transition-colors" />
          </Badge>
        </Link>

        {/* Cart Link */}
        <Link to="/cart" className="hover:bg-zinc-100 p-2.5 rounded-full cursor-pointer transition-all hover:scale-110 active:scale-95 group">
           <Badge 
             badgeContent={cartCount} 
             color="secondary" 
             overlap="circular" 
             sx={{ '& .MuiBadge-badge': { backgroundColor: cartCount > 0 ? '#a855f7' : 'transparent', color: 'white', fontSize: '10px', height: '16px', minWidth: '16px' } }}
           >
            <FaShoppingCart className="text-zinc-600 text-xl group-hover:text-purple-600" />
          </Badge>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 ml-2">
           <Link to="/login" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-purple-600 transition-colors">Sign In</Link>
           <Link to="/signup" className="flex items-center border border-zinc-200 rounded-full px-5 py-2.5 gap-2 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all hover:shadow-md group text-left">
              <div className="w-5 h-5 bg-zinc-100 rounded-full flex items-center justify-center border border-zinc-300 group-hover:border-purple-400 group-hover:bg-white overflow-hidden">
                 <FaUser className="text-zinc-500 text-[10px] group-hover:text-purple-600" />
              </div>
              <p className="text-[10px] font-black text-zinc-800 uppercase tracking-widest">Join Now</p>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
