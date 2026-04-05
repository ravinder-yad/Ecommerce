import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We will get back to you soon.', {
        style: {
          borderRadius: '20px',
          background: '#09090b',
          color: '#fff',
          fontSize: '12px',
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-12 md:p-20 rounded-[64px] border border-zinc-100 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter italic mb-12">
           Send A <span className="text-purple-600">Message.</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Full Name</label>
                 <input 
                   type="text" 
                   required
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   placeholder="e.g. Vikram Singh"
                   className="w-full bg-zinc-50 border border-zinc-100 rounded-[28px] px-8 py-5 text-xs font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Email Address</label>
                 <input 
                   type="email" 
                   required
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                   placeholder="vikram@shopverse.com"
                   className="w-full bg-zinc-50 border border-zinc-100 rounded-[28px] px-8 py-5 text-xs font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
                 />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Subject</label>
              <input 
                type="text" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="Product Inquiry / General Feedback / Help"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-[28px] px-8 py-5 text-xs font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
              />
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Your Message</label>
              <textarea 
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us how we can help..."
                className="w-full bg-zinc-50 border border-zinc-100 rounded-[32px] px-8 py-6 text-xs font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm resize-none"
              ></textarea>
           </div>

           <button 
             type="submit"
             disabled={isSubmitting}
             className={`w-full bg-zinc-950 text-white font-black py-6 rounded-[32px] uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all flex items-center justify-center gap-4 group active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'}`}
           >
              {isSubmitting ? (
                <>Processing <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"></motion.div></>
              ) : (
                <>Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
           </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
