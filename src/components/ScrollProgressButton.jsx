import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgressButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG Circle calculation
  // radius = 24, center = (28, 28)
  // circumference = 2 * PI * 24 ≈ 150.796
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const roundedPercentage = Math.round(scrollProgress);

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Floating Tooltip */}
      <div
        className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-nature-dark text-white text-[11px] font-mono font-semibold shadow-md pointer-events-none transition-all duration-200 ${
          isHovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0'
        }`}
      >
        <span>Top • {roundedPercentage}%</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-nature-dark" />
      </div>

      {/* Main Interactive Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Scroll to top. You have viewed ${roundedPercentage}% of the page.`}
        className="relative group w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-elevated border border-nature-border flex flex-col items-center justify-center text-nature-primary hover:border-nature-accent hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-nature-primary/40"
      >
        {/* SVG Circular Progress Track */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 56 56"
        >
          {/* Background circle track */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="text-nature-sand stroke-current"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Animated active progress circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="text-nature-water stroke-current transition-all duration-150 ease-out"
            strokeWidth="3.2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center Content: Arrow icon & Percentage */}
        <div className="relative z-10 flex flex-col items-center justify-center leading-none">
          <ArrowUp
            className={`w-4 h-4 transition-transform duration-200 ${
              isHovered
                ? '-translate-y-0.5 text-nature-waterDark'
                : 'text-nature-primary'
            }`}
          />
          <span className="text-[10px] font-mono font-bold text-nature-primary mt-0.5 tracking-tighter">
            {roundedPercentage}%
          </span>
        </div>
      </button>
    </div>
  );
}

