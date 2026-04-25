import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceSubCards from '@/components/service/ServiceSubCards';
import ServiceWorkflow from '@/components/service/ServiceWorkflow';
import ClientLogos from '@/components/sections/ClientLogos';
import FAQSection from '@/components/sections/FAQSection';
import ContactStrip from '@/components/sections/ContactStrip';
import ContactFormSection from '@/components/sections/ContactFormSection';

interface PageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = servicesData[serviceSlug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero 
        service={service}
      />
      <ClientLogos />
      <ServiceSubCards 
        items={service.subServices} 
        serviceName={service.cardsTitle} 
      />
      <ServiceWorkflow 
        serviceName={service.workflowTitle} 
        prefix={service.workflowPrefix}
        steps={service.workflowSteps} 
      />
      <ContactStrip />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
