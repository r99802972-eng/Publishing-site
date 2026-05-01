export default function ClientLogos() {
  const logos = [
    { name: 'Google', url: '/logos/580b57fcd9996e24bc43c51f.png'},
    { name: 'Amazon', url: '/logos/77df97c39ef48b1c246e4537859e5053.png', isLarge: true }, 
    { name: 'Draft2Digital', url: '/logos/Draft2Digital-PrintQuality-removebg-preview.png', isLarge: true },
    { name: 'Smashwords', url: '/logos/Smashwords-HorizontalLogo.png' },
    { name: 'Kobo', url: '/logos/cb31960a924f9abbe92f56903b772dd8.png', isLarge: true },
    { name: 'Lulu', url: '/logos/images-removebg-preview.png', isLarge: true },
    { name: 'BAM', url: '/logos/pngkey.com-amazon-prime-logo-png-1853342.png' },
  ];

  // Repeat logos multiple times to ensure enough width for the marquee
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden w-full">
      <div className="marquee-container w-full">
        <div className="marquee-content flex items-center gap-16 md:gap-32">
          {repeatedLogos.map((logo, index) => (
            <img
              key={`${logo.name}-${index}`}
              src={logo.url}
              alt={logo.name}
              className={`${logo.isLarge ? 'h-14 md:h-20' : 'h-8 md:h-10'} object-contain shrink-0`}
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
