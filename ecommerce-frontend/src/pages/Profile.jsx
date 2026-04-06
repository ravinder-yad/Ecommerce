import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileOverview from '../components/Profile/ProfileOverview';
import AccountSettings from '../components/Profile/AccountSettings';

// Importing existing pages to use as tabs
import MyOrders from './MyOrders';
import Wishlist from './Wishlist';

const Profile = () => {
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!user) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <ProfileOverview setActiveTab={setActiveTab} />;
      case 'orders':
        return <MyOrders isTab={true} />; 
      case 'wishlist':
        return <Wishlist isTab={true} />;
      case 'settings':
        return <AccountSettings user={user} />;
      case 'address':
        return (
          <div className="bg-white border border-zinc-100 rounded-[32px] p-12 text-center">
             <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-zinc-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                   <circle cx="12" cy="10" r="3" />
                </svg>
             </div>
             <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-950 mb-2">No addresses saved yet</h4>
             <button className="text-[10px] font-black text-purple-600 uppercase tracking-widest hover:underline decoration-purple-100 underline-offset-8">Add primary address</button>
          </div>
        );
      default:
        return <ProfileOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-12 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 👤 Profile Header */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <ProfileHeader user={user} setActiveTab={setActiveTab} />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 🧩 Sidebar Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-72 shrink-0"
          >
            <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>

          {/* 🖼️ Main Content Area (Dynamic) */}
          <div className="flex-1 min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
