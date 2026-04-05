import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop Collections', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'Flash Deals', path: '/deals' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const supportLinks = [
    { name: 'Order Tracking', path: '/track-order' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Easy Returns', path: '/return-policy' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'FAQ', path: '/faq' },
  ];

  const legalLinks = [
    { name: 'Privacy', path: '/privacy-policy' },
    { name: 'Terms', path: '/terms-of-service' },
    { name: 'Cookies', path: '/privacy-policy#cookies' },
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-20 pb-10 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center group cursor-pointer mb-8">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-900/20">SV</div>
              <h2 className="text-xl font-black tracking-tight text-white ml-3 uppercase italic">ShopVerse</h2>
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed mb-8 max-w-xs uppercase text-xs tracking-wider">
               Curating high-performance gear and luxury essentials for the modern lifestyle explorer.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all cursor-pointer">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 italic">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-zinc-500 hover:text-purple-400 font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-purple-500 group-hover:scale-125 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Hub */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 italic">Support Hub</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-zinc-500 hover:text-purple-400 font-bold uppercase text-[11px] tracking-widest transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-purple-500 group-hover:scale-125 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 italic">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-zinc-800/50 p-3 rounded-xl text-purple-500"><FaMapMarkerAlt size={16} /></div>
                <div>
                   <p className="text-zinc-500 text-[10px] uppercase font-black mb-1">Corporate Office</p>
                   <p className="text-white text-xs font-bold leading-relaxed">ShopVerse Towers, Tech Park, <br/>Mumbai, MH 400001</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-zinc-800/50 p-3 rounded-xl text-purple-500"><FaPhoneAlt size={16} /></div>
                <div>
                   <p className="text-zinc-500 text-[10px] uppercase font-black mb-1">Call Center</p>
                   <p className="text-white text-xs font-bold leading-relaxed">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-zinc-800/50 p-3 rounded-xl text-purple-500"><FaEnvelope size={16} /></div>
                <div>
                   <p className="text-zinc-500 text-[10px] uppercase font-black mb-1">Email Support</p>
                   <p className="text-white text-xs font-bold leading-relaxed">hello@shopverse.com</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="border-t border-zinc-800 pt-12 text-center">
           <div className="max-w-xl mx-auto mb-16">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-4">Elite Newsletter</h3>
              <p className="text-zinc-500 text-[11px] uppercase tracking-[0.2em] mb-8 font-black">Subscribe for secret deals & new collections</p>
              <form className="flex p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-3xl backdrop-blur-md">
                 <input 
                  type="email" 
                  placeholder="name@luxury.com" 
                  className="bg-transparent border-none outline-none flex-1 px-4 text-white text-xs font-bold tracking-widest"
                 />
                 <button className="bg-purple-600 hover:bg-purple-700 text-white font-black px-8 py-4 rounded-2xl transition-all uppercase tracking-widest text-[10px]">
                   Subscribe Now
                 </button>
              </form>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
              <p>© 2026 ShopVerse – All Rights Reserved</p>
              <div className="flex gap-8">
                 {legalLinks.map((link) => (
                   <Link key={link.name} to={link.path} className="hover:text-zinc-400 cursor-pointer">
                      {link.name}
                   </Link>
                 ))}
              </div>
              <div className="bg-zinc-800 px-6 py-2 rounded-full border border-zinc-700">Powered by Next-Gen AI</div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
