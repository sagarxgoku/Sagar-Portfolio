import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest('button, a, input, textarea, select, [role="button"]');
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle follower ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out will-change-transform hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border border-rose-500/40 transition-all duration-300 ${
            isPointer ? 'w-12 h-12 bg-rose-500/10 scale-125 border-rose-500/80' : 'w-8 h-8 scale-100'
          }`}
        />
      </div>

      {/* Center pinpoint */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ${
            isPointer ? 'w-2 h-2 bg-rose-400' : 'w-1.5 h-1.5'
          }`}
        />
      </div>
    </>
  );
};
