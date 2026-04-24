import ServiceHero from '@/components/service/ServiceHero';

const sections = [
  {
    id: 'introduction',
    title: 'INTRODUCTION',
    content: 'At Northcrest Publishers, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our website, staff, and our communication services. Our practices comply with applicable regulations, including GDPR and CCPA where applicable.'
  },
  {
    id: 'collection',
    title: 'INFORMATION WE COLLECT',
    subsections: [
      {
        title: 'Personal Information',
        content: 'When you sign up for our services or use our form to communicate with us, we may collect personal information, including but not limited to:',
        items: [
          'Your name, email address, phone number, and manuscript details.',
          'Your preferences and communication preferences.'
        ]
      },
      {
        title: 'Usage Information',
        content: 'We may collect information about how you use our website and services, including:',
        items: [
          'IP address, browser type, and device information.',
          'Information related to our newsletters, services, and communications.'
        ]
      }
    ]
  },
  {
    id: 'sharing',
    title: 'SHARING YOUR INFORMATION',
    subsections: [
      {
        title: 'Service Providers',
        content: 'We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you, as long as those parties agree to keep this information confidential.'
      },
      {
        title: 'Legal Requirements',
        content: 'We may disclose your information if required by law or in the good faith belief that such action is necessary to:',
        items: [
          'Comply with legal obligations, court orders, or legal process.',
          'Protect and defend our rights, property, or safety.'
        ]
      }
    ]
  },
  {
    id: 'usage',
    title: 'HOW WE USE YOUR INFORMATION',
    subsections: [
      {
        title: 'Communication',
        content: 'We use your personal information to:',
        items: [
          'Send you updates, verify details, and provide legal offers via email and SMS.',
          'Respond to your inquiries and provide customer support.',
          'Keep you informed about new services and news.'
        ]
      },
      {
        title: 'Service Delivery',
        content: 'Your information helps us:',
        items: [
          'Manage your account and ensure accurate service execution.',
          'Personalize your experience based on preferences.'
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'DATA SECURITY',
    content: 'We take data security seriously and protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website uses industry-standard security measures including:',
    items: [
      'Encryption of data in transit.',
      'Regular security assessments.'
    ]
  },
  {
    id: 'rights',
    title: 'YOUR RIGHTS',
    content: 'You have the right to:',
    items: [
      'Access, correct, or delete your personal information.',
      'Object to or restrict our processing of your personal information.',
      'To exercise these rights, please contact us at info@northcrestpublishers.com.'
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceHero 
        service={{
          heroTag: "Legal",
          heroTitle: "Privacy Policy",
          heroSubtitle: "We value your privacy and are committed to protecting your personal information and intellectual property."
        } as any}
      />
      
      <section className="py-20 md:py-28">
        <div className="container-pad max-w-5xl mx-auto">
          {/* Detailed Sections */}
          <div className="space-y-24">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-100 pb-16 last:border-0">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0A1D37] mb-8 tracking-tight uppercase">
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 border-[#C8A96E] pl-6 py-2">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-4 mb-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-600">
                        <span className="text-[#C8A96E] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="text-lg font-bold text-[#0A1D37] mb-4 uppercase tracking-wider underline decoration-[#C8A96E] decoration-2 underline-offset-8">
                          {sub.title}
                        </h3>
                        {sub.content && <p className="text-gray-600 mb-6 text-sm leading-relaxed">{sub.content}</p>}
                        {sub.items && (
                          <ul className="space-y-3">
                            {sub.items.map((subItem, k) => (
                              <li key={k} className="flex items-start gap-3 text-sm text-gray-500">
                                <span className="text-[#C8A96E] mt-1">•</span>
                                <span>{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Support */}
            <div className="pt-16 mt-16 border-t border-[#C8A96E]/20 text-center">
              <h3 className="text-2xl font-display font-bold text-[#0A1D37] mb-4">Contact Support</h3>
              <p className="text-gray-600 mb-8">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="flex flex-col items-center gap-4">
                <a href="mailto:info@northcrestpublishers.com" className="text-[#C8A96E] font-bold hover:underline text-lg">
                  info@northcrestpublishers.com
                </a>
                <span className="text-gray-400 font-medium">(888) 260-4874</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
