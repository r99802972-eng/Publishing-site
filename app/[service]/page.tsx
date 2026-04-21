import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceSubCards from '@/components/service/ServiceSubCards';
import FAQSection from '@/components/sections/FAQSection';
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
        tag={service.heroTag}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
      />
      <ServiceSubCards items={service.subServices} />
      {/* 
        We could add page-specific sections here if needed, 
        but the site structure keeps them quite generic. 
      */}
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
