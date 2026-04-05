import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const TEAM = [
  { id: 1, name: 'Vikram Singh', role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Ananya Rao', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, name: 'Rahul Verma', role: 'Lead Tech Architect', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'Sanya Malhotra', role: 'Global Curator', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop' },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16 text-left max-w-xl">
           <h4 className="text-purple-600 font-black uppercase tracking-widest text-xs mb-3 italic">The Dreamers</h4>
           <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter uppercase italic leading-none mb-6">
              Meet The <span className="text-zinc-300">Visionaries.</span>
           </h2>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
             Beyond every product is a person dedicated to excellence. Meet the core team driving the ShopVerse revolution.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {TEAM.map((member) => (
             <motion.div 
               key={member.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               whileHover={{ y: -8 }}
               className="group relative bg-zinc-50 border border-zinc-100 rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
             >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img src={member.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={member.name} />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute bottom-8 left-8 right-8 text-left transition-all group-hover:translate-y-[-10px]">
                   <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest leading-none mb-1 opacity-0 group-hover:opacity-100 transition-all">{member.role}</p>
                   <h3 className="text-xl font-black text-zinc-900 group-hover:text-white uppercase tracking-tighter italic transition-all">{member.name}</h3>
                </div>

                {/* Social Links Overlay */}
                <div className="absolute top-8 right-8 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-purple-600 transition-all cursor-pointer"><FaLinkedinIn size={16} /></div>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-rose-500 transition-all cursor-pointer"><FaInstagram size={16} /></div>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-zinc-900 transition-all cursor-pointer"><FaTwitter size={16} /></div>
                </div>

             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
