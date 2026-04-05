import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const CONTACT_METHODS = [
  { id: 1, title: 'Call Center', info: '+91 9988 7766 55', sub: 'Mon - Fri, 9am - 6pm', icon: <Phone size={24} />, color: 'bg-emerald-50 text-emerald-600' },
  { id: 2, title: 'Direct Email', info: 'support@shopverse.com', sub: '24/7 Response Time', icon: <Mail size={24} />, color: 'bg-purple-50 text-purple-600' },
  { id: 3, title: 'Headquarters', info: 'Cyber City, Gurugram', sub: 'Haryana, India 122002', icon: <MapPin size={24} />, color: 'bg-rose-50 text-rose-600' },
  { id: 4, title: 'Live Chat', info: 'Active Status: Online', sub: 'Average wait: 2 mins', icon: <Clock size={24} />, color: 'bg-sky-50 text-sky-600' },
];

const ContactInfo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CONTACT_METHODS.map((method) => (
          <motion.div 
            key={method.id}
            whileHover={{ y: -8 }}
            className="p-10 rounded-[48px] bg-white border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-left group"
          >
             <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center mb-10 transition-all group-hover:scale-110 shadow-sm ${method.color}`}>
                {method.icon}
             </div>
             
             <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">{method.title}</h4>
             <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tighter italic leading-tight mb-4">{method.info}</h3>
             <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{method.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
