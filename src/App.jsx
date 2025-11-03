import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Hero />
      <Features />
      <TechStack />
      <SocialProof />
    </div>
  );
}

export default App;
