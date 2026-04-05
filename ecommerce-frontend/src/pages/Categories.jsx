import React from 'react';
import CategoryHeader from '../components/Categories/CategoryHeader';
import CategoryGrid from '../components/Categories/CategoryGrid';
import SubCategoryMiniList from '../components/Categories/SubCategoryMiniList';
import FeaturedCategorySection from '../components/Categories/FeaturedCategorySection';
import CategoryPromo from '../components/Categories/CategoryPromo';

const Categories = () => {
  return (
    <div className="bg-white">
      {/* 1. Header Section (Intro) */}
      <CategoryHeader />

      {/* 2. Sub-Category Quick Links (Discovery) */}
      <SubCategoryMiniList />

      {/* 3. Main Category Grid (Masonry Core) */}
      <CategoryGrid />

      {/* 4. Featured Category Section (Trending Showcase) */}
      <FeaturedCategorySection />

      {/* 5. Promo Banners (Conversion) */}
      <CategoryPromo />
    </div>
  );
};

export default Categories;
