import React from 'react';
import LegalTemplate from './LegalTemplate';

const ReturnPolicy = () => {
  return (
    <LegalTemplate title="Return & Refund" lastUpdated="April 05, 2026">
      <div className="space-y-12 text-left">
        <section id="return-eligibility">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Eligibility</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-zinc-500 font-medium font-bold">
             <li>Item must be in original condition.</li>
             <li>Original packaging and tags must be intact.</li>
             <li>No signs of wear, usage, or damage.</li>
          </ul>
        </section>

        <section id="starting-return">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Starting A Return</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            To start a return, you can contact us at returns@shopverse.com. If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package.
          </p>
        </section>

        <section id="damages-issues">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Damages & Issues</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
          </p>
        </section>

        <section id="refunds">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Refunds</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days.
          </p>
        </section>

        <section id="excharges">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Exchanges</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
          </p>
        </section>
      </div>
    </LegalTemplate>
  );
};

export default ReturnPolicy;
