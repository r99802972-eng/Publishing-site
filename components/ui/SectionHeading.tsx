interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {tag && (
        <span className="inline-block text-[#C8A96E] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight ${light ? 'text-white' : 'text-[#1A1A2E]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg italic mb-8 ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
