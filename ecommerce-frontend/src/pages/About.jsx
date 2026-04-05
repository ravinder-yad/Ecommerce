import React from 'react';
import AboutHero from '../components/About/AboutHero';
import BrandStory from '../components/About/BrandStory';
import MissionVision from '../components/About/MissionVision';
import StatsBar from '../components/About/StatsBar';
import TeamSection from '../components/About/TeamSection';
import AboutTestimonials from '../components/About/AboutTestimonials';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Brand Identity Intro */}
      <AboutHero />

      {/* 2. Mission & Vision Breakdown */}
      <MissionVision />

      {/* 3. Narrative Story Timeline */}
      <BrandStory />

      {/* 4. Strategic Proof (Stats) */}
      <StatsBar />

      {/* 5. The People Behind the Brand */}
      <TeamSection />

      {/* 6. Social Proof (Voices) */}
      <AboutTestimonials />

      {/* Final Call to Action Section */}
      <section className="py-32 bg-zinc-950 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-purple-600/5 blur-[120px] rounded-full translate-y-1/2"></div>
         <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter italic mb-12">
               Ready to Join <br/> <span className="text-purple-600 underline decoration-zinc-800 decoration-8 underline-offset-[12px]">Our Journey?</span>
            </h2>
            <button className="bg-white text-zinc-950 font-black px-16 py-6 rounded-[32px] hover:bg-purple-600 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-[10px] shadow-2xl active:scale-95">
               Start Shopping
            </button>
         </div>
      </section>
    </div>
  );
};

export default About;
