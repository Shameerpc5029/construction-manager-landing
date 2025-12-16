import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import FocusSection from './components/sections/FocusSection';
import BuildSmarter from './components/sections/BuildSmarter';
import Pricing from './components/sections/Pricing';
import DownloadSection from './components/sections/DownloadSection';
import Footer from './components/sections/Footer';
import LoadingScreen from './components/layout/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imageModules = import.meta.glob('./assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });
        const imageUrls = Object.values(imageModules).map((module) => module.default);

        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        // Minimum loading time for smooth transition
        await new Promise(resolve => setTimeout(resolve, 1500));
      } catch (error) {
        console.error("Failed to preload images", error);
      } finally {
        setLoading(false);
      }
    };

    preloadImages();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20 selection:text-primary animate-in fade-in duration-700">
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
