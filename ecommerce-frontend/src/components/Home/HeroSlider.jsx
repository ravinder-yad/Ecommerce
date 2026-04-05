import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    title: 'Minimalist Premium Watch',
    subtitle: 'Luxury Experience',
    discount: 'UP TO 40% OFF',
    description: 'Elevate your style with our curated collection of sophisticated timepieces.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    title: 'Elite Athletic Gear',
    subtitle: 'Next-Gen Performance',
    discount: 'NEW ARRIVALS',
    description: 'Engineered for those who never stop moving. Discover our athletic collection.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    title: 'Wireless Audio Precision',
    subtitle: 'Immersive Sound',
    discount: 'LIMITED EDITION',
    description: 'Experience pure clarity with noise-cancelling technology and crystal clear highs.',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[450px] md:h-[650px] w-full overflow-hidden bg-zinc-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-8 md:px-16 h-full flex items-center">
            <div className="max-w-2xl text-left">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-purple-600 text-white text-[10px] md:text-xs font-black tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 uppercase"
              >
                {slides[current].discount}
              </motion.span>
              
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-purple-400 font-bold uppercase tracking-widest text-sm md:text-base mb-2"
              >
                {slides[current].subtitle}
              </motion.h4>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 uppercase italic tracking-tighter"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-zinc-400 text-sm md:text-lg mb-10 max-w-lg font-medium leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4"
              >
                <Link to="/shop" className="bg-white text-black font-black px-8 py-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
                  Discover Now
                </Link>
                <div className="border border-white/30 text-white font-black px-8 py-4 rounded-2xl hover:bg-white/10 transition-all cursor-pointer uppercase tracking-widest text-xs backdrop-blur-sm">
                  View Collection
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Control Buttons */}
      <div className="absolute bottom-8 right-8 md:right-16 flex gap-4 z-10">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-8 md:left-16 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? 'w-12 bg-purple-600' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
