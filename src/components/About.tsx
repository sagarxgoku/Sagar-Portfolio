import React from 'react';
import { Layers, Zap, Eye, Terminal, Sparkles, ArrowRight, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/scroll';

interface AboutProps {
  onOpenInquiry?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-t border-white/[0.06] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
            <span>01</span>
            <span aria-hidden="true">/</span>
            <span>About Sagar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            Multidisciplinary Craft. <br />
            <span className="text-neutral-400">Grounded in Retention & Precision.</span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
            {about.lead}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Detailed Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed font-light text-base sm:text-lg">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-white/[0.08] mt-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-400" />
                Creative Ethos
              </h3>
              <p className="text-sm text-neutral-400 leading-normal">
                "Content is not merely viewed; it is felt. Whether through the rhythm of a documentary cut, the weight of a geometric typographic mark, or the fluid response of a responsive webpage, my goal is to craft memorable digital encounters."
              </p>
            </div>
          </div>

          {/* Quick Metrics & Highlights Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/[0.08] backdrop-blur-sm space-y-6">
              <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400 pb-2 border-b border-white/[0.08]">
                Core Competencies & Scope
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-rose-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Full Creative Lifecycle</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">From scripting & ideation to editing, packaging, and digital deployment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Audience Retention Psychology</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Pacing, curiosity gaps, visual contrast, and high-CTR thumbnail packaging.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Generative AI Acceleration</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">High-speed visual iteration, prompt engineering, and research workflows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-indigo-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Clean Web Architecture</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Semantic frontend code, 1440px desktop layouts, responsive typography.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {about.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-neutral-900/30 border border-white/[0.06] hover:border-rose-500/40 transition-colors group relative overflow-hidden"
            >
              <div className="text-xs font-mono text-rose-500 font-semibold mb-4 tracking-widest">
                {pillar.number}
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-rose-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Bottom Actions */}
        <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white font-display">
              Ready to elevate your digital presence?
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">
              Available for full production, video editing, branding, and web design.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => smoothScrollTo('#projects')}
              className="px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onOpenInquiry && (
              <button
                type="button"
                onClick={onOpenInquiry}
                className="px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg shadow-rose-950/40"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Start a Project</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
