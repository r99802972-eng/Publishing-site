export default function ClientLogos() {
  const logos = [
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' },
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Facebook', url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg' },
  ];

  // Repeat logos multiple times to ensure enough width for the marquee
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden w-full">
      <div className="marquee-container w-full">
        <div className="marquee-content flex items-center gap-16 md:gap-32">
          {repeatedLogos.map((logo, index) => (
            <img
              key={`${logo.name}-${index}`}
              src={logo.url}
              alt={logo.name}
              className="h-6 md:h-8 object-contain shrink-0"
              style={{ 
                filter: 'invert(72%) sepia(35%) saturate(464%) hue-rotate(5deg) brightness(91%) contrast(85%)' 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
