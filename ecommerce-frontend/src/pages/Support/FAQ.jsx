import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, CreditCard, ShoppingBag, Truck, RotateCcw } from 'lucide-react';

const FAQ_DATA = [
  {
    category: 'Orders & Shipping',
    icon: <Truck size={20} />,
    questions: [
      { q: 'How can I track my order?', a: 'Once your order is shipped, you will receive a tracking ID via email. You can also visit our Track Order page and enter your ID to see live updates.' },
      { q: 'What are the shipping charges?', a: 'We offer free delivery on all orders above ₹999. For orders below that, a standard shipping fee of ₹99 applies.' },
      { q: 'Do you ship internationally?', a: 'Currently, ShopVerse only ships across India. We are planning to expand to international markets soon.' },
    ]
  },
  {
    category: 'Returns & Refunds',
    icon: <RotateCcw size={20} />,
    questions: [
      { q: 'What is your return policy?', a: 'We have a 30-day "no questions asked" return policy. The item must be unused and in its original packaging with tags intact.' },
      { q: 'How long does a refund take?', a: 'Once we receive and inspect your return, the refund is processed within 5-7 business days to your original payment method.' },
      { q: 'Can I exchange my item?', a: 'Yes, exchanges are available for different sizes. Please contact our support team within 7 days of delivery.' },
    ]
  },
  {
    category: 'Payments & Security',
    icon: <CreditCard size={20} />,
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept all major Credit/Debit cards, UPI, Net Banking, and popular wallets. COD is also available in select pin codes.' },
      { q: 'Is my payment information secure?', a: 'Absolutely. We use 256-bit SSL encryption and comply with PCI-DSS standards to ensure your data is 100% safe.' },
    ]
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
           <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Support Hub</h4>
           <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase italic leading-none mb-6">
              Frequently Asked <span className="text-purple-600">Questions.</span>
           </h1>
           
           {/* Search FAQ */}
           <div className="relative mt-12 max-w-xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
              <input 
                type="text" 
                placeholder="Search for a topic..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-[32px] pl-16 pr-8 py-5 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all shadow-sm uppercase tracking-widest"
              />
           </div>
        </div>

        {/* FAQ Categories & Questions */}
        <div className="max-w-4xl mx-auto space-y-20 mt-24">
           {FAQ_DATA.map((cat, catIdx) => (
             <div key={catIdx} className="text-left">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shadow-sm">
                      {cat.icon}
                   </div>
                   <h3 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tighter">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                   {cat.questions.map((item, qIdx) => {
                     const globalIdx = `${catIdx}-${qIdx}`;
                     const isOpen = openIndex === globalIdx;
                     
                     return (
                       <motion.div 
                         key={qIdx}
                         className={`border border-zinc-100 rounded-[28px] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-zinc-50 shadow-xl' : 'bg-white'}`}
                       >
                          <button 
                            onClick={() => toggle(globalIdx)}
                            className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                          >
                             <span className={`text-sm md:text-lg font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-purple-600' : 'text-zinc-800'}`}>
                                {item.q}
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
                                  <div className="p-8 pt-0 text-zinc-500 font-medium leading-relaxed text-sm md:text-md">
                                     <div className="border-t border-zinc-200 pt-6">
                                        {item.a}
                                     </div>
                                  </div>
                               </motion.div>
                             )}
                          </AnimatePresence>
                       </motion.div>
                     );
                   })}
                </div>
             </div>
           ))}
        </div>

        {/* Support CTA */}
        <div className="mt-32 p-12 bg-zinc-950 rounded-[48px] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
           <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-6 relative z-10">Still Have Questions?</h2>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-10 relative z-10">Our luxury concierge team is available 24/7 to assist you.</p>
           <button className="bg-purple-600 text-white font-black px-12 py-5 rounded-[24px] hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[10px] relative z-10 shadow-2xl">
              Talk To An Expert
           </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
