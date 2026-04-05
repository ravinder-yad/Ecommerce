import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Users, ShoppingBag, Globe, Award } from 'lucide-react';

const STATS = [
  { id: 1, label: 'Happy Customers', value: 12000, suffix: '+', icon: <Users size={24} /> },
  { id: 2, label: 'Premium Products', value: 850, suffix: '+', icon: <ShoppingBag size={24} /> },
  { id: 3, label: 'Global Cities', value: 45, suffix: '+', icon: <Globe size={24} /> },
  { id: 4, label: 'Quality Awards', value: 12, suffix: '', icon: <Award size={24} /> },
];

const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      const totalSteps = duration * 60;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const StatsBar = () => {
  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
           {STATS.map((stat) => (
             <motion.div 
               key={stat.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center group"
             >
                <div className="w-16 h-16 bg-zinc-50 rounded-[28px] mx-auto flex items-center justify-center text-zinc-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl mb-6">
                   {stat.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-zinc-950 italic tracking-tighter mb-2 leading-none uppercase">
                   <Counter target={stat.value} />{stat.suffix}
                </h4>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{stat.label}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
