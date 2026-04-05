import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[64px] border border-zinc-100 overflow-hidden shadow-2xl h-full flex flex-col group relative"
    >
      <div className="absolute top-8 left-8 z-10 flex flex-col gap-4">
         <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 shadow-xl flex items-center gap-4 group-hover:scale-105 transition-all">
            <div className="w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center text-white">
               <MapPin size={18} />
            </div>
            <div>
               <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Office Hub</p>
               <h4 className="text-sm font-black text-zinc-950 uppercase italic tracking-tighter">Cyber City, GGN</h4>
            </div>
         </div>
      </div>
      
      {/* Map Embed (Placeholder for real Google Maps) */}
      <div className="w-full flex-grow relative bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112182.26126601445!2d76.963502353198!3d28.459953331002347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e18576%3A0x633e6f9d3bdf86d7!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712169542158!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           className="w-full h-full min-h-[400px]"
         ></iframe>
      </div>

      <div className="p-10 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
         <div className="text-left">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Navigation Status</p>
            <h4 className="text-xs font-black text-zinc-950 uppercase italic tracking-tighter">Real-time Location Active</h4>
         </div>
         <button className="bg-zinc-950 text-white p-4 rounded-2xl hover:bg-purple-600 transition-all shadow-xl group-hover:scale-110 active:scale-95">
            <Navigation size={18} fill="currentColor" />
         </button>
      </div>
    </motion.div>
  );
};

export default MapSection;
