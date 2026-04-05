import React from 'react';
import { motion } from 'framer-motion';

const LegalTemplate = ({ title, lastUpdated, children }) => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-zinc-100 pb-12">
           <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-left">Legal & Compliance</h4>
           <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-tight mb-6 text-left">
              {title}
           </h1>
           <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-[9px]">Last Updated: {lastUpdated}</p>
           </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           
           {/* Sidebar Navigation (Optional for longer documents) */}
           <div className="hidden lg:block lg:col-span-3 space-y-6">
              <div className="sticky top-32">
                 <h5 className="text-zinc-900 font-black uppercase tracking-widest text-[10px] mb-6">Quick Jump</h5>
                 <ul className="space-y-4">
                    {['Introduction', 'Information Collection', 'Usage Policy', 'Security Measure', 'Contact Us'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                          className="text-zinc-400 hover:text-purple-600 font-bold uppercase text-[9px] tracking-widest transition-colors flex items-center gap-3 group"
                        >
                          <span className="w-1 h-1 bg-zinc-200 rounded-full group-hover:bg-purple-600 group-hover:scale-150 transition-all"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Main Legal Text */}
           <div className="lg:col-span-9 max-w-3xl">
              <div className="prose prose-zinc prose-invert max-w-none">
                 {children}
              </div>
              
              {/* Footer Note */}
              <div className="mt-20 p-10 bg-zinc-50 rounded-[32px] border border-zinc-100 text-left">
                 <h4 className="text-zinc-950 font-black uppercase tracking-widest text-xs mb-4 italic">Have questions?</h4>
                 <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8">
                    If you have any questions regarding these terms, please feel free to reach out to our legal department.
                 </p>
                 <button className="bg-zinc-900 text-white font-black px-8 py-4 rounded-2xl hover:bg-purple-600 transition-all uppercase tracking-widest text-[10px]">
                   Contact Legal Team
                 </button>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default LegalTemplate;
