import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SkillsProps {
  onSelectSkill?: (skillName: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onSelectSkill }) => {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'content', label: 'Content & Strategy' },
    { id: 'video', label: 'Video & Motion' },
    { id: 'design', label: 'Design & Identity' },
    { id: 'dev', label: 'Web & Code' },
    { id: 'ai', label: 'AI Workflows' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 border-t border-white/[0.06] relative bg-[#09090c]/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
              <span>02</span>
              <span aria-hidden="true">/</span>
              <span>Expertise & Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
              Skills & Creative Capabilities.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light">
              Interactive breakdown of technical proficiencies across media production, editorial storytelling, and modern web development.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900/80 rounded-xl border border-white/[0.08] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => onSelectSkill && onSelectSkill(skill.name)}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.06] hover:border-neutral-700 transition-all duration-300 hover:-translate-y-0.5 group relative cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Category indicator (unboxed metadata) */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-rose-400">{skill.categoryLabel}</span>
                  <span className="tabular-nums font-semibold text-neutral-300">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-rose-300 transition-colors flex items-center justify-between">
                  <span>{skill.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-rose-400 transition-colors opacity-0 group-hover:opacity-100" />
                </h3>

                {/* Highlight / Scope */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                  {skill.highlight}
                </p>
              </div>

              {/* Progress bar hairline */}
              <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-neutral-500 font-mono">
          Refined across hundreds of video edits, branding suites, and digital design experiments. Click any skill to inquire.
        </div>

      </div>
    </section>
  );
};
