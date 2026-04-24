import ServiceHero from '@/components/service/ServiceHero';
import ProcessSteps from '@/components/why-us/ProcessSteps';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ClientLogos from '@/components/sections/ClientLogos';
import SplitIntroSection from '@/components/sections/SplitIntroSection';
import PublishingPathSection from '@/components/sections/PublishingPathSection';
import ContactStrip from '@/components/sections/ContactStrip';
import FAQSection from '@/components/sections/FAQSection';
import { servicesData } from '@/data/services';

export default function WhyUs() {
  const aboutService = servicesData['about'];

  return (
    <>
      <ServiceHero
        service={aboutService}
      />
      <ClientLogos />
      <SplitIntroSection />
      <StatsSection />
      <PublishingPathSection />
      <ContactStrip/>
      <FAQSection/>
      <ContactFormSection />
    </>
  );
}
