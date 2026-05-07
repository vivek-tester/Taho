import React from 'react';

export const Logo = ({ className = "w-[28px] h-[28px]" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
    <rect width="200" height="200" rx="36" fill="#1A1A1A"/>
    <rect x="24" y="58" width="64" height="22" rx="4" fill="#F5F0E8"/>
    <rect x="112" y="58" width="64" height="22" rx="4" fill="#F5F0E8"/>
    <rect x="91" y="80" width="18" height="64" rx="4" fill="#F5F0E8"/>
    <rect x="72" y="150" width="56" height="3" rx="1.5" fill="#F5F0E8" opacity="0.3"/>
  </svg>
);

export const LogoMark = ({ className = "w-[22px] h-[22px]" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
    <rect width="200" height="200" rx="36" fill="#1A1A1A"/>
    <rect x="24" y="58" width="64" height="22" rx="4" fill="#F5F0E8"/>
    <rect x="112" y="58" width="64" height="22" rx="4" fill="#F5F0E8"/>
    <rect x="91" y="80" width="18" height="64" rx="4" fill="#F5F0E8"/>
    <rect x="72" y="150" width="56" height="3" rx="1.5" fill="#F5F0E8" opacity="0.3"/>
  </svg>
);
