import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Truck, CheckCircle, CreditCard, MapPin, ExternalLink, Download } from 'lucide-react';
import OrderTimeline from './OrderTimeline';

const OrderDetailModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 backdrop-blur-md z-[200] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[700px] md:max-h-[85vh] bg-white rounded-[40px] shadow-2xl z-[201] overflow-hidden flex flex-col no-scrollbar"
          >
            {/* Header */}
            <div className="bg-zinc-950 p-8 text-white flex justify-between items-center relative overflow-hidden">
               {/* Decorative Gradient Overlay */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] -mr-32 -mt-32"></div>
               
               <div className="relative z-10 text-left">
                  <p className="text-purple-400 font-extrabold uppercase tracking-widest text-[9px] mb-2 leading-none italic font-sans italic italic">Authorized Transaction</p>
                  <h2 className="text-2xl font-black tracking-tighter uppercase leading-none">{order.id || '#ORD-' + order._id.slice(-6)}</h2>
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-2">{order.date || new Date(order.createdAt).toLocaleDateString()}</p>
               </div>
               <button 
                 onClick={onClose}
                 className="relative z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all active:scale-95"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 overflow-y-auto no-scrollbar flex-1 space-y-10">
               
               {/* Timeline Section */}
               <div className="text-left">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 ml-4 italic">Tracking Logistics</h3>
                  <div className="bg-zinc-50 border border-zinc-100 rounded-[32px] overflow-hidden">
                     <OrderTimeline status={order.status} />
                  </div>
               </div>

               {/* Items List */}
               <div className="text-left">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 ml-4 italic">Items Acquired</h3>
                  <div className="space-y-4">
                     {order.orderItems.map((item, idx) => (
                        <div key={idx} className="bg-white border border-zinc-100 rounded-3xl p-5 flex items-center justify-between group hover:shadow-lg transition-all">
                           <div className="flex items-center gap-5">
                              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                              <div className="text-left">
                                 <h4 className="text-[11px] font-black text-zinc-950 uppercase tracking-tight truncate max-w-[200px] leading-tight">{item.name}</h4>
                                 <p className="text-[10px] text-zinc-400 font-bold uppercase">Qty: {item.qty} • Size: M</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-sm font-black text-zinc-950 tracking-tighter">₹{item.price.toLocaleString()}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Shipping & Payment Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-zinc-50 border border-zinc-100 rounded-[32px] p-6">
                     <div className="flex items-center gap-3 mb-4 text-purple-600">
                        <MapPin size={16} />
                        <h4 className="text-[10px] font-black uppercase tracking-widest leading-none">Destination</h4>
                     </div>
                     <p className="text-[11px] font-bold text-zinc-950 leading-relaxed uppercase">
                        {order.shippingAddress.address}<br />
                        {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br />
                        {order.shippingAddress.country}
                     </p>
                  </div>

                  <div className="bg-zinc-50 border border-zinc-100 rounded-[32px] p-6">
                     <div className="flex items-center gap-3 mb-4 text-emerald-600">
                        <CreditCard size={16} />
                        <h4 className="text-[10px] font-black uppercase tracking-widest leading-none">Voucher Detail</h4>
                     </div>
                     <p className="text-[11px] font-bold text-zinc-950 leading-relaxed uppercase">
                        Method: {order.paymentMethod}<br />
                        Status: <span className={order.isPaid ? 'text-emerald-600' : 'text-rose-500'}>{order.isPaid ? 'Settled' : 'Unpaid'}</span><br />
                        Currency: Indian Rupee
                     </p>
                  </div>
               </div>

            </div>

            {/* Footer Summary */}
            <div className="bg-zinc-50 p-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="flex items-center gap-10">
                  <div className="text-left">
                     <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1 text-left">Subtotal Summary</p>
                     <p className="text-xl font-black text-zinc-950 tracking-tighter uppercase leading-none">₹{order.totalPrice.toLocaleString()}</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-white border border-zinc-200 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-800 hover:bg-zinc-950 hover:text-white transition-all shadow-sm group">
                     Invoice <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                  </button>
                  <button className="flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl group">
                     Help <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
                  </button>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderDetailModal;
