import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  { id: 1, q: "What is the average delivery time?", a: "Most orders are delivered within 3-5 business days across major cities. Global shipping may take 7-10 days." },
  { id: 2, q: "Can I return a product after use?", a: "We offer a 7-day hassle-free return policy for unused products in their original packaging. Hygiene products are exempted." },
  { id: 3, q: "Do you offer international shipping?", a: "Yes, ShopVerse currently ships to over 50 countries worldwide with real-time tracking enabled." },
  { id: 4, q: "Is cash on delivery available?", a: "COD is available for orders up to ₹25,000. For higher amounts, we accept all major cards and secure online payments." },
];

const FAQAccordion = ({ faq, isOpen, toggle }) => {
  return (
    <div className={`border-b border-zinc-100 last:border-0 py-6 transition-all ${isOpen ? 'bg-zinc-50' : ''}`}>
       <button 
         onClick={toggle}
         className="w-full flex items-center justify-between text-left px-8 group focus:outline-none"
       >
          <span className={`text-sm md:text-base font-black uppercase italic tracking-tighter transition-colors ${isOpen ? 'text-purple-600' : 'text-zinc-950'} group-hover:text-purple-600`}>
             {faq.q}
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-purple-600 text-white' : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200'}`}>
             {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </div>
       </button>
       
       <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
               <div className="px-8 pt-4 pb-8">
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs leading-relaxed max-w-2xl">
                     {faq.a}
                  </p>
               </div>
            </motion.div>
          )}
       </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-8 md:px-16 text-center max-w-4xl">
         <div className="mb-16">
            <div className="w-16 h-16 bg-zinc-50 rounded-3xl flex items-center justify-center text-zinc-300 mx-auto mb-6">
               <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter uppercase italic leading-none mb-6">
               Common <span className="text-purple-600">Questions.</span>
            </h2>
            <p className="text-zinc-400 font-black uppercase tracking-widest text-[10px]">Everything you need to know before you shop.</p>
         </div>

         <div className="bg-white rounded-[48px] border border-zinc-100 overflow-hidden shadow-sm">
            {FAQS.map((faq) => (
              <FAQAccordion 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id} 
                toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQSection;
