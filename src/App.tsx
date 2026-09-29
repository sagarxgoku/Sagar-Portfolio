import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { ToolsEducation } from './components/ToolsEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { smoothScrollTo } from './utils/scroll';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedProject, setPreselectedProject] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (service?: string, project?: string) => {
    setPreselectedService(service);
    setPreselectedProject(project);
    setInquiryModalOpen(true);
  };

  const handleViewWork = () => {
    smoothScrollTo('#projects');
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-neutral-100 flex flex-col font-sans selection:bg-rose-500/20 selection:text-rose-200">
      {/* Subtle dynamic custom pointer */}
      <CustomCursor />

      {/* Navigation adhering to Top Bar Contract */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onViewWork={handleViewWork}
        />

        {/* About Section */}
        <About onOpenInquiry={() => handleOpenInquiry()} />

        {/* Skills Section */}
        <Skills onSelectSkill={(skillName) => handleOpenInquiry(skillName)} />

        {/* Featured Projects with Case Study Modals */}
        <Projects
          onOpenInquiryWithProject={(projectTitle) =>
            handleOpenInquiry(undefined, projectTitle)
          }
        />

        {/* Professional Experience Interactive Timeline */}
        <Experience onOpenInquiry={() => handleOpenInquiry()} />

        {/* 8 Premium Services */}
        <Services
          onSelectService={(serviceTitle) => handleOpenInquiry(serviceTitle)}
        />

        {/* Tools & Technologies + Education */}
        <ToolsEducation />

        {/* Contact Section */}
        <Contact onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => {
          setInquiryModalOpen(false);
          setPreselectedService(undefined);
          setPreselectedProject(undefined);
        }}
        preselectedService={preselectedService}
        preselectedProject={preselectedProject}
      />
    </div>
  );
}
