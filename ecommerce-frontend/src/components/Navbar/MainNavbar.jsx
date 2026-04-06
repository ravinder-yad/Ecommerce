import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBell } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useSelector } from 'react-redux';
import AuthButtons from './AuthButtons';
import ProfileMenu from './ProfileMenu';
import NotificationDropdown from './NotificationDropdown';

const MainNavbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { unreadCount } = useSelector((state) => state.notifications);
  const { user } = useSelector((state) => state.auth);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="bg-white border-b border-zinc-200 py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-[100] transition-all duration-300">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center group cursor-pointer shrink-0">
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

      {/* Right: Icons & Auth */}
      <div className="flex items-center gap-2 md:gap-5 relative">
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
            badgeContent={wishlistItems.length} 
            color="error" 
            overlap="circular"
            sx={{ '& .MuiBadge-badge': { backgroundColor: wishlistItems.length > 0 ? '#f43f5e' : 'transparent', color: 'white', fontSize: '10px', height: '16px', minWidth: '16px' } }}
          >
            <FaHeart className="text-zinc-600 text-xl group-hover:text-rose-500 transition-colors" />
          </Badge>
        </Link>

        {/* Cart Link */}
        <Link to="/cart" className="hover:bg-zinc-100 p-2.5 rounded-full cursor-pointer transition-all hover:scale-110 active:scale-95 group">
           <Badge 
             badgeContent={cartItems.length} 
             color="secondary" 
             overlap="circular" 
             sx={{ '& .MuiBadge-badge': { backgroundColor: cartItems.length > 0 ? '#a855f7' : 'transparent', color: 'white', fontSize: '10px', height: '16px', minWidth: '16px' } }}
           >
            <FaShoppingCart className="text-zinc-600 text-xl group-hover:text-purple-600" />
          </Badge>
        </Link>

        {/* --- AUTH LOGIC --- */}
        <div className="ml-1 border-l border-zinc-100 pl-4 hidden md:block">
           {user ? <ProfileMenu user={user} /> : <AuthButtons />}
        </div>
        
        {/* Mobile-only avatar toggle (Handled in Header sidebar, but shown here as quick logic if needed) */}
        {!user && (
           <div className="md:hidden">
              <AuthButtons />
           </div>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
