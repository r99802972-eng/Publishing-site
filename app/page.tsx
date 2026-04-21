import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
