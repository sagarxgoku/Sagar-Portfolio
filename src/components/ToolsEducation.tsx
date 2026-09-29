import React from 'react';
import { GraduationCap, Wrench, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ToolsEducation: React.FC = () => {
  const { tools, education } = PORTFOLIO_DATA;

  return (
    <section className="py-24 border-t border-white/[0.06] relative bg-[#09090c]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Left Column: Tools & Technologies */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
                <span>06</span>
                <span aria-hidden="true">/</span>
                <span>Stack & Production Gear</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white">
                Tools & Technologies.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light">
                Industry-standard creative suites, frontend web standards, and cutting-edge generative workflows.
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-neutral-900/40 border border-white/[0.06] hover:border-neutral-700 transition-colors group flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-white/10 flex items-center justify-center shrink-0 text-rose-400 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors">
                      {tool.name}
                    </h3>
                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5 mb-1">
                      {tool.category}
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-snug">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
                <span>07</span>
                <span aria-hidden="true">/</span>
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white">
                Education.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light">
                Academic milestones supporting structured thinking, communication, and creative development.
              </p>
            </div>

            {/* Education Timeline Cards */}
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.06] hover:border-neutral-700 transition-colors relative"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block mb-1">
                        {edu.year}
                      </span>
                      <h3 className="text-lg font-bold font-display text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-neutral-300 font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Status: {edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
