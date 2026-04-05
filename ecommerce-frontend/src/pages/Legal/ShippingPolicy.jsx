import React from 'react';
import LegalTemplate from './LegalTemplate';

const ShippingPolicy = () => {
  return (
    <LegalTemplate title="Shipping Policy" lastUpdated="April 05, 2026">
      <div className="space-y-12 text-left">
        <section id="shipping-availability">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Availability</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            ShopVerse ships nationwide across India. Currently, we do not offer international shipping, but we are expanding rapidly. Stay tuned.
          </p>
        </section>

        <section id="processing-time">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Processing Time</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or public holidays.
          </p>
        </section>

        <section id="shipping-rates">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Shipping Rates</h2>
          <p className="text-zinc-500 font-medium leading-relaxed mb-4">
            Shipping charges for your order will be calculated and displayed at checkout.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-zinc-500 font-medium font-bold">
             <li>Standard Shipping (5-7 days): ₹99 (Free above ₹999)</li>
             <li>Express Shipping (2-3 days): ₹249</li>
          </ul>
        </section>

        <section id="shipment-confirmation">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Shipment Confirmation</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
          </p>
        </section>

        <section id="returns">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter italic mb-4">Returns</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            Please check our <a href="/returns-policy" className="text-purple-600 underline">Return Policy</a> for more information on how to return items.
          </p>
        </section>
      </div>
    </LegalTemplate>
  );
};

export default ShippingPolicy;
