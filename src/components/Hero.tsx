import React from 'react';
import { ArrowDownRight, Sparkles, Film, Palette, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/scroll';

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onViewWork }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Kicker / Status */}
            <div className="inline-flex items-center gap-2.5 text-xs text-neutral-400 font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for independent & client projects</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="text-neutral-400">2026 Edition</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-display text-white uppercase leading-[0.95]">
                {profile.name}
              </h1>
              
              <div className="pt-1">
                <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-rose-500 tracking-wide uppercase">
                  {profile.title}
                </p>
              </div>

              {/* Subtitles: Content Creator • Video Editor • Web Designer */}
              <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base md:text-lg text-neutral-300 font-medium">
                {profile.subtitles.map((sub, idx) => (
                  <React.Fragment key={sub}>
                    <span>{sub}</span>
                    {idx < profile.subtitles.length - 1 && (
                      <span className="text-neutral-600" aria-hidden="true">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Quote / Mission statement */}
            <div className="max-w-xl pt-2">
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed border-l-2 border-rose-500/80 pl-4 py-0.5">
                "{profile.quote}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 relative z-20">
              <button
                type="button"
                onClick={onViewWork}
                className="group px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-rose-600 rounded-lg hover:bg-rose-500 transition-all shadow-lg shadow-rose-950/40 hover:shadow-rose-900/60 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onOpenInquiry}
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-200 bg-neutral-900/90 border border-neutral-700/80 rounded-lg hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Let's Work Together</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </button>
            </div>

            {/* Micro Pillars / Disciplines - Clickable shortcuts */}
            <div className="pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-4 max-w-lg">
              <button
                type="button"
                onClick={() => smoothScrollTo('#projects')}
                className="space-y-1 text-left p-2 -ml-2 rounded-lg hover:bg-neutral-900/50 transition-colors cursor-pointer group/pillar"
              >
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs group-hover/pillar:text-rose-400 transition-colors">
                  <Film className="w-3.5 h-3.5 text-rose-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">Story</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium group-hover/pillar:text-white transition-colors">Documentary & Video Pacing</p>
              </button>

              <button
                type="button"
                onClick={() => smoothScrollTo('#projects')}
                className="space-y-1 text-left p-2 rounded-lg hover:bg-neutral-900/50 transition-colors cursor-pointer group/pillar"
              >
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs group-hover/pillar:text-amber-400 transition-colors">
                  <Palette className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">Visuals</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium group-hover/pillar:text-white transition-colors">Identity & Graphic Packaging</p>
              </button>

              <button
                type="button"
                onClick={() => smoothScrollTo('#services')}
                className="space-y-1 text-left p-2 rounded-lg hover:bg-neutral-900/50 transition-colors cursor-pointer group/pillar"
              >
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs group-hover/pillar:text-emerald-400 transition-colors">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">Digital</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium group-hover/pillar:text-white transition-colors">Web Systems & AI Tools</p>
              </button>
            </div>

          </div>

          {/* Right Column: Editorial Overview & Quick Actions */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] rounded-2xl p-2 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent border border-white/10 shadow-2xl shadow-black/80 group">
              
              {/* Corner aesthetic brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-rose-500 pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-rose-500 pointer-events-none" />

              {/* Cinematic Portrait Card with Sagar's Photo */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-950">
                <img
                  src={profile.portraitImage}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('sagar_photo_portrait')) {
                      target.src = '/src/assets/images/sagar_photo_portrait_1790681151340.jpg';
                    }
                  }}
                  alt="Sagar Sharma — Creative Professional & Video Editor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.99] transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle cinematic gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/30 via-transparent to-neutral-950/30 pointer-events-none" />

                {/* Ambient warm light leak */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Floating Lower Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-display font-bold text-white tracking-wide">
                      SAGAR SHARMA
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenInquiry}
                    className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-300 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
                    title="Start a project"
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
