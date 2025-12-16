import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import FocusSection from './components/sections/FocusSection';
import BuildSmarter from './components/sections/BuildSmarter';
import Pricing from './components/sections/Pricing';
import DownloadSection from './components/sections/DownloadSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FocusSection />
        <BuildSmarter />
        <Pricing />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
