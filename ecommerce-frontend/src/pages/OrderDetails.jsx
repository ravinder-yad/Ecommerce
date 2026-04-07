import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderById, resetOrderState } from '../redux/slices/orderSlice';
import { 
  Package, Truck, CheckCircle, CreditCard, MapPin, 
  ArrowLeft, Download, ShieldCheck, RefreshCw, Landmark 
} from 'lucide-react';
import PageTemplate from './PageTemplate';

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { order, isLoading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrderById(id));
    return () => dispatch(resetOrderState());
  }, [dispatch, id]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'text-emerald-500';
      case 'Shipped': return 'text-blue-500';
      case 'Processing': return 'text-amber-500';
      default: return 'text-purple-600';
    }
  };

  if (isLoading) return (
     <div className="min-h-screen flex items-center justify-center bg-white">
        <RefreshCw size={40} className="text-purple-600 animate-spin" />
     </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">
       <h2 className="text-2xl font-black text-zinc-900 uppercase italic tracking-tighter">Registry Missing.</h2>
       <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] italic">The treasury could not find this transaction record.</p>
       <Link to="/orders" className="bg-zinc-950 text-white font-black px-12 py-5 rounded-[28px] uppercase tracking-widest text-[10px]">Back to History</Link>
    </div>
  );

  if (!order) return null;

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="text-left">
              <Link to="/orders" className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 font-black uppercase text-[10px] tracking-widest transition-all mb-8">
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                Return to History
              </Link>
              <h4 className="text-purple-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Registry ID: {order._id}</h4>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-4">
                Full <span className="text-purple-600">Details.</span>
              </h1>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] italic flex items-center gap-3">
                 <Landmark size={14} /> Authorized on {new Date(order.createdAt).toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' })}
              </p>
           </div>
           
           <div className="flex items-center gap-4">
              <div className={`px-8 py-4 rounded-[28px] border-2 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl ${getStatusColor(order.status)} bg-white border-current`}>
                 <Package size={16} /> Status: {order.status}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Order Items (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
             
             {/* Items Card */}
             <div className="bg-white border border-opacity-5 border-zinc-900 rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                <h3 className="text-xl font-black text-zinc-900 uppercase italic tracking-tighter mb-10 flex items-center gap-3">
                   <Package size={20} className="text-purple-600" /> Acquired <span className="text-purple-600">Treasures.</span>
                </h3>

                <div className="space-y-6">
                   {order.orderItems.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-zinc-50 rounded-[32px] hover:bg-zinc-100 transition-all border border-zinc-50 hover:border-zinc-200">
                         <div className="w-24 h-32 bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                         </div>
                         <div className="flex-grow text-left">
                            <h4 className="text-lg font-black text-zinc-900 uppercase tracking-tight italic mb-1">{item.name}</h4>
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic mb-4">QTY: {item.qty} × ₹{item.price.toLocaleString()}</p>
                            <div className="flex gap-2">
                               <span className="bg-white px-4 py-1.5 rounded-full text-[9px] font-black border border-zinc-100 text-zinc-500 uppercase">Serialized</span>
                               <span className="bg-white px-4 py-1.5 rounded-full text-[9px] font-black border border-zinc-100 text-zinc-500 uppercase">Premium</span>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-2xl font-black text-zinc-950 tracking-tighter italic tabular-nums">₹{(item.price * item.qty).toLocaleString()}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Shipping & Payment Ritual Detail */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-950 rounded-[40px] p-10 text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-[80px] -mr-16 -mt-16 group-hover:bg-purple-600/30 transition-all"></div>
                   <div className="flex items-center gap-4 mb-8 text-purple-400">
                      <MapPin size={24} />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] italic">Dispatch Point</h3>
                   </div>
                   <p className="text-zinc-400 font-bold uppercase tracking-widest text-[11px] leading-relaxed italic text-left">
                      {order.shippingAddress.address}<br/>
                      {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br/>
                      {order.shippingAddress.country}
                   </p>
                </div>

                <div className="bg-white border-2 border-zinc-100 rounded-[40px] p-10 relative group">
                   <div className="flex items-center gap-4 mb-8 text-emerald-600">
                      <CreditCard size={24} />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] italic">Vault Payment</h3>
                   </div>
                   <div className="space-y-4 text-left">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-zinc-400 uppercase italic">Method</span>
                         <span className="text-[10px] font-black text-zinc-950 uppercase italic">{order.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-zinc-400 uppercase italic">Status</span>
                         <span className={`text-[10px] font-black uppercase italic ${order.isPaid ? 'text-green-600' : 'text-rose-500'}`}>
                            {order.isPaid ? 'Authenticated Success' : 'Pending Authorization'}
                         </span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-zinc-400 uppercase italic">Authenticated</span>
                         <span className="text-[10px] font-black text-zinc-400 uppercase italic">{order.paidAt ? new Date(order.paidAt).toLocaleDateString() : 'N/A'}</span>
                      </div>
                   </div>
                </div>
             </div>

          </div>

          {/* Right Side: Ledger Summary (4 Cols) */}
          <div className="lg:col-span-4 sticky top-32">
             <div className="bg-white rounded-[48px] border-2 border-zinc-50 p-10 shadow-2xl overflow-hidden relative">
                <div className="absolute top-10 right-10 -rotate-12 opacity-5 pointer-events-none">
                   <CheckCircle size={100} />
                </div>
                
                <h3 className="text-[10px] font-black text-purple-600 uppercase tracking-[0.4em] mb-10 italic">Registry Ledger</h3>

                <div className="space-y-6 pt-10 border-t border-zinc-50 mb-12">
                   <div className="flex justify-between items-center text-left">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Acquisition Subtotal</span>
                      <span className="text-sm font-black text-zinc-950 tabular-nums italic">₹{order.itemsPrice.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center text-left">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Luxury Entry Tax</span>
                      <span className="text-sm font-black text-zinc-950 tabular-nums italic">₹{order.taxPrice.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center text-left">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Secured Shipping</span>
                      <span className={`text-xs font-black italic tabular-nums ${order.shippingPrice === 0 ? 'text-green-600' : 'text-zinc-950'}`}>
                        {order.shippingPrice === 0 ? 'FREE' : `₹${order.shippingPrice.toLocaleString()}`}
                      </span>
                   </div>
                </div>

                <div className="flex justify-between items-end mb-12 pt-6 border-t-2 border-zinc-950/5">
                   <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] italic mb-1 leading-none">Exchange Total</span>
                   <span className="text-4xl font-black text-zinc-950 tracking-tighter italic leading-none tabular-nums">₹{order.totalPrice.toLocaleString()}</span>
                </div>

                <div className="space-y-4">
                   <button className="w-full flex items-center justify-center gap-4 bg-zinc-950 text-white font-black py-6 rounded-[32px] hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px] shadow-2xl active:scale-95 group">
                      Download Receipt <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                   </button>
                   
                   <div className="flex items-center gap-3 bg-zinc-50 p-5 rounded-[28px]">
                      <ShieldCheck size={20} className="text-green-500" />
                      <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest italic text-left leading-relaxed">
                        Order Identity Verified <br/> <span className="text-green-600">Registry Integrity Locked</span>
                      </p>
                   </div>
                </div>

             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderDetails;
