import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle, Mail, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedProject?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedProject,
}) => {
  const { services, profile } = PORTFOLIO_DATA;

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [timeline, setTimeline] = useState('Within 2-4 weeks');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedProject && !message) {
      setMessage(`Hi Sagar, I was inspired by your case study on "${preselectedProject}" and would love to discuss a project with a similar creative vision.`);
    }
  }, [preselectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedServices([]);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');
  const emailSubject = encodeURIComponent(`Project Inquiry from ${name}: ${selectedServices.join(', ') || 'Creative Media'}`);
  const emailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nServices: ${selectedServices.join(', ') || 'General'}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject Brief:\n${message}`
  );
  const mailtoLink = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi Sagar, my name is ${name}. I submitted an inquiry for: ${selectedServices.join(', ') || 'Creative Services'}. Brief: ${message}`)}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
              Start a Project with Sagar
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-white">
                  Inquiry Brief Prepared!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{name}</span>. Your project summary is ready. Sagar will review your brief and reply to <span className="text-rose-400 font-mono">{email}</span> within 24 hours.
                </p>
              </div>

              {/* Instant Direct Send Buttons */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/[0.08] max-w-md mx-auto space-y-3 text-left">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Send Instantly Via Your Preferred Channel:
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={mailtoLink}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email</span>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1">
                <h4 className="text-xl font-bold font-display text-white">
                  Tell me about your vision.
                </h4>
                <p className="text-xs text-neutral-400">
                  Select the services you require and provide details about the project timeline and goals.
                </p>
              </div>

              {/* Service Selection Chips (Interactive buttons) */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Select Services of Interest:
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => {
                    const isSelected = selectedServices.includes(svc.title);
                    return (
                      <button
                        type="button"
                        key={svc.id}
                        onClick={() => toggleService(svc.title)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer active:scale-95 ${
                          isSelected
                            ? 'bg-rose-600 text-white shadow-sm ring-1 ring-rose-400'
                            : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-neutral-200'
                        }`}
                      >
                        {svc.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Approximate Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,500">$500 - $1,500</option>
                    <option value="$1,500 - $3,500">$1,500 - $3,500</option>
                    <option value="$3,500+">$3,500+ (Comprehensive Campaign)</option>
                    <option value="Flexible / Retainer">Flexible / Ongoing Retainer</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="Urgent (Within 1 week)">Urgent (Within 1 week)</option>
                    <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="Flexible">Flexible schedule</option>
                  </select>
                </div>
              </div>

              {/* Project Briefing Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Project Brief & Objectives
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your goals, audience, target platform (e.g. YouTube documentary, full esports branding, website revamp), and any reference links..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-mono">
                  Guaranteed response within 24 hours.
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-rose-600 rounded-lg hover:bg-rose-500 transition-colors flex items-center gap-2 shadow-lg shadow-rose-950/50 cursor-pointer active:scale-95"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
