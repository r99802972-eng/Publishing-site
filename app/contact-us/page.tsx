import ServiceHero from '@/components/service/ServiceHero';
import ContactFormSection from '@/components/sections/ContactFormSection';
import FAQSection from '@/components/sections/FAQSection';

export default function ContactUs() {
  return (
    <>
      <ServiceHero 
        tag="Contact Us"
        title="Let's Start Your Publishing Journey."
        subtitle="Have questions about our services or ready to submit your manuscript? Reach out to our team of experts and we'll help you get started."
      />
      <div className="py-12 bg-gray-50/30">
        <ContactFormSection />
      </div>
      <FAQSection />
    </>
  );
}
