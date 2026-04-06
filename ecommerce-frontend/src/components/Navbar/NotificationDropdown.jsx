import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Trash2, Check } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, markNotificationAsRead, clearNotifications } from '../../redux/slices/notificationSlice';

const NotificationDropdown = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector((state) => state.notifications);

  React.useEffect(() => {
    if (isOpen) {
      dispatch(fetchNotifications());
    }
  }, [dispatch, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for mobile closing */}
          <div className="fixed inset-0 z-[99]" onClick={onClose}></div>
          
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-4 w-80 md:w-96 bg-white rounded-[32px] shadow-2xl border border-zinc-100 z-[100] overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
               <div>
                  <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest leading-none">Notifications</h3>
                  <p className="text-[10px] font-bold text-purple-600 uppercase tracking-[0.2em] mt-2 italic leading-none">{unreadCount} UNREAD ALERTS</p>
               </div>
               <button 
                 onClick={() => dispatch(clearNotifications())}
                 className="p-2 hover:bg-rose-50 text-zinc-400 hover:text-rose-500 rounded-xl transition-all"
                 title="Clear All"
               >
                 <Trash2 size={16} />
               </button>
            </div>

            {/* List */}
            <div className="max-h-[400px] overflow-y-auto">
               {notifications.length > 0 ? (
                 notifications.slice().reverse().map((n) => (
                   <div 
                     key={n._id} 
                     onClick={() => dispatch(markNotificationAsRead(n._id))}
                     className={`px-8 py-6 border-b border-zinc-50 hover:bg-zinc-50 transition-all cursor-pointer relative group ${!n.isRead ? 'bg-purple-50/20' : ''}`}
                   >
                      {!n.isRead && (
                         <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      )}
                      
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-[10px] font-black text-purple-600 uppercase tracking-tighter italic leading-none">{n.type}</span>
                         <span className="text-[9px] font-bold text-zinc-400 uppercase leading-none">{new Date(n.createdAt).toLocaleTimeString()}</span>
                      </div>
                      
                      <h4 className={`text-xs font-black uppercase tracking-tight leading-tight mb-1 ${n.isRead ? 'text-zinc-500' : 'text-zinc-900'}`}>{n.message}</h4>
                      
                      {!n.isRead && (
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-2 bg-white rounded-lg shadow-sm border border-zinc-100 text-purple-600 transition-all">
                           <Check size={12} />
                        </button>
                      )}
                   </div>
                 ))
               ) : (
                 <div className="py-20 text-center px-10">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-300 mx-auto mb-4">
                       <Bell size={24} />
                    </div>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest italic">All caught up!</p>
                 </div>
               )}
            </div>

            {/* Footer */}
            <div className="px-8 py-5 bg-zinc-50 text-center border-t border-zinc-100">
               <button className="text-[9px] font-black text-zinc-900 uppercase tracking-widest hover:text-purple-600 transition-colors">
                  View All Activity
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationDropdown;
