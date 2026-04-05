import React from 'react';
import ContactHero from '../components/About/AboutHero'; // Wait, I should use the new ContactHero!
import ContactHeroSection from '../components/Contact/ContactHero';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import MapSection from '../components/Contact/MapSection';
import FAQSection from '../components/Contact/FAQSection';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* 1. Introductory Hero */}
      <ContactHeroSection />

      {/* 2. Quick Contact Info Cards */}
      <ContactInfo />

      {/* 3. Main Interaction (Form + Map) */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
         <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <MapSection />
         </div>
      </section>

      {/* 4. Proactive Support (FAQs) */}
      <FAQSection />

      {/* 5. Final Encouragement */}
      <section className="py-32 bg-white text-center">
         <div className="container mx-auto px-8">
            <h2 className="text-4xl md:text-7xl font-black text-zinc-950 uppercase tracking-tighter italic mb-12">
               Still Have <br/> <span className="text-purple-600 underline decoration-zinc-100 decoration-8 underline-offset-[16px]">Questions?</span>
            </h2>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-16">Our specialists are standing by to help you 24 hours a day.</p>
            <button className="bg-zinc-950 text-white font-black px-16 py-7 rounded-[36px] hover:bg-purple-600 transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-2xl active:scale-95">
               Chat with Support
            </button>
         </div>
      </section>
    </div>
  );
};

export default Contact;
