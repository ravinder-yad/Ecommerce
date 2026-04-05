import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        id: orderId || 'SV-789241',
        status: 'In Transit',
        statusId: 2, // 0: Processing, 1: Shipped, 2: In Transit, 3: Delivered
        estimatedDelivery: 'April 08, 2026',
        steps: [
          { label: 'Order Confirmed', date: 'April 02, 10:30 AM', completed: true },
          { label: 'Packed & Ready', date: 'April 03, 02:15 PM', completed: true },
          { label: 'In Transit', date: 'April 04, 09:00 AM', completed: true },
          { label: 'Out for Delivery', date: '--', completed: false },
          { label: 'Delivered', date: '--', completed: false },
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
           <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Support Hub</h4>
           <h1 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-6">
              Track Your <span className="text-purple-600">Journey.</span>
           </h1>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
             Enter your 8-digit order ID or tracking number to see where your luxury essentials are currently located.
           </p>
        </div>

        {/* Search Bar Area */}
        <div className="max-w-xl mx-auto mb-20">
           <form onSubmit={handleTrack} className="flex p-2 bg-zinc-50 border border-zinc-100 rounded-[32px] shadow-sm focus-within:ring-2 focus-within:ring-purple-600/20 transition-all">
              <div className="flex-grow flex items-center px-6 text-zinc-300">
                 <Search size={18} />
                 <input 
                   type="text" 
                   required
                   value={orderId}
                   onChange={(e) => setOrderId(e.target.value)}
                   placeholder="Enter Order ID (e.g. SV-123456)" 
                   className="bg-transparent border-none outline-none w-full px-4 py-3 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 tracking-widest uppercase"
                 />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="bg-zinc-900 text-white font-black px-10 py-4.5 rounded-[24px] hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px] disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Track Now'}
              </button>
           </form>
        </div>

        {/* Tracking Results Area */}
        <AnimatePresence>
           {trackingData && !loading && (
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-4xl mx-auto"
             >
                {/* Status Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                   <div className="bg-zinc-50 p-8 rounded-[32px] border border-zinc-100 text-center">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Order Status</p>
                      <h3 className="text-2xl font-black text-purple-600 uppercase italic tracking-tighter">{trackingData.status}</h3>
                   </div>
                   <div className="bg-zinc-50 p-8 rounded-[32px] border border-zinc-100 text-center">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Order ID</p>
                      <h3 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tighter">#{trackingData.id}</h3>
                   </div>
                   <div className="bg-zinc-50 p-8 rounded-[32px] border border-zinc-100 text-center">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Expected Delivery</p>
                      <h3 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tighter">{trackingData.estimatedDelivery}</h3>
                   </div>
                </div>

                {/* Progress Visual */}
                <div className="relative">
                   <div className="absolute left-6 top-0 bottom-0 w-1 bg-zinc-100 rounded-full md:left-1/2 md:-translate-x-1/2"></div>
                   
                   <div className="space-y-12">
                      {trackingData.steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-center md:justify-center">
                           {/* Icon Node */}
                           <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-colors duration-500 ${step.completed ? 'bg-purple-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                              {idx === 0 && <Clock size={20} />}
                              {idx === 1 && <Package size={20} />}
                              {idx === 2 && <Truck size={20} />}
                              {idx === 3 && <Package size={20} />}
                              {idx === 4 && <CheckCircle size={20} />}
                           </div>

                           {/* Metadata Card */}
                           <div className={`ml-8 md:absolute md:ml-0 ${idx % 2 === 0 ? 'md:left-[calc(50%+4rem)]' : 'md:right-[calc(50%+4rem)] md:text-right'}`}>
                              <h4 className={`text-sm font-black uppercase tracking-widest ${step.completed ? 'text-zinc-950' : 'text-zinc-300'}`}>{step.label}</h4>
                              <p className="text-[10px] font-bold text-zinc-400 mt-1 uppercase">{step.date}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

             </motion.div>
           )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default OrderTracking;
