import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-[#070709] text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white font-display text-sm">
              {profile.name}
            </span>
            <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">·</span>
            <span>Content Creator, Video Editor & Web Designer</span>
            <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-neutral-500 font-mono">© 2026. All Rights Reserved.</span>
          </div>

          {/* Time & Back to Top */}
          <div className="flex items-center gap-6">
            {time && (
              <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>IST (New Delhi): {time}</span>
              </div>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] uppercase tracking-wider font-mono">Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
