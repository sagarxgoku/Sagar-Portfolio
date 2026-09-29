import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 border-t border-white/[0.06] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
              <span>05</span>
              <span aria-hidden="true">/</span>
              <span>Available Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
              Creative Services & Solutions.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light">
              High-impact creative production, visual packaging, and technical execution tailored for creators, founders, and modern brands.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-mono hidden md:block">
            <span>Tailored scopes · Fixed or ongoing engagements · Click to select</span>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="p-6 rounded-2xl bg-neutral-900/30 border border-white/[0.07] hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative cursor-pointer"
            >
              <div className="space-y-4">
                {/* Header index & badge (unboxed text) */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-rose-500 font-semibold">
                    0{index + 1}
                  </span>
                  <span className="text-neutral-500 uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-rose-400 transition-colors uppercase leading-snug">
                    {service.title}
                  </h3>
                  <span className="text-xs text-neutral-400 font-medium mt-1 block">
                    {service.shortTag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="pt-2 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service.title);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 border border-white/10 group-hover:border-rose-500/50 group-hover:bg-rose-600/10 text-xs font-semibold text-neutral-200 group-hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Select Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-rose-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
