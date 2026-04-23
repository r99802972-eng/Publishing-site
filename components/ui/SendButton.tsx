'use client';

import React from 'react';

interface SendButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ 
  isLoading = false, 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button
      disabled={isLoading}
      className={`
        group relative flex items-center justify-center gap-3 
        px-8 py-3 rounded-full 
        bg-gradient-to-br from-[#C7A76C] to-[#B8965A]
        text-[#0A1D37] font-semibold uppercase tracking-widest text-sm
        shadow-lg shadow-[#C7A76C]/10
        transition-all duration-300 ease-out
        hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#C7A76C]/20 hover:brightness-95
        active:translate-y-0 active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-[#C7A76C] focus:ring-offset-2 focus:ring-offset-[#0A1D37]
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg 
            className="animate-spin h-4 w-4 text-[#0A1D37]" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="opacity-80">Sending...</span>
        </div>
      ) : (
        <>
          <span className="relative z-10">Send Message</span>
          <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </>
      )}
      
      {/* Soft Glow Effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-[#C7A76C]/20 -z-10" />
    </button>
  );
};

export default SendButton;
