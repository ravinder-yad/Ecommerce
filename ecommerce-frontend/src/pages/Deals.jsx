import React from 'react';
import DealsHero from '../components/Deals/DealsHero';
import FlashSaleSection from '../components/Deals/FlashSaleSection';
import DailyDealCard from '../components/Deals/DailyDealCard';
import DealsGrid from '../components/Deals/DealsGrid';
import ComboOffers from '../components/Deals/ComboOffers';

const Deals = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Blast (70% OFF) */}
      <DealsHero />

      {/* 2. Flash Sale (Countdown Timer) */}
      <FlashSaleSection />

      {/* 3. Deal of the Day (Big Target) */}
      <DailyDealCard />

      {/* 4. Main Deals Grid (Infinite Scroll) */}
      <DealsGrid />

      {/* 5. Combo & BOGO Offers (Extra Push) */}
      <ComboOffers />
    </div>
  );
};

export default Deals;
