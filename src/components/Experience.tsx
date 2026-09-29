import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Briefcase, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceProps {
  onOpenInquiry?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenInquiry }) => {
  const { experience } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-24 border-t border-white/[0.06] relative bg-[#09090c]/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
            <span>04</span>
            <span aria-hidden="true">/</span>
            <span>Career & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            Professional Experience.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light">
            Interactive timeline of independent client work, media production, and digital creative direction.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/[0.1] space-y-12 max-w-4xl">
          {experience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Indicator Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-[#08080a] ring-2 ring-rose-500/50" />

                {/* Main Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/[0.08] hover:border-neutral-700 transition-all">
                  
                  {/* Meta Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-5">
                    <div>
                      <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-neutral-300">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Toggle Responsibilities Button */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-rose-400" />
                        Core Deliverables & Projects Undertaken
                      </h4>

                      <button
                        type="button"
                        onClick={() => toggleExpand(idx)}
                        className="text-xs font-mono text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{isExpanded ? 'Collapse' : 'Expand All'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 animate-in fade-in duration-200">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/40 border border-white/[0.04] text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{resp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Focus Area Tags and Inquire Action */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
                    <div className="flex items-center gap-3">
                      <span className="font-mono uppercase text-neutral-500">Pillars:</span>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.keyFocusAreas.map((area, aIdx) => (
                          <React.Fragment key={area}>
                            <span className="text-neutral-300 font-medium">{area}</span>
                            {aIdx < exp.keyFocusAreas.length - 1 && (
                              <span className="text-neutral-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {onOpenInquiry && (
                      <button
                        type="button"
                        onClick={onOpenInquiry}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors cursor-pointer text-xs font-semibold uppercase tracking-wider"
                      >
                        <Mail className="w-3 h-3 text-rose-400" />
                        <span>Discuss Engagement</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
