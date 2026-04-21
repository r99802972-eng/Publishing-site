import ServiceHero from '@/components/service/ServiceHero';

const terms = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
  },
  {
    title: '2. Use License',
    content: 'Permission is granted to temporarily download one copy of the materials on Benjamin Publishers website for personal, non-commercial transitory viewing only.',
  },
  {
    title: '3. Authorship & Rights',
    content: 'Benjamin Publishers is a service provider. Authors retain 100% of their intellectual property rights. We do not claim ownership of any manuscript submitted for editing, design, or publishing services.',
  },
  {
    title: '4. Disclaimer',
    content: 'The materials on Benjamin Publishers website are provided on an "as is" basis. Benjamin Publishers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.',
  },
];

export default function TermsConditions() {
  return (
    <>
      <ServiceHero 
        tag="Legal"
        title="Terms & Conditions"
        subtitle="Please review our terms of service carefully. These terms govern your use of our website and services."
      />
      <section className="section-pad bg-white">
        <div className="container-pad max-w-4xl">
          <div className="prose prose-slate max-w-none">
            {terms.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-xl font-bold font-serif text-[#1A1A2E] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
