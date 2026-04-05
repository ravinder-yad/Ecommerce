import React from 'react';
import LegalTemplate from './LegalTemplate';

const TermsOfService = () => {
  return (
    <LegalTemplate title="Terms Of Service" lastUpdated="April 05, 2026">
      <div className="space-y-12 text-left">
        <section id="introduction">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Agreement To Terms</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            By accessing or using ShopVerse, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section id="user-license">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">User License</h2>
          <p className="text-zinc-500 font-medium leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on ShopVerse's website for personal, non-commercial transitory viewing only.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-zinc-500 font-medium font-bold">
             <li>Modify or copy the materials.</li>
             <li>Use the materials for any commercial purpose.</li>
             <li>Attempt to decompile or reverse engineer any software.</li>
             <li>Remove any copyright or other proprietary notations.</li>
          </ul>
        </section>

        <section id="governing-law">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Governing Law</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            Any claim relating to ShopVerse's website shall be governed by the laws of India without regard to its conflict of law provisions.
          </p>
        </section>

        <section id="disclaimer">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Disclaimer</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            The materials on ShopVerse's website are provided on an 'as is' basis. ShopVerse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section id="contact-us">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Contact Us</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            If you have any questions or comments about these terms, you may email us at legal@shopverse.com.
          </p>
        </section>
      </div>
    </LegalTemplate>
  );
};

export default TermsOfService;
