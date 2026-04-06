import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderTimeline = ({ status }) => {
  const steps = [
    { id: 'Processing', icon: <Package size={14} />, label: 'Order Placed' },
    { id: 'Shipped', icon: <Truck size={14} />, label: 'Out for Delivery' },
    { id: 'Delivered', icon: <CheckCircle size={14} />, label: 'Delivered' },
  ];

  const currentIdx = steps.findIndex(step => step.id === status);

  return (
    <div className="py-8 px-4">
      <div className="relative flex justify-between">
        {/* Progress Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-100 -translate-y-1/2 z-0"></div>
        
        {/* Active Progress Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(currentIdx / (steps.length - 1)) * 100}%` }}
          className="absolute top-1/2 left-0 h-[2px] bg-purple-600 -translate-y-1/2 z-0"
        ></motion.div>

        {steps.map((step, index) => {
          const isActive = index <= currentIdx;
          const isCurrent = index === currentIdx;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
              <motion.div 
                initial={false}
                animate={{ 
                  backgroundColor: isActive ? '#9333ea' : '#f4f4f5',
                  scale: isCurrent ? 1.2 : 1,
                  boxShadow: isCurrent ? '0 0 20px rgba(147, 51, 234, 0.3)' : 'none'
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? 'text-white' : 'text-zinc-300'}`}
              >
                {step.icon}
              </motion.div>
              <div className="text-center">
                <p className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`}>
                   {step.label}
                </p>
                {isCurrent && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[8px] font-bold text-purple-600 uppercase tracking-tighter"
                  >
                    Current Status
                  </motion.p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;
