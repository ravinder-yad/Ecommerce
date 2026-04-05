import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, CheckCircle2 } from 'lucide-react';

const SIZE_DATA = {
  Men: [
    { size: 'S', chest: '36-38"', waist: '28-30"', sleeve: '32-33"' },
    { size: 'M', chest: '39-41"', waist: '31-33"', sleeve: '33-34"' },
    { size: 'L', chest: '42-44"', waist: '34-36"', sleeve: '34-35"' },
    { size: 'XL', chest: '45-47"', waist: '37-39"', sleeve: '35-36"' },
    { size: 'XXL', chest: '48-50"', waist: '40-42"', sleeve: '36-37"' },
  ],
  Women: [
    { size: 'XS', bust: '31-32"', waist: '24-25"', hips: '34-35"' },
    { size: 'S', bust: '33-34"', waist: '26-27"', hips: '36-37"' },
    { size: 'M', bust: '35-36"', waist: '28-29"', hips: '38-39"' },
    { size: 'L', bust: '37-39"', waist: '30-32"', hips: '40-42"' },
    { size: 'XL', bust: '40-42"', waist: '33-35"', hips: '43-45"' },
  ]
};

const SizeGuide = () => {
  const [activeTab, setActiveTab] = useState('Men');

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
           <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Support Hub</h4>
           <h1 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-6">
              Precision <span className="text-purple-600">Sizing.</span>
           </h1>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
             Luxury is all about the perfect fit. Use our master guide to find your signature silhouette.
           </p>
        </div>

        {/* Dynamic Tabs */}
        <div className="max-w-4xl mx-auto mt-20">
           <div className="flex justify-center gap-4 mb-16 p-2 bg-zinc-50 border border-zinc-100 rounded-[32px] w-fit mx-auto shadow-sm">
              {['Men', 'Women'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-4 rounded-[24px] uppercase tracking-widest text-[10px] font-black transition-all ${
                    activeTab === tab 
                    ? 'bg-zinc-950 text-white shadow-xl scale-105' 
                    : 'text-zinc-400 hover:text-zinc-600'
                  }`}
                >
                  {tab} Fashion
                </button>
              ))}
           </div>

           {/* Table Component */}
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="bg-white border border-zinc-100 rounded-[48px] overflow-hidden shadow-2xl"
             >
                <div className="overflow-x-auto text-left">
                   <table className="w-full">
                      <thead>
                         <tr className="bg-zinc-50 border-b border-zinc-100">
                            <th className="px-10 py-8 text-[11px] font-black text-zinc-950 uppercase tracking-widest italic italic">Size</th>
                            {Object.keys(SIZE_DATA[activeTab][0]).filter(k => k !== 'size').map(key => (
                              <th key={key} className="px-10 py-8 text-[11px] font-black text-zinc-950 uppercase tracking-widest italic italic">{key}</th>
                            ))}
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100">
                         {SIZE_DATA[activeTab].map((row, idx) => (
                           <tr key={idx} className="hover:bg-purple-50/30 transition-colors group">
                              <td className="px-10 py-6 text-sm font-black text-purple-600 transition-all group-hover:scale-110">{row.size}</td>
                              {Object.entries(row).filter(([k]) => k !== 'size').map(([k, v]) => (
                                <td key={k} className="px-10 py-6 text-sm font-bold text-zinc-500 uppercase tracking-wider">{v}</td>
                              ))}
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </motion.div>
           </AnimatePresence>

           {/* Pro Tip */}
           <div className="mt-20 flex flex-col md:flex-row gap-12 items-center bg-zinc-50 border border-zinc-100 p-10 rounded-[40px] text-left">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-purple-600 shadow-xl self-start md:self-center">
                 <Ruler size={32} />
              </div>
              <div>
                 <h4 className="text-xl font-black text-zinc-950 uppercase italic tracking-tighter mb-2">Signature Fit Advice</h4>
                 <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-xl">
                    Our designs are tailored for a modern, slim fit. If you prefer a more relaxed silhouette, we recommend sizing up. For high-performance gear, stick to your standard measurements for optimal compression.
                 </p>
              </div>
              <div className="flex flex-col gap-2">
                 {['Worldwide Sizing', 'Slim Fit Profile', 'Quality Checked'].map(t => (
                   <div key={t} className="flex items-center gap-2 text-[10px] font-black text-zinc-950 uppercase tracking-widest">
                      <CheckCircle2 size={14} className="text-purple-600" /> {t}
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SizeGuide;
