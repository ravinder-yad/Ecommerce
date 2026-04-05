import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Headset } from 'lucide-react';

const trustItems = [
  { icon: <Truck />, title: 'Free Delivery', desc: 'On all orders above ₹999' },
  { icon: <ShieldCheck />, title: 'Secure Payment', desc: '100% protected transactions' },
  { icon: <RefreshCcw />, title: 'Easy Returns', desc: '30-day hassle-free policy' },
  { icon: <Headset />, title: '24/7 Support', desc: 'Expert assistance anytime' },
];

const TrustBadgeBar = () => {
  return (
    <section className="py-20 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group cursor-default">
            <div className="w-16 h-16 bg-zinc-50 rounded-[20px] flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100 group-hover:shadow-xl group-hover:scale-110">
              {React.cloneElement(item.icon, { size: 28, strokeWidth: 2.5 })}
            </div>
            <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-1 italic">{item.title}</h4>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-tight">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadgeBar;
