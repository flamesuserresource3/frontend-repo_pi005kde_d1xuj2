import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.12),transparent_60%)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.18),transparent_60%)] blur-3xl" />
      </div>

      <Hero />
      <Features />
      <TechStack />
      <SocialProof />
    </div>
  );
}

export default App;
