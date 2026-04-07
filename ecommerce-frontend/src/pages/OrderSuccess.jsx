import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, CheckCircle2, Package, Sparkles, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import confetti from 'canvas-confetti';

const OrderSuccess = () => {
  const { order } = useSelector((state) => state.orders);
  const navigate = useNavigate();

  useEffect(() => {
    // Fire confetti for the luxury celebration
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ['#9333ea', '#ffffff']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ['#9333ea', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden relative">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Message & Celebration */}
            <div className="text-left">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-24 bg-purple-600 rounded-[32px] flex items-center justify-center text-white mb-10 shadow-2xl shadow-purple-200"
              >
                <CheckCircle2 size={48} strokeWidth={1.5} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-purple-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
                  <Sparkles size={14} /> Transaction Finalized
                </h4>
                <h1 className="text-6xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-[0.9] mb-10">
                  Full Payment <br/> <span className="text-purple-600 underline decoration-zinc-100 decoration-8 underline-offset-[12px]">Received.</span>
                </h1>

                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[11px] mb-12 max-w-sm leading-relaxed italic">
                  Your luxury selections have been successfully processed through our secure vault. A high-priority courier has been dispatched.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    to="/orders"
                    className="w-full sm:w-auto flex items-center justify-center gap-4 bg-zinc-950 text-white font-black px-10 py-5 rounded-[28px] hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px] shadow-2xl active:scale-95 group"
                  >
                    Track Treasury <Package size={16} />
                  </Link>
                  <Link 
                    to="/shop"
                    className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white border-2 border-zinc-100 text-zinc-400 font-black px-10 py-5 rounded-[28px] hover:border-zinc-950 hover:text-zinc-950 transition-all uppercase tracking-widest text-[10px] active:scale-95 group"
                  >
                    Return To Gallery <ShoppingBag size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Digital Receipt Card */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="bg-white rounded-[48px] border border-zinc-100 p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group"
            >
               {/* PAID Stamp Overlay */}
               <div className="absolute top-10 right-10 rotate-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="border-8 border-green-500 text-green-500 p-4 font-black text-6xl uppercase tracking-widest rounded-3xl">PAID</div>
               </div>

               <div className="text-left">
                  <div className="flex justify-between items-start mb-10 border-b border-zinc-50 pb-8">
                     <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 italic">Registry Status</p>
                        <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm border border-green-100 italic">
                           Full Payment Success <CheckCircle2 size={12} />
                        </span>
                     </div>
                     <Landmark size={40} className="text-zinc-100" />
                  </div>

                  <div className="space-y-6 mb-12">
                     <div className="flex justify-between items-center text-left">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Registry ID</span>
                        <span className="text-[10px] font-black text-zinc-950 tracking-[0.2em] font-mono leading-none uppercase">{order?._id || 'T-RE-0000'}</span>
                     </div>
                     <div className="flex justify-between items-center text-left">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Transaction Date</span>
                        <span className="text-[10px] font-black text-zinc-950 tracking-widest leading-none uppercase">{new Date().toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                     </div>
                     <div className="flex justify-between items-center text-left">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Vault Exchange</span>
                        <span className="text-[10px] font-black text-zinc-950 leading-none uppercase italic">₹{order?.totalPrice.toLocaleString() || '0.00'}</span>
                     </div>
                  </div>

                  <div className="bg-zinc-50 rounded-3xl p-6 mb-10 border border-zinc-100 flex items-center justify-between group-hover:bg-purple-50 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-sm border border-zinc-50">
                           <ShieldCheck size={20} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest mb-1 italic">Secured Ritual</p>
                           <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest italic leading-none">Authentication Complete</p>
                        </div>
                     </div>
                     <Download size={18} className="text-zinc-300 hover:text-purple-600 cursor-pointer transition-colors" />
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:text-purple-600 transition-colors group/link">
                     View Complete Ledger Details <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
               </div>

               {/* Design Detail */}
               <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 animate-gradient-x"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
