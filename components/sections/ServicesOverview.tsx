import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

const featuredServices = [
  {
    title: 'Professional Book Writing',
    description: 'Transform your ideas into a captivating manuscript with our award-winning ghostwriting and collaborative writing services.',
    icon: 'FaPenNib',
    href: '/writing',
  },
  {
    title: 'Expert Book Editing',
    description: 'Polish your story to perfection with our comprehensive developmental, line, and copy editing services for any genre.',
    icon: 'FaEdit',
    href: '/editing',
  },
  {
    title: 'Stunning Book Design',
    description: 'Captivate readers with custom print and eBook covers and professional interior formatting that speaks volumes.',
    icon: 'FaPalette',
    href: '/design',
  },
  {
    title: 'Worldwide Publishing',
    description: 'Navigate global distribution with ease. We handle ISBN, Amazon KDP, IngramSpark, and distribution to major retailers.',
    icon: 'FaGlobe',
    href: '/publishing',
  },
  {
    title: 'High-Quality Printing',
    description: 'From short-run POD to bulk offset printing, we ensure your physical books are printed with premium quality and care.',
    icon: 'FaPrint',
    href: '/printing',
  },
  {
    title: 'Powerful Book Marketing',
    description: 'Build your fan base and drive sales through strategic launch campaigns, Amazon ads, and author branding services.',
    icon: 'FaRocket',
    href: '/marketing',
  },
  {
    title: 'Professional Audio Books',
    description: 'Expand your reach to billions of listeners with professional narration, studio recording, and global distribution on Audible.',
    icon: 'FaMicrophone',
    href: '/audio-book',
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-pad bg-gray-50/50">
      <div className="container-pad">
        <SectionHeading
          tag="Our Specialties"
          title="Everything You Need, All in One Place."
          subtitle="We offer a comprehensive suite of services to take your book from a rough draft to a global bestseller."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
