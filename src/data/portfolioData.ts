export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  clientOrContext: string;
  year: string;
  deliverables: string[];
  keyHighlights: string[];
  approach: string;
  metricsOrOutcome: string;
}

export interface SkillItem {
  name: string;
  category: 'content' | 'video' | 'design' | 'dev' | 'ai';
  categoryLabel: string;
  proficiency: number;
  highlight: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  isCurrent: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  keyFocusAreas: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  deliverables: string[];
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status: string;
  details: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Sagar Sharma",
    title: "CREATIVE PROFESSIONAL",
    subtitles: ["Content Creator", "Video Editor", "Web Designer"],
    quote: "I combine storytelling, design, technology and AI to create engaging digital experiences and visual content.",
    portraitImage: "/my_photo.png",
    email: "lsharma41001@gmail.com",
    phone: "+91 73981 86520",
    location: "India · Available Worldwide (Remote)",
    socialLinks: [
      { name: "YouTube", url: "https://www.youtube.com/@Sagarxlive-66", label: "@Sagarxlive-66" },
      { name: "Instagram", url: "https://www.instagram.com/ig_sagar.66?stkn=MWpmamRydWt6dmFiaw%3D%3D&utm_source=qr", label: "@ig_sagar.66" },
      { name: "GitHub", url: "https://github.com/sagarxgoku", label: "sagarxgoku" },
    ]
  },

  about: {
    lead: "A multidisciplinary creative operating at the intersection of cinematic video production, intentional graphic systems, modern web engineering, and AI-amplified workflows.",
    paragraphs: [
      "I am a versatile creative professional dedicated to crafting high-retention digital media. Whether scripting and color-grading documentary content that commands attention for 20+ minutes, architecting esports brand guidelines from the ground up, or building fluid web interfaces with clean code, I treat every project with an obsessive focus on narrative clarity and aesthetic precision.",
      "By integrating cutting-edge Generative AI tools directly into professional pipelines—from script ideation and research synthesis to automated asset preparation and visual prototyping—I accelerate delivery speed without compromising human creative direction and emotional nuance."
    ],
    pillars: [
      {
        number: "01",
        title: "Story-Driven Architecture",
        desc: "Every cut, frame, headline, and micro-interaction serves a clear emotional hook and narrative arc."
      },
      {
        number: "02",
        title: "Cross-Disciplinary Execution",
        desc: "Seamless translation between video timelines, graphic suites, vector systems, and production frontend code."
      },
      {
        number: "03",
        title: "AI-Augmented Efficiency",
        desc: "Leveraging state-of-the-art AI workflows to amplify research, asset ideation, and rapid prototyping."
      }
    ]
  },

  skills: [
    { name: "Content Management", category: "content", categoryLabel: "Content & Strategy", proficiency: 92, highlight: "Editorial calendars, publishing pipelines, cross-platform audience retention" },
    { name: "Scriptwriting & Storytelling", category: "content", categoryLabel: "Content & Strategy", proficiency: 95, highlight: "Deep research, curiosity loops, emotional hooks, retention pacing" },
    { name: "YouTube Content Strategy", category: "content", categoryLabel: "Content & Strategy", proficiency: 94, highlight: "CTR optimization, packaging concepts, algorithmic trend analysis" },
    { name: "Social Media Content", category: "content", categoryLabel: "Content & Strategy", proficiency: 90, highlight: "Vertical reels, micro-hooks, cross-platform narrative distribution" },
    
    { name: "Video Editing", category: "video", categoryLabel: "Video & Motion", proficiency: 96, highlight: "Documentary pacing, sound design, dynamic cutaways, visual FX timing" },
    { name: "Photo Editing", category: "video", categoryLabel: "Video & Motion", proficiency: 90, highlight: "Color grading, subject isolation, exposure balancing, texture enhancement" },
    
    { name: "Graphic Design", category: "design", categoryLabel: "Design & Identity", proficiency: 93, highlight: "Editorial layouts, promotional posters, typographic systems" },
    { name: "Thumbnail Design", category: "design", categoryLabel: "Design & Identity", proficiency: 97, highlight: "High-CTR visual hierarchies, 3D text styling, dynamic facial expressions" },
    { name: "Brand & Visual Identity", category: "design", categoryLabel: "Design & Identity", proficiency: 91, highlight: "Esports branding, logo systems, stream assets, brand guidelines" },
    
    { name: "Web Design", category: "dev", categoryLabel: "Web & Code", proficiency: 92, highlight: "Clean UI/UX, grid discipline, responsive layouts, aesthetic interaction" },
    { name: "Frontend Development", category: "dev", categoryLabel: "Web & Code", proficiency: 88, highlight: "Semantic HTML5, modern CSS3, responsive JavaScript, interactive components" },
    
    { name: "AI Tools & AI-assisted Workflows", category: "ai", categoryLabel: "AI Workflows", proficiency: 94, highlight: "Prompt engineering, generative visual ideation, automated research synthesis" },
  ] as SkillItem[],

  projects: [
    {
      id: "youtube-documentary",
      title: "YouTube Documentary Content",
      category: "Documentary Film & Video Editing",
      shortDescription: "Technology, business, science, economics and influential-personality documentaries focused on strong hooks, curiosity gaps, emotional storytelling and audience retention.",
      fullDescription: "Long-form editorial documentaries requiring deep research, dramatic visual pacing, rich sound design, and sophisticated motion graphics. Engineered around rigorous viewer retention frameworks, opening with high-stakes curiosity gaps and sustaining viewer engagement through seamless chapter transitions.",
      image: "/src/assets/images/project_youtube_documentary_1790679357178.jpg",
      tags: ["Video Editing", "Documentary Scripting", "Sound Design", "Audience Retention", "Color Grading"],
      clientOrContext: "Independent Content & High-Retention Channels",
      year: "2024",
      deliverables: [
        "Full 15-30 minute documentary edits",
        "Curiosity-gap opening hooks & teaser sequences",
        "Original soundscapes and dynamic audio mixing",
        "Custom B-roll composites and motion tracking",
        "Color-graded footage and archival restoration"
      ],
      keyHighlights: [
        "Engineered narrative hooks that maximize 30-second retention thresholds",
        "Synthesized multi-layered economic and technological concepts into intuitive visual metaphors",
        "Implemented cinematic sound effects and foley to create tactile tension"
      ],
      approach: "Every documentary begins with an extensive investigative research phase. Narrative tension is mapped on a retention timeline with micro-resolutions every 90 seconds to prevent cognitive fatigue.",
      metricsOrOutcome: "High retention averages exceeding 55% over 20-minute runtimes, with consistent positive audience reception."
    },
    {
      id: "nexora-esports",
      title: "NEXORA E-SPORTS",
      category: "Branding & Visual Identity",
      shortDescription: "Brand identity, logo concepts, jerseys, overlays, social media assets and esports visual branding.",
      fullDescription: "A comprehensive competitive gaming brand universe crafted for NEXORA E-Sports. Built around a razor-sharp geometric monogram, high-contrast obsidian and crimson palette, technical typography, and modular streaming broadcast packages.",
      image: "/src/assets/images/project_nexora_esports_1790679371771.jpg",
      tags: ["Esports Branding", "Logo Concept", "Jersey Mockups", "Stream Overlays", "Social Assets"],
      clientOrContext: "NEXORA E-Sports Organization",
      year: "2024",
      deliverables: [
        "Primary & secondary geometric logo suites",
        "Custom pro-team tournament jersey designs",
        "Dynamic OBS/stream alert and camera overlay kits",
        "Social media announcement and roster reveal templates",
        "Brand style guide and vector asset library"
      ],
      keyHighlights: [
        "Crafted an aggressive yet minimalist emblem optimized for team jerseys and 16x16 favicons alike",
        "Engineered broadcast overlays with low visual noise to keep gameplay central",
        "Built standardized social templates enabling rapid match-result publishing"
      ],
      approach: "Balanced the high-energy adrenaline of competitive gaming with modern luxury streetwear aesthetics to ensure the brand thrives both on stream and in physical merchandise.",
      metricsOrOutcome: "Full identity deployment across social media channels and tournament broadcasts with unified visual consistency."
    },
    {
      id: "web-digital-design",
      title: "WEB & DIGITAL DESIGN",
      category: "UI/UX & Frontend Development",
      shortDescription: "Modern portfolio and website concepts combining UI design, visual storytelling, frontend development and AI-assisted workflows.",
      fullDescription: "Interactive web experiences that merge editorial agency aesthetics with fluid responsiveness and semantic frontend code. Emphasizing typography, spatial math, subtle dark/light contrast, and zero-latency performance.",
      image: "/src/assets/images/project_web_digital_design_1790679391483.jpg",
      tags: ["Web Design", "Frontend Dev", "Responsive UI", "AI Workflows", "Micro-Interactions"],
      clientOrContext: "Digital Product Concepts & Client Portfolios",
      year: "2024",
      deliverables: [
        "High-fidelity desktop & mobile UI wireframes",
        "Production-ready HTML5, CSS3, and JavaScript code",
        "Dynamic micro-interactions and smooth scroll physics",
        "Accessible contrast and typographic hierarchy",
        "AI-accelerated prototyping and asset pipelines"
      ],
      keyHighlights: [
        "Zero-pill metadata discipline and balanced editorial typography",
        "Responsive grid systems adapting effortlessly from 320px mobile to 1440px desktop screens",
        "Lightweight, 60fps interaction models without bloated dependencies"
      ],
      approach: "Adopting an editorial-first methodology where typography and whitespace establish the brand personality before interactive layers are added.",
      metricsOrOutcome: "Sub-second load times, flawless responsive viewports, and high praise for aesthetic restraint."
    },
    {
      id: "graphic-promotional-design",
      title: "GRAPHIC & PROMOTIONAL DESIGN",
      category: "Graphic & Commercial Design",
      shortDescription: "Professional banners, posters, thumbnails, advertisements, social media creatives and print designs.",
      fullDescription: "A versatile suite of commercial visual communications created to drive conversions and capture scroll-stopping attention across digital feeds and physical print collateral.",
      image: "/src/assets/images/project_graphic_promo_design_1790679404891.jpg",
      tags: ["Thumbnails", "Banners & Posters", "Social Media Creatives", "Print Collateral", "Ad Creatives"],
      clientOrContext: "Commercial Clients & Digital Media Creators",
      year: "2024",
      deliverables: [
        "High-CTR YouTube thumbnail systems with tested readability",
        "Editorial promotional posters and launch banners",
        "Multi-format social media carousels and ad creatives",
        "Print-ready promotional collateral (300 DPI CMYK)",
        "Custom photo retouching and composition assets"
      ],
      keyHighlights: [
        "Engineered thumbnail compositions with rigorous contrast testing at 50px mobile display widths",
        "Harmonized bold typography with intentional color theory to invoke immediate curiosity",
        "Maintained strict cross-platform brand fidelity across Instagram, YouTube, and print"
      ],
      approach: "Focused on cognitive friction reduction: ensuring the viewer grasps the core message within 300 milliseconds of encountering the design.",
      metricsOrOutcome: "Measurable CTR lifts on digital campaigns and high client satisfaction across print runs."
    }
  ] as Project[],

  experience: [
    {
      role: "Creative & Digital Content Professional",
      organization: "Freelance / Independent Creative Projects",
      period: "2024 – Present",
      isCurrent: true,
      location: "Remote / Global",
      summary: "Directing and executing end-to-end creative deliverables across digital storytelling, video post-production, branding, and web design for creators, esports teams, and digital media ventures.",
      responsibilities: [
        "Directing YouTube and social media content creation from conceptualization to final cut",
        "Authoring documentary-style scripts anchored in deep research and retention pacing",
        "Designing high-impact thumbnails, promotional banners, brand logos, and marketing collateral",
        "Developing responsive web designs and clean frontend digital experiences",
        "Integrating generative AI tools into design, editing, and research workflows for 3x turnaround",
        "Developing comprehensive esports and gaming brand visual systems and broadcast kits",
        "Executing precise gaming, promotional, and social media video editing with tailored sound design"
      ],
      keyFocusAreas: [
        "Documentary Pacing",
        "Esports Visual Branding",
        "Frontend Web Architecture",
        "AI-Assisted Pipelines"
      ]
    }
  ] as ExperienceItem[],

  services: [
    {
      id: "content-creation",
      title: "CONTENT CREATION",
      shortTag: "End-to-End Media",
      description: "Concept development, research-driven scripting, and multi-platform content packaging built to captivate digital audiences.",
      deliverables: ["Scriptwriting & Outlines", "Audience Retention Strategy", "Platform-Specific Packaging", "Short & Long Form Planning"],
      badge: "Narrative"
    },
    {
      id: "video-editing",
      title: "VIDEO EDITING",
      shortTag: "High-Retention Cut",
      description: "Documentary-grade pacing, narrative rhythm, sound design, visual FX, and cinematic color grading that holds attention.",
      deliverables: ["Documentary & Story Edits", "Dynamic Audio Mixing", "Color Grading & Balancing", "B-Roll Composite & Motion FX"],
      badge: "Cinematic"
    },
    {
      id: "graphic-design",
      title: "GRAPHIC DESIGN",
      shortTag: "Visual Systems",
      description: "Editorial layouts, promotional posters, digital banners, advertisements, and print-ready collateral with high aesthetic rigor.",
      deliverables: ["Promotional Posters & Banners", "Marketing Creatives", "Vector Graphics", "Print Collateral (300 DPI)"],
      badge: "Editorial"
    },
    {
      id: "thumbnail-design",
      title: "THUMBNAIL DESIGN",
      shortTag: "High-CTR Packaging",
      description: "Click-worthy, psychologically optimized YouTube and social media thumbnails engineered for maximum visual contrast and curiosity.",
      deliverables: ["High-CTR Thumbnail Concepts", "Facial Expression Isolation", "3D Bold Typography", "A/B Testing Variations"],
      badge: "Conversion"
    },
    {
      id: "web-design",
      title: "WEB DESIGN",
      shortTag: "Modern UI/UX",
      description: "Modern, bespoke user interfaces and digital experiences grounded in strong typography, generous whitespace, and clean layouts.",
      deliverables: ["Interactive Wireframes", "Mobile-First Design Systems", "Typography & Color Architecture", "Prototyping"],
      badge: "Bespoke"
    },
    {
      id: "frontend-development",
      title: "FRONTEND DEVELOPMENT",
      shortTag: "Clean Code",
      description: "Semantic, accessible, and fast web development bringing UI designs to life with responsive layouts and fluid interactions.",
      deliverables: ["HTML5 / CSS3 / JavaScript", "Responsive 1440px to Mobile", "Micro-Interactions & Transitions", "Optimized Loading"],
      badge: "Production"
    },
    {
      id: "branding",
      title: "BRANDING",
      shortTag: "Identity & Strategy",
      description: "Complete visual identities, geometric logo systems, typography pairings, color systems, and comprehensive brand manuals.",
      deliverables: ["Logo & Monogram Design", "Esports & Team Identity", "Brand Style Guides", "Streaming & Broadcast Kits"],
      badge: "Identity"
    },
    {
      id: "ai-workflows",
      title: "AI-ASSISTED CREATIVE WORKFLOWS",
      shortTag: "Next-Gen Velocity",
      description: "Leveraging generative AI tools for accelerated ideation, automated asset generation, research synthesis, and rapid prototyping.",
      deliverables: ["AI Prompt Pipelines", "Generative Visual Ideation", "Automated Research Synthesis", "Workflow Optimization"],
      badge: "Innovative"
    }
  ] as ServiceItem[],

  tools: [
    { name: "Photoshop", category: "Design & Photo", description: "Advanced compositing, photo manipulation, and thumbnail packaging" },
    { name: "Canva", category: "Layout & Social", description: "Rapid social media templates and marketing asset creation" },
    { name: "Video Editing Software", category: "Video & Motion", description: "Multi-track timeline editing, audio mixing, color correction, and pacing" },
    { name: "HTML", category: "Web Standards", description: "Semantic markup, accessibility compliance, and structural integrity" },
    { name: "CSS", category: "Styling & Layout", description: "Tailwind CSS, responsive design, animations, and fluid typography" },
    { name: "JavaScript", category: "Frontend Logic", description: "Interactive components, DOM manipulation, and dynamic user states" },
    { name: "Generative AI", category: "Next-Gen Tools", description: "Ideation, rapid visual generation, copy prototyping, and research synthesis" },
    { name: "AI-assisted Design", category: "Next-Gen Tools", description: "Workflow automation, high-speed iteration, and asset expansion" },
    { name: "YouTube", category: "Platform & Strategy", description: "Retention analytics, thumbnail A/B testing, and audience growth" },
    { name: "Social Media", category: "Platform & Strategy", description: "Multi-platform distribution, vertical formats, and viral hooks" }
  ] as ToolItem[],

  education: [
    {
      degree: "B.A. — Final Year",
      institution: "Higher Education Degree",
      year: "Currently Pursuing",
      status: "In Progress",
      details: "Undergraduate degree focusing on humanities, analytical thinking, and cultural communication."
    },
    {
      degree: "Class XII",
      institution: "Aryan Academy Inter College",
      year: "2024",
      status: "Completed",
      details: "Senior secondary education with focus on academic excellence, creative arts, and communication."
    },
    {
      degree: "Class X",
      institution: "Aryan Academy Inter College",
      year: "2022",
      status: "Completed",
      details: "Secondary school certificate laying foundational skills in sciences, mathematics, and languages."
    }
  ] as EducationItem[]
};
