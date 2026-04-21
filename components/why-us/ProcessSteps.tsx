import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Submit Your Story',
    description: "Share your manuscript or book idea with us. Our team reviews your concept and provides a tailored strategy for your literary journey.",
  },
  {
    number: '02',
    title: 'Edit, Refine & Perfect',
    description: "Our professional editors work closely with you to polish your prose, improve structure, and ensure your message resonates with readers.",
  },
  {
    number: '03',
    title: 'Design That Speaks Volumes',
    description: "Our designers craft a custom cover and professional interior layout that captures your vision and stands out on bookshelves.",
  },
  {
    number: '04',
    title: 'Publish & Share',
    description: "We handle the technical setup for global distribution, making your book available on Amazon, Barnes & Noble, and more.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading
          tag="Our Process"
          title="The Publishing Path, Simplified."
          subtitle="We walk you through every step of the journey, ensuring a professional result without the stress."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-[#C8A96E]/5 transition-all duration-500">
              <span className="text-5xl font-bold font-serif text-[#C8A96E]/20 absolute top-4 right-6 leading-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold font-serif text-[#1A1A2E] mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
