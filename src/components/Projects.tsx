import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenInquiryWithProject: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenInquiryWithProject }) => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-white/[0.06] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
              <span>03</span>
              <span aria-hidden="true">/</span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
              Featured Case Studies.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light">
              Deep-dive creative projects spanning documentary storytelling, competitive esports identity, modern web engineering, and commercial graphic design.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-mono hidden md:block">
            <span>Click any project to inspect the case study</span>
          </div>
        </div>

        {/* 2x2 Large Editorial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-neutral-900/30 border border-white/[0.08] hover:border-neutral-600 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Media Container with 16:9 aspect ratio */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Visual Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Floating Category Indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-mono tracking-wider uppercase text-neutral-200 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* View Case Study quick hover pill */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-600 rounded-md shadow-lg">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-rose-400">
                      0{index + 1} // CASE STUDY
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-rose-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tags (Zero-Pill: clean unboxed metadata with separators) */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {tIdx < 2 && <span className="text-neutral-600" aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors shrink-0"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          setSelectedProject(null);
          onOpenInquiryWithProject(title);
        }}
      />
    </section>
  );
};
