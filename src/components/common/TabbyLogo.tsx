import React from 'react';

interface TabbyLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'mono';
  size?: 'sm' | 'md' | 'lg';
}

export const TabbyLogo: React.FC<TabbyLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  return (
    <div className={`flex items-center gap-2 font-black tracking-tight select-none ${className}`}>
      {/* Iconic Tabby green pill icon */}
      <div className="relative flex items-center justify-center rounded-xl bg-[#3BFF9E] text-black font-extrabold px-2.5 py-1 text-sm shadow-sm transition-transform hover:scale-105">
        <span className="tracking-tighter text-xs font-black uppercase">switch</span>
      </div>
      <span className={`font-extrabold text-[#0B132B] ${sizeClasses[size]} flex items-center text-xl tracking-tight`}>
        tabby
      </span>
    </div>
  );
};
