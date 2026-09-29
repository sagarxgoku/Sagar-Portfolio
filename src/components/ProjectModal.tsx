import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-neutral-700" aria-hidden="true">·</span>
            <span className="text-xs text-neutral-400 font-mono">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Lead */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Large Project Visual */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Metadata Row (Unboxed metadata) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/40 border border-white/[0.06] text-xs">
            <div>
              <span className="text-neutral-500 font-mono uppercase block mb-1">Context</span>
              <span className="text-neutral-200 font-medium">{project.clientOrContext}</span>
            </div>
            <div>
              <span className="text-neutral-500 font-mono uppercase block mb-1">Timeline</span>
              <span className="text-neutral-200 font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 font-mono uppercase block mb-1">Role</span>
              <span className="text-neutral-200 font-medium">Lead Creative</span>
            </div>
            <div>
              <span className="text-neutral-500 font-mono uppercase block mb-1">Impact</span>
              <span className="text-rose-400 font-medium">High Engagement</span>
            </div>
          </div>

          {/* Deep Narrative Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-display text-white">
              Project Overview & Narrative
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Strategic Approach */}
          <div className="space-y-4 p-6 rounded-xl bg-neutral-900/30 border border-white/[0.06]">
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-rose-400">
              Creative Strategy & Framework
            </h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Key Deliverables & Outcomes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Deliverables List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Core Innovations
              </h4>
              <ul className="space-y-2">
                {project.keyHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-neutral-800">
            <span className="text-xs text-neutral-500 font-mono uppercase mr-3">Disciplines:</span>
            <div className="inline-flex flex-wrap gap-2 text-xs text-neutral-400">
              {project.tags.map((tag, idx) => (
                <span key={tag}>
                  {tag}{idx < project.tags.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400">
              Interested in a project with similar creative direction?
            </p>
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-rose-600 rounded-lg hover:bg-rose-500 transition-colors flex items-center justify-center gap-2"
            >
              <span>Inquire for Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
