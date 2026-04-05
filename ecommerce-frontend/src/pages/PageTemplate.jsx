import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTemplate = ({ title }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-[60vh] flex flex-col items-center pt-20 pb-32 bg-zinc-50 px-8">
      <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mb-6 animate-bounce">
         <div className="w-10 h-10 bg-purple-600 rounded-xl"></div>
      </div>
      <h1 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter mb-2 italic">
        {title}
      </h1>
      <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-8">
        Coming Soon to ShopVerse
      </p>
      <div className="bg-white border border-zinc-200 rounded-2xl px-6 py-3 shadow-sm flex items-center gap-3">
         <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
         <code className="text-xs font-mono text-zinc-600 italic">Route: {location.pathname}</code>
      </div>
    </div>
  );
};

export default PageTemplate;
