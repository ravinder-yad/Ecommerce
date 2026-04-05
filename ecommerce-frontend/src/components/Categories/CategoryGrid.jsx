import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { 
    id: 1, 
    name: 'Mens Fashion', 
    slug: 'men', 
    image: 'https://images.unsplash.com/photo-1490578474895-6a9c96802ce6?q=80&w=2070&auto=format&fit=crop', 
    count: '1.2k', 
    description: 'Elevate your daily presence with the finest tailoring and essentials.',
    span: 'md:col-span-1 md:row-span-1 h-[400px]'
  },
  { 
    id: 2, 
    name: 'Electronics', 
    slug: 'electronics', 
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop', 
    count: '850', 
    description: 'High-performance gadgets for the modern visionary.',
    span: 'md:col-span-2 md:row-span-1 h-[400px]'
  },
  { 
    id: 3, 
    name: 'Jewelry & Watches', 
    slug: 'jewelry', 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop', 
    count: '1.5k', 
    description: 'Timepieces that define an era of sophistication.',
    span: 'md:col-span-1 md:row-span-2 h-full min-h-[400px]'
  },
  { 
    id: 4, 
    name: 'Womens Store', 
    slug: 'women', 
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop', 
    count: '2.3k', 
    description: 'Discover elegance and contemporary style curated for you.',
    span: 'md:col-span-2 md:row-span-1 h-[400px]'
  },
  { 
    id: 5, 
    name: 'Footwear', 
    slug: 'shoes', 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', 
    count: '920', 
    description: 'Engineered for comfort. Designed for the bold explorer.',
    span: 'md:col-span-1 md:row-span-1 h-[400px]'
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
