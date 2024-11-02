import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;