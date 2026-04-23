import HeroSection from '@/components/sections/HeroSection';
import ClientLogos from '@/components/sections/ClientLogos';
import SplitIntroSection from '@/components/sections/SplitIntroSection';
import PublishingPathSection from '@/components/sections/PublishingPathSection';
import ContactStrip from '@/components/sections/ContactStrip';
import OrangeBannerSection from '@/components/sections/OrangeBannerSection';
import BookDesignSection from '@/components/sections/BookDesignSection';
import DarkSuccessSection from '@/components/sections/DarkSuccessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <SplitIntroSection />
      <PublishingPathSection />
      <ContactStrip />
      <OrangeBannerSection />
      <BookDesignSection />
      <DarkSuccessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
