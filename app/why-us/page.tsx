import ServiceHero from '@/components/service/ServiceHero';
import ProcessSteps from '@/components/why-us/ProcessSteps';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function WhyUs() {
  return (
    <>
      <ServiceHero 
        tag="About Us"
        title="Your Story deserves to be Remarkable."
        subtitle="At Benjamin Publishers, we believe every author has a powerful story to tell. Our mission is to provide the expert tools and support needed to turn those stories into professional, published works of art."
      />
      <ProcessSteps />
      <StatsSection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
}
