import ServiceHero from '@/components/service/ServiceHero';
import ContactFormSection from '@/components/sections/ContactFormSection';
import FAQSection from '@/components/sections/FAQSection';
import { servicesData } from '@/data/services';

export default function ContactUs() {
  const contactService = servicesData['contact'];

  return (
    <>
      <ServiceHero
        service={contactService}
      />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}
