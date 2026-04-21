import ServiceHero from '@/components/service/ServiceHero';

const policies = [
  {
    title: '1. Information Collection',
    content: 'We collect information you provide directly to us through forms, such as your name, email address, phone number, and manuscript details.',
  },
  {
    title: '2. Use of Information',
    content: 'We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your book projects.',
  },
  {
    title: '3. Data Security',
    content: 'We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.',
  },
  {
    title: '4. Manuscript Privacy',
    content: 'Your manuscript is your intellectual property. We treat all submissions with the strictness of confidentiality and do not share your work with third parties.',
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <ServiceHero 
        tag="Legal"
        title="Privacy Policy"
        subtitle="We value your privacy and are committed to protecting your personal information and intellectual property."
      />
      <section className="section-pad bg-white">
        <div className="container-pad max-w-4xl">
          <div className="prose prose-slate max-w-none">
            {policies.map((item, index) => (
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
