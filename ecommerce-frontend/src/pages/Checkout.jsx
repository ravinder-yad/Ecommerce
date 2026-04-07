import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CreditCard, ChevronRight, CheckCircle, Package, ArrowLeft, ShieldCheck, Lock, Loader2, Landmark } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createOrder, resetOrderState } from '../redux/slices/orderSlice';
import { clearCartItems } from '../redux/slices/cartSlice';
import PageTemplate from './PageTemplate';
import toast from 'react-hot-toast';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { isLoading, success, error } = useSelector((state) => state.orders);

  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: 'India',
  });
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [isVaultConnecting, setIsVaultConnecting] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !success) {
      navigate('/cart');
    }
  }, [cartItems, navigate, success]);

  // Handle Order Success
  useEffect(() => {
    if (success) {
      toast.success('ORDER PLACED! Treasures reserved.', {
        style: { borderRadius: '12px', background: '#18181b', color: '#fff' }
      });
      dispatch(clearCartItems());
      navigate('/order-success');
      dispatch(resetOrderState());
    }
    if (error) {
      toast.error(error);
      setIsVaultConnecting(false);
    }
  }, [success, error, navigate, dispatch]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingPrice = subtotal > 5000 ? 0 : 250;
  const taxPrice = subtotal * 0.12;
  const totalPrice = subtotal + shippingPrice + taxPrice;

  const handlePlaceOrder = () => {
    setIsVaultConnecting(true);
    
    // Simulate luxury banking connection delay
    setTimeout(() => {
      dispatch(createOrder({
        orderItems: cartItems,
        shippingAddress: address,
        paymentMethod,
        itemsPrice: subtotal,
        shippingPrice,
        taxPrice,
        totalPrice,
      }));
    }, 2500);
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-32 relative">
      
      {/* 🔐 Secure Vault Processing Overlay */}
      <AnimatePresence>
        {isVaultConnecting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-3xl flex items-center justify-center p-8 text-center"
          >
             <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               className="max-w-md w-full"
             >
                <div className="w-24 h-24 bg-purple-600 rounded-[32px] flex items-center justify-center text-white mx-auto mb-10 shadow-3xl shadow-purple-900/50 relative">
                   <Lock size={40} className="relative z-10" />
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-[-12px] border-2 border-dashed border-purple-400/30 rounded-[44px]"
                   />
                </div>
                
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Connecting To <span className="text-purple-500">Vault.</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                   <Landmark size={14} className="text-zinc-500" />
                   <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Encrypted Secure Bank Portal Connection</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">Registry Status</span>
                      <span className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase animate-pulse"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> Active Protection</span>
                   </div>
                   <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                      />
                   </div>
                </div>

                <p className="text-zinc-500 text-[11px] font-medium leading-relaxed italic mb-8">
                  Please do not refresh. Your transaction is being secured and verified with Aerospace-grade encryption.
                </p>

                <div className="flex items-center justify-center gap-3 text-zinc-300 font-bold italic text-sm">
                   <Loader2 size={18} className="animate-spin text-purple-500" /> Processing Full Payment...
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Checkout Header */}
        <div className="mb-20">
          <Link to="/cart" className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 font-black uppercase text-[10px] tracking-widest transition-all mb-8">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Back to Bag
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none text-left">
            Final <span className="text-purple-600">Checkout.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Checkout Steps (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Step 1: Shipping */}
            <div className={`p-8 md:p-12 border ${step === 1 ? 'border-purple-600 bg-purple-50/10' : 'border-zinc-100 bg-white'} rounded-[48px] transition-all duration-500`}>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black italic shadow-sm border ${step >= 1 ? 'bg-purple-600 text-white border-purple-600' : 'bg-zinc-50 text-zinc-400 border-zinc-100'}`}>01</div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 italic">Shipping Treasury</h3>
                </div>
                {step > 1 && <CheckCircle className="text-green-500" size={24} />}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="md:col-span-2">
                       <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block italic text-left">Recipient Address</label>
                       <input 
                         type="text" 
                         placeholder="e.g., House No, Building, Area" 
                         value={address.address}
                         onChange={(e) => setAddress({...address, address: e.target.value})}
                         className="w-full bg-zinc-50 border border-zinc-100 rounded-3xl p-6 text-[11px] font-black uppercase text-zinc-900 outline-none focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 transition-all placeholder:text-zinc-300"
                       />
                    </div>
                    <div>
                       <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block italic text-left">City / Metropolitan</label>
                       <input 
                         type="text" 
                         placeholder="City" 
                         value={address.city}
                         onChange={(e) => setAddress({...address, city: e.target.value})}
                         className="w-full bg-zinc-50 border border-zinc-100 rounded-3xl p-6 text-[11px] font-black uppercase text-zinc-900 outline-none focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 transition-all placeholder:text-zinc-300"
                       />
                    </div>
                    <div>
                       <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block italic text-left">Postal Dispatch Code</label>
                       <input 
                         type="text" 
                         placeholder="Pincode" 
                         value={address.postalCode}
                         onChange={(e) => setAddress({...address, postalCode: e.target.value})}
                         className="w-full bg-zinc-50 border border-zinc-100 rounded-3xl p-6 text-[11px] font-black uppercase text-zinc-900 outline-none focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 transition-all placeholder:text-zinc-300"
                       />
                    </div>
                    <button 
                      onClick={() => address.address && address.city && address.postalCode ? setStep(2) : toast.error('Fill address details')}
                      className="md:col-span-2 w-full mt-4 bg-zinc-950 text-white font-black py-6 rounded-[32px] hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px] shadow-2xl flex items-center justify-center gap-4 group"
                    >
                      Verify Address Registry <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {step > 1 && (
                <div className="flex justify-between items-center bg-zinc-50/50 p-6 rounded-3xl">
                   <div className="text-left">
                     <p className="text-[10px] font-black text-zinc-950 uppercase tracking-widest italic mb-1">Authenticated Location</p>
                     <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">{address.address}, {address.city} - {address.postalCode}</p>
                   </div>
                   <button onClick={() => setStep(1)} className="text-[10px] font-black text-purple-600 uppercase tracking-widest hover:underline">Revise</button>
                </div>
              )}
            </div>

            {/* Step 2: Payment */}
            <div className={`p-8 md:p-12 border ${step === 2 ? 'border-purple-600 bg-purple-50/10' : 'border-zinc-100 bg-white'} rounded-[48px] transition-all duration-500 opacity-100`}>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black italic shadow-sm border ${step >= 2 ? 'bg-purple-600 text-white border-purple-600' : 'bg-zinc-50 text-zinc-400 border-zinc-100'}`}>02</div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 italic">Financial Initiation</h3>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <button 
                         onClick={() => setPaymentMethod('UPI')}
                         className={`p-8 rounded-[32px] border-2 flex flex-col items-center gap-4 transition-all ${paymentMethod === 'UPI' ? 'border-purple-600 bg-purple-600 text-white shadow-xl' : 'border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-300'}`}
                       >
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${paymentMethod === 'UPI' ? 'bg-white text-purple-600' : 'bg-white text-zinc-200 shadow-sm border border-zinc-100'}`}>⚡</div>
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Full UPI Transfer</span>
                       </button>
                       <button 
                         onClick={() => setPaymentMethod('CARD')}
                         className={`p-8 rounded-[32px] border-2 flex flex-col items-center gap-4 transition-all ${paymentMethod === 'CARD' ? 'border-purple-600 bg-purple-600 text-white shadow-xl' : 'border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-300'}`}
                       >
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${paymentMethod === 'CARD' ? 'bg-white text-purple-600' : 'bg-white text-zinc-200 shadow-sm border border-zinc-100'}`}><CreditCard size={20} /></div>
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Encrypted Cards</span>
                       </button>
                    </div>
                    
                    <button 
                      disabled={isLoading || isVaultConnecting}
                      onClick={handlePlaceOrder}
                      className="w-full bg-zinc-950 text-white font-black py-8 rounded-[40px] hover:bg-purple-600 transition-all uppercase tracking-[0.3em] text-xs shadow-2xl active:scale-95 flex items-center justify-center gap-4 relative overflow-hidden group"
                    >
                      {isVaultConnecting ? (
                        <div className="flex items-center gap-4 italic font-black uppercase tracking-widest text-[10px] opacity-70 animate-pulse">
                           Establishing Vault Connection...
                        </div>
                      ) : (
                        <>Iniate Full Payment <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
                      )}
                      
                      {/* Button Gradient Shine */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Summary Box (4 Columns) */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-white rounded-[48px] border border-zinc-100 p-8 shadow-2xl overflow-hidden relative group">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[80px] rounded-full group-hover:bg-purple-600/10 transition-colors"></div>
               
               <h2 className="text-xl font-black text-zinc-900 uppercase italic tracking-tighter mb-8 flex items-center gap-3">
                 <Package size={20} className="text-purple-600" /> Transaction <span className="text-purple-600">Lock.</span>
               </h2>

               <div className="flex flex-col gap-2 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center group/item transition-colors hover:bg-zinc-50 p-3 rounded-2xl">
                       <div className="w-16 h-20 bg-zinc-50 rounded-xl overflow-hidden shadow-sm border border-zinc-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                       </div>
                       <div className="flex-grow text-left">
                          <h4 className="text-[10px] font-black text-zinc-900 uppercase tracking-tighter leading-none mb-1 truncate max-w-[150px] italic">{item.name}</h4>
                          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none italic">QTY: {item.qty} × ₹{item.price.toLocaleString()}</p>
                       </div>
                       <div className="text-[10px] font-black text-zinc-950 italic">₹{(item.price * item.qty).toLocaleString()}</div>
                    </div>
                  ))}
               </div>

               <div className="space-y-4 pt-8 border-t border-zinc-50 mb-10">
                  <div className="flex justify-between items-center text-left">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Vault Inventory</span>
                    <span className="text-xs font-black text-zinc-950 tabular-nums italic">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-left">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Luxury Entry Tax</span>
                    <span className="text-xs font-black text-zinc-950 tabular-nums italic">₹{taxPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-left">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Secured Shipping</span>
                    <span className={`text-[10px] font-black italic tabular-nums ${shippingPrice === 0 ? 'text-green-600' : 'text-zinc-950'}`}>
                      {shippingPrice === 0 ? 'FREE' : `₹${shippingPrice.toLocaleString()}`}
                    </span>
                  </div>
               </div>

               <div className="flex justify-between items-end mb-8 pt-4 border-t-2 border-zinc-950/5">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] italic leading-none mb-1">Exchange Total</span>
                  <span className="text-3xl font-black text-zinc-950 tracking-tighter italic leading-none tabular-nums">₹{totalPrice.toLocaleString()}</span>
               </div>

               <div className="flex items-center gap-3 bg-zinc-50 p-4 rounded-3xl">
                  <ShieldCheck size={20} className="text-green-500" />
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest italic leading-relaxed text-left">
                    Fully Protected <br/> <span className="text-green-600/80">Full Payment Ritual Activated</span>
                  </p>
               </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;
