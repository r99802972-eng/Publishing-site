import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-block font-semibold px-7 py-3 rounded-full transition-all duration-300 text-sm tracking-wide text-center';
  
  const variants = {
    primary: 'bg-[#C8A96E] text-white hover:bg-[#b5924f] shadow-lg shadow-[#C8A96E]/20',
    outline: 'border-2 border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-white',
    white: 'bg-white text-[#1A1A2E] hover:bg-gray-100 shadow-xl',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
}
