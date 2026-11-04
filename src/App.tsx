import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import ServicesMarquee from '@/components/sections/ServicesMarquee';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import WorkGallery from '@/components/sections/WorkGallery';
import QuoteForm from '@/components/sections/QuoteForm';

function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-50">
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <Services onSelectService={setSelectedService} />
        <Process />
        <WorkGallery />
        <QuoteForm service={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
