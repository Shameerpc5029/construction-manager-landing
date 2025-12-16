import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import FocusSection from './components/sections/FocusSection';
import Pricing from './components/sections/Pricing';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FocusSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
