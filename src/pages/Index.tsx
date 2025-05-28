
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import PartnersSection from '@/components/PartnersSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
