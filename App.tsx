import React, { useState } from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero, About, Services, History, Testimonials } from './components/SectionComponents';
import { Blog, Contact, LeadMagnet } from './components/SmartFeatures';

const App: React.FC = () => {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} />
        <About />
        <Services />
        <Testimonials />
        <History />
        <Blog />
        <Contact />
      </main>

      <Footer />
      
      <LeadMagnet 
        isOpen={isLeadMagnetOpen} 
        onClose={() => setIsLeadMagnetOpen(false)} 
      />
    </div>
  );
};

export default App;
