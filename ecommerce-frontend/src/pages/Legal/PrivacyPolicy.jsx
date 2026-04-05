import React from 'react';
import LegalTemplate from './LegalTemplate';

const PrivacyPolicy = () => {
  return (
    <LegalTemplate title="Privacy Policy" lastUpdated="April 05, 2026">
      <div className="space-y-12 text-left">
        <section id="introduction">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Introduction</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            Welcome to ShopVerse. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@shopverse.com.
          </p>
        </section>

        <section id="information-collection">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Information Collection</h2>
          <p className="text-zinc-500 font-medium leading-relaxed mb-4">
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-zinc-500 font-medium">
             <li>Personal Data (Name, Email, Phone Number)</li>
             <li>Payment Information (Credit Card details processed securely)</li>
             <li>Order History and Preferences</li>
          </ul>
        </section>

        <section id="usage-policy">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Usage Policy</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
        </section>

        <section id="security-measure">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Security Measure</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>
        </section>

        <section id="contact-us">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Contact Us</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            If you have any questions or comments about this policy, you may email us at privacy@shopverse.com or by post to ShopVerse Towers, Tech Park, Mumbai, MH 400001.
          </p>
        </section>
      </div>
    </LegalTemplate>
  );
};

export default PrivacyPolicy;
