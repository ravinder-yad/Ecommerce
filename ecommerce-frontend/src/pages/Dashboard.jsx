import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { 
  FaUser, FaBoxOpen, FaHeart, FaMapMarkerAlt, FaCreditCard, 
  FaEdit, FaChevronRight, FaPlus, FaCloudUploadAlt, FaDatabase,
  FaTerminal, FaShieldAlt, FaHistory, FaBroadcastTower
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { createProduct } from '../redux/slices/productSlice';
import toast from 'react-hot-toast';
import { io } from 'socket.io-client';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [liveActivities, setLiveActivities] = useState([]);
  const feedRef = useRef(null);
  
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    description: '',
    countInStock: 10,
    brand: 'ShopVerse Luxury',
  });

  // ⚡ Socket.io Integration (Police-Grade Tracking)
  useEffect(() => {
    if (user?.isAdmin) {
      const socket = io('http://localhost:5000');
      
      socket.on('connect', () => {
        toast('Connected to Command Center', { icon: '💂‍♂️', style: { background: '#18181b', color: '#fff' } });
      });

      socket.on('live_activity', (activity) => {
        setLiveActivities(prev => [{ ...activity, id: Date.now() }, ...prev].slice(0, 50));
        // Auto-scroll logic if needed
      });

      return () => socket.disconnect();
    }
  }, [user]);

  if (!user) return null;

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productData.name || !productData.price || !productData.image) {
      return toast.error('Missing required treasury details');
    }
    dispatch(createProduct(productData));
    toast.success('Product added to Treasury', { icon: '💎' });
    setShowAddProduct(false);
    setProductData({
      name: '', price: '', image: '', category: '', description: '', countInStock: 10, brand: 'ShopVerse Luxury'
    });
  };

  const getLogColor = (action) => {
    switch(action) {
      case 'LOGIN': return 'text-emerald-400';
      case 'ORDER_PLACED': return 'text-purple-400';
      case 'VIEW_PRODUCT': return 'text-blue-400';
      case 'ADD_TO_CART': return 'text-amber-400';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 👋 Header Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 text-left"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl font-black shadow-2xl shadow-purple-200">
               {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic mb-1">
                 {user.isAdmin ? 'Command Center 💂‍♂️' : 'Authenticated Account ✨'}
              </p>
              <h1 className="text-3xl font-black text-zinc-950 uppercase tracking-tighter">Welcome, {user.fullName.split(' ')[0]}</h1>
              <p className="text-zinc-500 text-sm font-medium">{user.email}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
             {user.isAdmin && (
               <button 
                 onClick={() => setShowAddProduct(!showAddProduct)}
                 className="inline-flex items-center gap-3 bg-purple-600 border border-purple-600 px-6 py-3.5 rounded-[22px] text-[10px] font-black uppercase tracking-widest text-white hover:bg-zinc-950 hover:border-zinc-950 transition-all shadow-xl"
               >
                  {showAddProduct ? 'Close Management' : 'Treasury Management'} <FaPlus size={12} />
               </button>
             )}
             <Link to="/profile" className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-3.5 rounded-[22px] text-[10px] font-black uppercase tracking-widest text-zinc-800 hover:bg-zinc-950 hover:text-white transition-all shadow-sm">
                Edit Profile <FaEdit size={12} />
             </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* Left Column: Management & Stats (8 Cols) */}
           <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* 📊 Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { icon: <FaBoxOpen />, label: 'Active Orders', value: '2', color: 'bg-purple-50 text-purple-600' },
                   { icon: <FaHeart />, label: 'Wishlist Items', value: '5', color: 'bg-rose-50 text-rose-500' },
                   { icon: <FaDatabase />, label: 'Vault Access', value: 'Lv. 1', color: 'bg-emerald-50 text-emerald-600' },
                 ].map((stat, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all"
                   >
                      <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                         {stat.icon}
                      </div>
                      <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 italic">{stat.label}</h4>
                      <p className="text-3xl font-black text-zinc-950 tracking-tighter">{stat.value}</p>
                   </motion.div>
                 ))}
              </div>

              {/* 🧩 Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { icon: <FaUser />, label: 'Personal Information', sub: 'Profile Data', path: '/profile' },
                   { icon: <FaBoxOpen />, label: 'Order History', sub: 'Past purchases', path: '/orders' },
                   { icon: <FaHeart />, label: 'My Favorites', sub: 'Wishlist', path: '/wishlist' },
                   { icon: <FaCreditCard />, label: 'Payment Methods', sub: 'Cards & Wallets', path: '/payments' },
                 ].map((link, idx) => (
                   <Link key={idx} to={link.path} className="flex items-center justify-between p-6 bg-white border border-zinc-100 rounded-[28px] hover:border-purple-200 group transition-all shadow-sm hover:shadow-lg">
                      <div className="flex items-center gap-5 text-left">
                        <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                          {link.icon}
                        </div>
                        <div className="text-left">
                           <h4 className="text-[10px] font-black text-zinc-950 uppercase tracking-widest mb-0.5">{link.label}</h4>
                           <p className="text-[10px] font-medium text-zinc-400 leading-none">{link.sub}</p>
                        </div>
                      </div>
                      <FaChevronRight className="text-zinc-200 group-hover:text-purple-600 transition-colors" />
                   </Link>
                 ))}
              </div>
           </div>

           {/* Right Column: Live Activity Feed (4 Cols) - Only for Admins */}
           <div className="lg:col-span-4 flex flex-col gap-6 h-full">
              <div className="bg-zinc-950 rounded-[48px] p-10 text-white h-[600px] flex flex-col shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/30 blur-[80px] -mr-16 -mt-16 group-hover:bg-purple-600/40 transition-all"></div>
                 
                 <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                       <FaBroadcastTower className="text-purple-500 animate-pulse" />
                       <h3 className="text-sm font-black uppercase tracking-[0.3em] italic">Command Center</h3>
                    </div>
                    <span className="flex items-center gap-2 text-[10px] font-black text-emerald-400 tracking-[0.2em] italic">
                       <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div> LIVE
                    </span>
                 </div>

                 {!user.isAdmin ? (
                   <div className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-6">
                      <FaShieldAlt size={40} className="text-zinc-800" />
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic leading-relaxed">
                        Access Restricted. <br/> Clearance Level insufficient for real-time tracking.
                      </p>
                   </div>
                 ) : (
                   <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pr-2" ref={feedRef}>
                      {liveActivities.length > 0 ? liveActivities.map((log) => (
                        <motion.div 
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          key={log.id} 
                          className="bg-white/5 border border-white/5 p-5 rounded-3xl hover:bg-white/10 transition-all text-left group/log"
                        >
                           <div className="flex justify-between items-center mb-2">
                              <span className={`text-[9px] font-black uppercase tracking-widest ${getLogColor(log.action)}`}>
                                 {log.action}
                              </span>
                              <span className="text-[9px] font-bold text-zinc-600 tabular-nums">
                                 {new Date(log.timestamp).toLocaleTimeString()}
                              </span>
                           </div>
                           <p className="text-[10px] font-medium text-zinc-400 mb-1 leading-none italic">
                              {log.user === 'Anonymous' ? 'System Guest' : log.user.fullName}
                           </p>
                           <div className="text-[9px] font-mono text-zinc-500 break-all opacity-0 group-hover/log:opacity-100 transition-opacity">
                              {JSON.stringify(log.metadata)}
                           </div>
                        </motion.div>
                      )) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-4 opacity-30 h-full">
                           <FaTerminal size={32} />
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] italic">Awaiting Registry Influx...</p>
                        </div>
                      )}
                   </div>
                 )}

                 <div className="mt-8 pt-8 border-t border-white/5 text-left relative z-10">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] italic">Registry Integrity: 100% Secured</p>
                 </div>
              </div>
           </div>

        </div>

        {/* 🏛️ Add Product Form */}
        <AnimatePresence>
          {showAddProduct && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-10 bg-white p-12 rounded-[64px] border-4 border-zinc-50 shadow-3xl text-left"
            >
               <h2 className="text-3xl font-black text-zinc-950 uppercase italic tracking-tighter mb-12">New Selection <span className="text-purple-600">Creation.</span></h2>
               <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Reuse form from previous version */}
                  {/* ... same inputs ... */}
                  <button type="submit" className="md:col-span-2 bg-zinc-950 text-white font-black py-7 rounded-[32px] uppercase tracking-[0.3em] text-xs hover:bg-purple-600 transition-all">
                     Finalize Creation <FaCloudUploadAlt size={18} />
                  </button>
               </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🏷️ Logout Prompt */}
        <div className="mt-12 text-center pb-20">
           <button 
             className="text-[10px] font-black text-rose-500 hover:text-rose-600 uppercase tracking-[0.4em] underline decoration-rose-100 underline-offset-8 italic transition-all active:scale-95"
           >
             Secure Transaction Logout
           </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
