import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenInquiry: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenInquiry }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-28 border-t border-white/[0.08] relative overflow-hidden scroll-mt-24">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Editorial Lockup */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-500">
            <span>08</span>
            <span aria-hidden="true">/</span>
            <span>Get in Touch</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white uppercase leading-[0.95]">
            LET'S CREATE <br />
            <span className="text-rose-500">SOMETHING IMPACTFUL.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            "Open to freelance, creative, digital media and technology opportunities."
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenInquiry}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-rose-600 rounded-xl hover:bg-rose-500 transition-all shadow-xl shadow-rose-950/50 hover:shadow-rose-900/70 inline-flex items-center gap-2.5 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${cleanPhone}?text=Hi%20Sagar%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-200 bg-neutral-900 border border-neutral-700 hover:border-emerald-500 hover:text-emerald-400 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>

        {/* Contact Methods Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.07] hover:border-neutral-600 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-rose-400">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono cursor-pointer active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-neutral-500 block mb-1">Direct Inquiries</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-rose-400 transition-colors break-all block"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light mt-4 pt-4 border-t border-white/[0.04]">
              For project scopes, collaboration decks & commercial inquiries.
            </p>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.07] hover:border-neutral-600 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono cursor-pointer active:scale-95"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-neutral-500 block mb-1">Direct Line / WhatsApp</span>
                <a
                  href={`tel:${cleanPhone}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-amber-400 transition-colors font-mono block"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-light">Available for urgent calls</span>
              <a
                href={`https://wa.me/${cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/[0.07] hover:border-neutral-600 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-neutral-500 block mb-1">Base & Availability</span>
                <p className="text-base sm:text-lg font-medium text-white">
                  {profile.location}
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light mt-4 pt-4 border-t border-white/[0.04]">
              Working asynchronously across EST, GMT, and IST time zones.
            </p>
          </div>

        </div>

        {/* Social / Portfolio Links Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/20 border border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Social & Portfolio Profiles
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Regularly updated with new edits and visual case studies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900/60 border border-white/[0.04] hover:border-neutral-700 hover:bg-neutral-800 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[11px] text-neutral-500 font-mono truncate">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
