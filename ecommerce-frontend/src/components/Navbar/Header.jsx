import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import MainNavbar from './MainNavbar';
import CategoryMenu from './CategoryMenu';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, Badge } from '@mui/material';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaHeart, FaHome, FaGripHorizontal, FaStore, FaTag, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileMenuOpen(open);
  };

  const mobileNavLinks = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <FaStore />, label: 'Shop', path: '/shop' },
    { icon: <FaGripHorizontal />, label: 'Categories', path: '/categories' },
    { icon: <FaTag />, label: 'Deals', path: '/deals' },
    { icon: <FaInfoCircle />, label: 'About', path: '/about' },
    { icon: <FaEnvelope />, label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full z-[100] relative font-sans selection:bg-purple-100 selection:text-purple-900 transition-all duration-300">
      {/* Layer 1: Top Strip */}
      {!isSticky && <TopBar />}

      {/* Layer 2: Main Navbar (Sticky) */}
      <div className={`transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-xl z-[101] bg-white translate-y-0 scale-100' : 'relative'}`}>
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-zinc-200 bg-white">
           <IconButton onClick={toggleDrawer(true)}>
             <FaBars className="text-zinc-600 text-lg" />
           </IconButton>
           
           <Link to="/" className="flex items-center group cursor-pointer text-left">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md transition-transform active:scale-95">SV</div>
              <h1 className="text-lg font-black tracking-tighter text-zinc-900 ml-2">SHOPVERSE</h1>
           </Link>

           <div className="flex items-center gap-2">
              <Link to="/cart">
                <Badge badgeContent={2} color="secondary" sx={{ '& .MuiBadge-badge': { backgroundColor: '#a855f7' } }}>
                  <FaShoppingCart className="text-zinc-600 text-lg" />
                </Badge>
              </Link>
              <Link to="/profile">
                <IconButton size="small">
                  <FaUser className="text-zinc-600 text-sm" />
                </IconButton>
              </Link>
           </div>
        </div>
        
        <div className="hidden lg:block">
          <MainNavbar />
        </div>
      </div>

      {/* Layer 3: Category Menu */}
      {!isSticky && <CategoryMenu />}

      {/* Categories for Sticky state (Slim version) */}
      {isSticky && (
        <div className="hidden lg:block fixed top-[68px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm z-[100] animate-in slide-in-from-top-10 duration-500">
           <CategoryMenu />
        </div>
      )}

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: '80%', maxWidth: '320px', backgroundColor: '#fff', borderRadius: '0 24px 24px 0' }
        }}
      >
        <div className="p-6 h-full flex flex-col no-scrollbar overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={toggleDrawer(false)} className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black text-sm">SV</div>
              <h1 className="text-lg font-black tracking-tight text-zinc-900 ml-2 uppercase">ShopVerse</h1>
            </Link>
            <IconButton onClick={toggleDrawer(false)}>
              <FaTimes className="text-zinc-400 text-sm" />
            </IconButton>
          </div>

          <div className="flex flex-col gap-3 mb-8">
             <Link 
               to="/login" 
               onClick={toggleDrawer(false)} 
               className="w-full bg-zinc-950 text-white font-black py-4 rounded-2xl text-center uppercase tracking-widest text-[10px] shadow-lg active:scale-95 transition-transform"
             >
               Sign In
             </Link>
             <Link 
               to="/signup" 
               onClick={toggleDrawer(false)} 
               className="w-full border border-zinc-200 text-zinc-950 font-black py-4 rounded-2xl text-center uppercase tracking-widest text-[10px] hover:border-purple-600 hover:text-purple-600 active:scale-95 transition-all"
             >
               Create Account
             </Link>
          </div>

          <nav className="flex-1 text-left">
             <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 ml-2 text-left">Navigation</h3>
             <List className="space-y-1">
                {mobileNavLinks.map((item) => (
                  <NavLink 
                    key={item.label}
                    to={item.path}
                    onClick={toggleDrawer(false)}
                    className={({ isActive }) => `
                      flex items-center p-3 rounded-xl transition-all
                      ${isActive ? 'bg-purple-50 text-purple-600' : 'text-zinc-600 hover:bg-zinc-50'}
                    `}
                  >
                    <div className={`mr-4 text-lg ${location.pathname === item.path ? 'text-purple-600' : 'text-zinc-400'}`}>{item.icon}</div>
                    <span className="text-[14px] font-bold">{item.label}</span>
                  </NavLink>
                ))}
             </List>

             <Divider className="my-6" />
             
             <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 ml-2 text-left">Quick Actions</h3>
             <div className="grid grid-cols-2 gap-3">
                <Link to="/cart" onClick={toggleDrawer(false)} className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:border-purple-300 transition-colors active:scale-95">
                   <FaShoppingCart className="text-purple-600" />
                   <span className="text-[10px] font-black text-zinc-800">My Cart</span>
                </Link>
                <Link to="/wishlist" onClick={toggleDrawer(false)} className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:border-purple-300 transition-colors active:scale-95">
                   <FaHeart className="text-rose-500" />
                   <span className="text-[10px] font-black text-zinc-800">Favorite</span>
                </Link>
             </div>
          </nav>

          <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-between items-center bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl">
              <div className="text-left">
                <p className="text-[10px] font-bold text-zinc-400 uppercase">Support Line</p>
                <p className="text-xs font-black text-zinc-900">+91 98765 43210</p>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <FaHome className="text-xs" />
              </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
