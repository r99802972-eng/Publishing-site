import ServiceHero from '@/components/service/ServiceHero';

const sections = [
  {
    id: 'definitions',
    title: 'TERMS AND DEFINITIONS',
    items: [
      'Website: all online frameworks such as email, domain & platform for website design.',
      'Customer: Person/House/Firm individual ordering via our website framework.',
      'Company: We, Northcrest Publishers, its direct registered owners and related staff.',
      'Project: A specific task given by the customer to our company in accordance with the terms of conditions and policies.',
      'Order: A Customer\'s request for purchasing services/products from the website framework by paying relevant amount for relevant service/product via a secure payment gateway.'
    ]
  },
  {
    id: 'refund-policy',
    title: 'REFUND POLICY',
    content: 'The policy is set forth to handle circumstances for sustaining the customer in case they wish to cancel the services provided by Northcrest Publishers in case of any technical error, quality issues, or non-satisfaction.',
    subsections: [
      {
        title: 'CHANGE OF MIND',
        items: [
          'If the customer wishes to cancel the order due to CHANGE OF MIND within the first hour after placing your order.',
          'If you change your mind AFTER the project is assigned to a team, we will deduct a 10% processing fee from the refund.'
        ]
      },
      {
        title: 'INTERMITTENT DELIVERY',
        items: [
          'If the final product does not meet relevant criteria for reasonable quality, a refund will be issued to satisfy the customer.',
          'A full refund is provided if the customer requests replacement or restructuring of the project and we fail to deliver after several attempts.'
        ]
      },
      {
        title: 'DELIVERY ERRORS',
        items: [
          'If the Northcrest Publishers fail to deliver the project to customer even after three attempts to reach the client, a refund will be processed and your account will be closed completely.'
        ]
      },
      {
        title: 'TIMELINE FOR REFUNDS',
        items: [
          'Refund request must be submitted within 24 hours of delivery.',
          'Refund requests made after this duration will not be entertained.'
        ]
      }
    ]
  },
  {
    id: 'copyright',
    title: 'PERSONAL USE & COPYRIGHT',
    items: [
      'The content delivered to you is purely for your use and it is strictly your property.',
      'Any unauthorized use, copying or distribution of design and content provided is illegal and subject to legal consequences.',
      'THE ENTIRE RIGHTS, UPDATES AND COPIES WILL BE PROVIDED TO YOU.'
    ]
  },
  {
    id: 'revisions',
    title: 'REVISIONS POLICY',
    items: [
      'Editing Orders: We offer revisions until content is verified and no more edits required.',
      'Ghostwriting Orders: Up to 5 revisions of entire manuscript. More revisions will require additional cost as per requirement and as per scope of work.'
    ]
  },
  {
    id: 'phone-policy',
    title: 'EMAIL & MOBILE PHONE POLICY',
    content: 'By providing your personal details like mobile/email, you give us consent to receive electronic communication regarding your project updates, promotion and account.',
    subsections: [
      {
        title: 'Opt-Out Policy',
        items: [
          'Unsubscribe link for newsletter link in every email.',
          'Reply STOP to opt out of any SMS messages.'
        ]
      },
      {
        title: 'Security & Privacy',
        content: 'Your contact details will not be shared with third parties under any circumstances.'
      }
    ]
  }
];

export default function TermsConditions() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceHero
        service={{
          heroTag: "Legal",
          heroTitle: "Terms & Conditions",
          heroSubtitle: "Our commitment to quality, transparency, and your author rights."
        } as any}
      />
      
      <section className="py-20 md:py-28">
        <div className="container-pad max-w-5xl mx-auto">
          {/* Intro Text */}
          <div className="mb-20 text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            <p className="mb-6 text-lg font-medium">
              Your agreement of the following terms and conditions establish how we handle your projects and our services. 
              If you do not agree with any relevant terms and conditions, please do not use our services.
            </p>
            <p className="mb-6">
              Please review these terms and conditions carefully as they affect your legal rights and obligations. 
              By using our website and services, you understand and agree that we are bound by our professional code 
              of conduct and as such we strive to avoid all conflicts of interest.
            </p>
            <p>
              By placing an order with Northcrest Publishers, you identify that you have read and understood these 
              terms and conditions. We strive to provide a powerful and fair experience for every person who uses our platform.
            </p>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-24">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-100 pb-16 last:border-0">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0A1D37] mb-8 tracking-tight">
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="text-gray-600 mb-8 leading-relaxed">
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
                        <h3 className="text-lg font-bold text-[#0A1D37] mb-4 uppercase tracking-wider">
                          {sub.title}
                        </h3>
                        {sub.content && <p className="text-gray-600 mb-4">{sub.content}</p>}
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
          </div>
        </div>
      </section>
    </div>
  );
}
