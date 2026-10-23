import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Rohan Shukla",
    firstName: "Rohan",
    lastName: "Shukla",
    title: "Java Full Stack Developer",
    rotatingTitles: [
      "Java Full Stack Developer",
      "Spring Boot 3 & Microservices Specialist",
      "React & Next.js Frontend Architect",
      "Smart India Hackathon (SIH) Winner",
      "Mumbai Hacks 2025 Finalist",
    ],
    tagline:
      "I engineer secure, scalable full-stack applications with Spring Boot, React, and cryptographic precision.",
    bioParagraphs: [
      "I am Rohan Shukla, a Java Full Stack Developer based in Mumbai, India. I specialize in building enterprise-grade backend systems using Spring Boot, secure RESTful APIs with JWT authentication, and modern, responsive web experiences using React and Tailwind CSS.",
      "My industry experience includes developing and maintaining production full-stack systems at Sdac Infotech (Mumbai), where I optimized API response times, implemented clean MVC architecture, and crafted fluid frontend interfaces across devices.",
      "I am a B.Tech Computer Engineering scholar at Thakur College of Engineering (CGPA: 8.48), where I won the Internal Smart India Hackathon (SIH) and emerged as a Finalist at Mumbai Hacks 2025. From offline mesh cryptography (RSA + AES) to multi-vendor AI-powered e-commerce, I build software that performs under heavy load.",
    ],
    stats: [
      {
        value: 8.48,
        suffix: " CGPA",
        label: "B.Tech Academic Standing",
        subtext: "Thakur College of Engineering, Mumbai",
      },
      {
        value: 1,
        suffix: "st Prize",
        label: "Smart India Hackathon (SIH)",
        subtext: "Winner – College Level Innovation",
      },
      {
        value: 2025,
        suffix: " Finalist",
        label: "Mumbai Hacks Hackathon",
        subtext: "Selected among top tech finalists",
      },
      {
        value: 100,
        suffix: "%",
        label: "Cryptographic Security",
        subtext: "RSA-OAEP + AES-256-GCM Mesh Tech",
      },
    ],
    location: "Mumbai, India",
    availability: "Available for Full-Time & High-Impact Contracts",
    timezone: "IST (UTC+5:30) • Mumbai, India",
    email: "shuklarohan388@gmail.com",
    phoneFormatted: "+91 9580849709",
    whatsappUrl: "https://wa.me/919580849709?text=Hi%20Rohan,%20I%20saw%20your%20portfolio%20and%20resume%20and%20would%20love%20to%20connect.",
    socialLinks: {
      github: "https://github.com/shuklaji-coder",
      linkedin: "https://www.linkedin.com/in/rohan-shukla-0b8889321/",
      twitter: "https://twitter.com/rohanshukla",
      whatsapp: "https://wa.me/919580849709",
      email: "mailto:shuklarohan388@gmail.com",
    },
    resumeUrl: "/resume-rohan-shukla.pdf",
  },

  experience: [
    {
      id: "sdac-infotech",
      role: "Full Stack Developer (Internship)",
      company: "Sdac Infotech",
      location: "On-site • Mumbai, India",
      period: "Jul 2025 – Nov 2025",
      type: "Internship",
      points: [
        "Developed and maintained scalable full-stack web applications using Java, Spring Boot, React, JavaScript, HTML, and CSS.",
        "Designed and implemented RESTful APIs enabling efficient communication between frontend and backend systems.",
        "Built responsive and dynamic user interfaces using React and Tailwind CSS, improving user experience across devices.",
        "Optimized application performance through code refactoring and performance tuning, resulting in noticeable reduction in API response time and improved page load speed.",
        "Followed clean code principles, MVC architecture, and best practices ensuring maintainable and scalable codebase.",
        "Collaborated in an Agile/Scrum environment, participating in sprint planning, code reviews, and team discussions.",
      ],
      techUsed: ["React", "Spring Boot", "MySQL", "MongoDB", "Tailwind CSS", "REST APIs", "Agile"],
    },
  ],

  education: [
    {
      id: "tcoe-btech",
      degree: "B.Tech in Computer Engineering",
      institution: "Thakur College of Engineering",
      location: "Mumbai, India",
      period: "Jun 2024 – Jun 2027",
      cgpa: "8.48 / 10",
      achievements: [
        "Winner – Internal Smart India Hackathon (SIH), a college-level competition.",
        "Finalist – Mumbai Hacks 2025 Hackathon.",
        "Actively engaged in technical events, coding hackathons, and software clubs.",
      ],
    },
    {
      id: "thakur-polytechnic",
      degree: "Diploma in Computer Engineering",
      institution: "Thakur Polytechnic",
      location: "Mumbai, India",
      period: "Jun 2021 – May 2024",
      cgpa: "8.14 / 10",
      achievements: [
        "Organized and managed major college technical and cultural events.",
        "Coordinated with student and faculty teams for seamless execution.",
        "Handled event planning, technology setups, and logistics.",
      ],
    },
  ],

  skills: {
    marqueeRow1: [
      { name: "Java 17/21", category: "Language" },
      { name: "Spring Boot 3", category: "Backend" },
      { name: "Spring Security", category: "Security" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "MySQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "RESTful APIs", category: "Architecture" },
      { name: "JWT Auth", category: "Security" },
    ],
    marqueeRow2: [
      { name: "Hibernate / JPA", category: "ORM" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "DevOps" },
      { name: "AWS S3", category: "Cloud" },
      { name: "Postman", category: "Testing" },
      { name: "Git & GitHub", category: "VCS" },
      { name: "Maven", category: "Build Tool" },
      { name: "Spring AI", category: "AI Integration" },
      { name: "H2 Database", category: "In-Memory" },
    ],
    categories: [
      {
        title: "Backend & Enterprise Architecture",
        subtitle: "High-throughput Java, Spring Boot microservices, and database tuning",
        skills: [
          {
            name: "Java & Spring Boot 3",
            iconName: "Layers",
            level: "Expert",
            category: "backend",
            description: "Spring Boot 3, MVC architecture, RESTful API design, dependency injection, and clean code principles.",
          },
          {
            name: "Spring Security & JWT",
            iconName: "Server",
            level: "Expert",
            category: "backend",
            description: "Stateless JWT authentication, role-based access control (RBAC), and cryptographic endpoints.",
          },
          {
            name: "MySQL, PostgreSQL & MongoDB",
            iconName: "Database",
            level: "Expert",
            category: "database",
            description: "Relational indexing, JPA/Hibernate mappings, transactions, and NoSQL document storage.",
          },
          {
            name: "Offline Cryptography & Mesh",
            iconName: "Zap",
            level: "Advanced",
            category: "backend",
            description: "RSA-OAEP, AES-256-GCM authenticated encryption, and SHA-256 concurrency control.",
          },
        ],
      },
      {
        title: "Frontend & Reactive Interfaces",
        subtitle: "Dynamic web interfaces built with React, TypeScript, and Tailwind",
        skills: [
          {
            name: "React & Next.js",
            iconName: "Code2",
            level: "Expert",
            category: "frontend",
            description: "Component lifecycle, state management, custom hooks, and dynamic data rendering.",
          },
          {
            name: "TypeScript & JavaScript",
            iconName: "FileCode",
            level: "Expert",
            category: "frontend",
            description: "Type-safe interfaces, async/await patterns, DOM manipulation, and modular architecture.",
          },
          {
            name: "Tailwind CSS",
            iconName: "Palette",
            level: "Expert",
            category: "frontend",
            description: "Utility-first design tokens, responsive layouts, dark themes, and seamless device adaptation.",
          },
          {
            name: "Framer Motion & UX Polish",
            iconName: "Sparkles",
            level: "Advanced",
            category: "frontend",
            description: "Fluid micro-interactions, spring physics, page transitions, and interactive controls.",
          },
        ],
      },
      {
        title: "DevOps, Cloud & Tooling",
        subtitle: "Containerization, cloud storage, API testing, and build orchestration",
        skills: [
          {
            name: "Docker & Kubernetes",
            iconName: "Box",
            level: "Advanced",
            category: "cloud",
            description: "Containerization of Spring Boot & React services, Docker compose, and cluster manifests.",
          },
          {
            name: "AWS S3 & Cloud Storage",
            iconName: "Cloud",
            level: "Advanced",
            category: "cloud",
            description: "Bucket policies, secure media uploads, signed pre-authenticated URLs, and CDN distribution.",
          },
          {
            name: "Git, Postman & Maven",
            iconName: "CheckCircle2",
            level: "Production-Ready",
            category: "tools",
            description: "Branching workflows, automated API contract testing with Postman, and Maven build pipelines.",
          },
          {
            name: "Python & C++",
            iconName: "Cpu",
            level: "Advanced",
            category: "backend",
            description: "Algorithmic problem solving, data structures, and script automation.",
          },
        ],
      },
    ],
  },

  projects: [
    {
      id: "chaloji-travel",
      slug: "chaloji-travel-booking",
      title: "ChaloJi",
      subtitle: "Intercity Travel & Smart Commute Booking Platform",
      category: "Android Apps",
      thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "/videos/chaloji-demo.mp4",
      description:
        "Full-featured travel booking and route planning platform with real-time seat selection, dynamic fare calculation, and automated ticket generation.",
      tech: ["React", "Next.js", "Spring Boot", "MySQL", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://chalojii.in/",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.rohan3543.chaloji&pcampaignid=web_share",
      driverAppUrl: "https://play.google.com/store/apps/details?id=com.chaloji.driver&pcampaignid=web_share",
      githubUrl: "https://github.com/shuklaji-coder",
      featured: true,
      bentoSpan: "lg:col-span-8",
      caseStudy: {
        overview:
          "ChaloJi is a comprehensive travel booking ecosystem built to simplify intercity commutes with real-time route visualization, seat reservations, and seamless booking confirmations.",
        challenge:
          "Managing concurrent seat lock timeouts during peak holiday booking surges while ensuring zero duplicate reservations and instant search responsiveness.",
        solution:
          "Engineered transactional seat reservation locks in MySQL with auto-expiring booking holds, coupled with a fluid responsive React frontend and optimized RESTful APIs.",
        architecture: [
          "Optimized RESTful API controllers built with Spring Boot for rapid fare calculation and search.",
          "Real-time seat selection canvas with instant optimistic locking and state synchronization.",
          "Interactive trip itinerary builder and automated PDF ticket dispatch pipeline.",
          "Dynamic administrative analytics dashboard for route and fleet management.",
        ],
        metrics: [
          { label: "Booking Speed", value: "< 3 Steps" },
          { label: "Search Latency", value: "< 180ms" },
          { label: "Seat Lock Precision", value: "100% ACID" },
          { label: "Video Preview", value: "Available" },
        ],
        keyFeatures: [
          "Interactive seat layout selector with real-time status updates",
          "Dynamic fare calculator and multi-city route planner",
          "Instant booking confirmation with downloadable e-tickets",
          "Comprehensive admin dashboard for routes, fleets, and fares",
        ],
      },
    },
    {
      id: "cafewala-dining",
      slug: "cafewala-dining-ordering",
      title: "CafeWala",
      subtitle: "Artisanal Dining & Real-Time Ordering Web Experience",
      category: "E-Commerce",
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "/videos/cafewala-showcase.mp4",
      description:
        "A vibrant F&B digital storefront with live menu filtering, custom coffee and meal customization, table reservation, and frictionless cart checkout.",
      tech: ["React", "Spring Boot", "Tailwind CSS", "MySQL", "Framer Motion", "JWT"],
      liveUrl: "https://github.com/shuklaji-coder",
      githubUrl: "https://github.com/shuklaji-coder",
      featured: true,
      bentoSpan: "lg:col-span-4",
      caseStudy: {
        overview:
          "CafeWala redefines the digital dining experience with an artisanal café menu, custom dietary filters, instant table bookings, and streamlined kitchen dispatch.",
        challenge:
          "Creating an appetite-inducing visual experience that loads instantly on mobile networks while handling rapid cart modifications and customizations.",
        solution:
          "Crafted high-speed reactive UI components in React and Tailwind with Framer Motion transitions, backed by a Spring Boot order processing pipeline and MySQL storage.",
        architecture: [
          "Micro-interaction heavy frontend featuring smooth category tab transitions and instant cart recalculation.",
          "Normalized MySQL schema for menu variants, customization add-ons, and table reservations.",
          "JWT authenticated user profiles with previous order re-ordering shortcuts.",
        ],
        metrics: [
          { label: "Menu Load Time", value: "0.3s" },
          { label: "Cart Abandonment", value: "Reduced 28%" },
          { label: "Mobile Conversion", value: "+32%" },
          { label: "Video Preview", value: "Available" },
        ],
        keyFeatures: [
          "Interactive menu categories with real-time vegetarian & allergy filters",
          "Custom beverage modifier builder (size, milk type, sweetness, add-ons)",
          "Table reservation booking system with time-slot management",
          "Live order tracking and seamless checkout flow",
        ],
      },
    },
    {
      id: "mits-sadhana-portal",
      slug: "mits-sadhana-academic-portal",
      title: "MITS Sadhana",
      subtitle: "Institutional Academic & Student Lifecycle Management Portal",
      category: "Android Apps",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "/videos/mits-sadhana.mp4",
      description:
        "Institutional academic portal facilitating student course registrations, marks entry, attendance telemetry, and faculty administrative workflows.",
      tech: ["Java 17", "Spring Boot 3", "React", "MySQL", "Spring Security", "Tailwind CSS"],
      liveUrl: "https://mitssadhana.in/",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.rohan2342.MitSadhana&pcampaignid=web_share",
      githubUrl: "https://github.com/shuklaji-coder",
      featured: true,
      bentoSpan: "lg:col-span-5",
      caseStudy: {
        overview:
          "MITS Sadhana is a mission-critical higher-education management portal that centralizes student academic records, exam evaluations, and administrative oversight.",
        challenge:
          "Managing complex institutional hierarchies (HODs, Professors, Students, Administrators) with distinct permissions and high concurrent grading submissions.",
        solution:
          "Engineered strict Spring Security role-based access control, relational database triggers for grade point average (GPA) calculations, and responsive dashboards.",
        architecture: [
          "Multi-role authorization architecture ensuring strict separation between faculty grading and student portals.",
          "High-performance MySQL relational schema optimized for batch student registrations and marksheets.",
          "Intuitive React admin console with exportable CSV/PDF institutional reports.",
        ],
        metrics: [
          { label: "Role Segregation", value: "4-Tier RBAC" },
          { label: "Marksheet Gen", value: "< 1s Batch" },
          { label: "Data Integrity", value: "100% ACID" },
          { label: "Video Preview", value: "Available" },
        ],
        keyFeatures: [
          "Multi-tier role based authentication for Students, Faculty, and Admin",
          "Automated grade calculation, GPA computation, and marksheet generation",
          "Attendance tracking module with percentage alerts and eligibility criteria",
          "Notice board broadcasting and academic calendar synchronization",
        ],
      },
    },
    {
      id: "aatmi-yogshala",
      slug: "aatmi-yogshala-wellness-platform",
      title: "Aatmi Yogshala",
      subtitle: "Holistic Wellness & Yoga Retreat Platform (Client Delivery)",
      category: "Client Project",
      isClientProject: true,
      thumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "/videos/aatmi-yogshala.mp4",
      description:
        "Production client platform engineered for Aatmi Yogshala, featuring responsive class scheduling, interactive retreat showcases, automated inquiry dispatch, and SEO optimization.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UX"],
      liveUrl: "https://aatmivyogshala.com/",
      githubUrl: "https://github.com/shuklaji-coder",
      featured: true,
      bentoSpan: "lg:col-span-7",
      caseStudy: {
        overview:
          "Aatmi Yogshala is a live commercial client web platform built to showcase traditional yogic practices, teacher training programs, and retreat retreats with high conversion rates.",
        challenge:
          "Balancing serene, spiritual aesthetic brand identity with fast load times, flawless cross-device responsiveness, and streamlined inquiry dispatch.",
        solution:
          "Engineered an Awwwards-caliber responsive web application using Next.js, TypeScript, and Tailwind CSS with custom micro-animations and structured SEO metadata.",
        architecture: [
          "Client-first responsive architecture achieving 95+ mobile performance score.",
          "High-definition video showcase and interactive program catalog.",
          "Instant lead-generation channels with WhatsApp and direct email routing.",
          "Dynamic program schedules and retreat gallery with smooth touch-friendly carousels.",
        ],
        metrics: [
          { label: "Client Status", value: "Live Client" },
          { label: "Performance", value: "98/100" },
          { label: "Production Domain", value: "aatmivyogshala.com" },
          { label: "SEO Rating", value: "100%" },
        ],
        keyFeatures: [
          "Live commercial client platform on aatmivyogshala.com",
          "HD video demo showcase and interactive program catalog",
          "Direct WhatsApp & instant inquiry booking workflows",
          "Mobile-first responsive architecture optimized for all screen sizes",
        ],
      },
    },
    {
      id: "sasta-bazaar",
      slug: "sasta-bazaar-ecommerce",
      title: "AI Sasta Bazaar",
      subtitle: "Multi-Vendor E-Commerce Platform with Spring AI & JWT",
      category: "E-Commerce",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      description:
        "A scalable multi-vendor full-stack marketplace built with Spring Boot 3, React, TypeScript, and MySQL featuring Spring AI recommendations and 3-tier JWT role-based access control.",
      tech: ["Spring Boot 3", "React", "TypeScript", "MySQL", "Spring Security", "Spring AI", "JWT"],
      liveUrl: "https://github.com/shuklaji-coder",
      githubUrl: "https://github.com/shuklaji-coder",
      featured: true,
      bentoSpan: "lg:col-span-6",
      caseStudy: {
        overview:
          "Sasta Bazaar is a multi-vendor commercial ecosystem that empowers independent sellers to manage catalogs, process orders, and benefit from AI-assisted search and recommendations.",
        challenge:
          "Enforcing strict tenant isolation between Admins, Sellers, and Customers while keeping API response times minimal across large product catalogs.",
        solution:
          "Built a stateless Spring Security 6 architecture with JWT authentication, role-based authorization (Admin/Seller/User), and Spring AI for semantic search and product insights.",
        architecture: [
          "Spring Boot 3 backend with RESTful API endpoints and Spring Security JWT filters.",
          "Spring AI integration providing smart query understanding and catalog recommendations.",
          "Normalized MySQL relational schema with indexing on order tables and seller entities.",
          "Responsive React and Tailwind CSS admin dashboard for catalog and revenue management.",
        ],
        metrics: [
          { label: "Access Control", value: "3-Tier RBAC" },
          { label: "AI Integration", value: "Spring AI" },
          { label: "Auth Mechanism", value: "Stateless JWT" },
          { label: "Database Engine", value: "MySQL 8.0" },
        ],
        keyFeatures: [
          "Multi-vendor seller onboarding with dedicated store dashboards",
          "JWT authentication with role-based access control (Admin/Seller/User)",
          "Spring AI powered intelligent search and contextual recommendations",
          "Secure RESTful APIs with integrated payment gateway workflows",
        ],
      },
    },
    {
      id: "sdac-infotech-suite",
      slug: "sdac-infotech-enterprise",
      title: "Sdac Production Suite",
      subtitle: "Full-Stack Enterprise Applications with Clean MVC",
      category: "Full-Stack SaaS",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      description:
        "Scalable full-stack web applications developed during tenure at Sdac Infotech (Mumbai), featuring performance-tuned REST APIs, React interfaces, and clean MVC architecture.",
      tech: ["Java", "Spring Boot", "React", "MySQL", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://github.com/shuklaji-coder",
      githubUrl: "https://github.com/shuklaji-coder",
      featured: true,
      bentoSpan: "lg:col-span-6",
      caseStudy: {
        overview:
          "Engineered at Sdac Infotech (Mumbai) to support enterprise business workflows with high data integrity and minimal latency.",
        challenge:
          "Reducing slow database query responses and modernizing fragmented legacy frontend screens into unified, responsive UI components.",
        solution:
          "Performed code refactoring, query index tuning, and implemented clean MVC design patterns in Spring Boot coupled with a modular React/Tailwind frontend.",
        architecture: [
          "Clean MVC architecture ensuring loose coupling and maintainable codebase.",
          "Optimized RESTful APIs bridging React frontend and Spring Boot backend.",
          "Performance tuning and query refactoring across MySQL and MongoDB databases.",
        ],
        metrics: [
          { label: "API Latency Cut", value: "Noticeable Drop" },
          { label: "Page Load Speed", value: "Optimized" },
          { label: "Methodology", value: "Agile / Scrum" },
          { label: "Code Quality", value: "Clean MVC" },
        ],
        keyFeatures: [
          "Responsive, dynamic UI components in React and Tailwind CSS",
          "Secure REST APIs enabling smooth frontend-to-backend communication",
          "Database query tuning for high-volume transactions",
          "Active sprint planning, code reviews, and Agile team delivery",
        ],
      },
    },
  ],

  services: [
    {
      id: "fullstack-engineering",
      number: "01",
      title: "Full-Stack Web Engineering",
      tagline: "End-to-end modern web applications built for speed, security, and enterprise reliability.",
      description:
        "From architectural schema design to responsive deployment, I build robust full-stack applications using Spring Boot 3, React, Next.js, and MySQL. Every endpoint is engineered for speed and clean maintainability.",
      deliverables: [
        "Full-stack React / Next.js frontend with Tailwind CSS",
        "Spring Boot RESTful APIs with type-safety & DTO patterns",
        "Database schema design (MySQL, PostgreSQL, MongoDB)",
        "Responsive, mobile-optimized UI across all devices",
      ],
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
      idealFor: "Startups, enterprises, and teams needing reliable full-stack engineering with clean code.",
      timeline: "2 - 5 Weeks",
    },
    {
      id: "backend-microservices",
      number: "02",
      title: "Spring Boot APIs & Security",
      tagline: "Secure Java microservices with JWT authentication, RBAC, and clean MVC architecture.",
      description:
        "I design robust backend architectures that ensure high throughput and bulletproof security. Stateless JWT filters, role-based access control, cryptographic algorithms, and database connection pooling.",
      deliverables: [
        "Secure RESTful APIs with JWT authentication",
        "Role-based access control (Admin, Seller, User)",
        "Database integration with JPA / Hibernate & MySQL",
        "API performance tuning and latency optimization",
      ],
      techStack: ["Java 17/21", "Spring Boot 3", "Spring Security", "JWT", "Hibernate", "MySQL"],
      idealFor: "Companies needing secure backend architectures, payment integrations, or API optimization.",
      timeline: "3 - 6 Weeks",
    },
    {
      id: "offline-mesh-cryptography",
      number: "03",
      title: "Cryptographic & Mesh Systems",
      tagline: "Specialized offline transaction systems, encryption pipelines, and concurrency controls.",
      description:
        "Leveraging asymmetric RSA-OAEP and symmetric AES-256-GCM encryption, I architect offline and distributed transaction flows that eliminate replay attacks using SHA-256 hash concurrency controls.",
      deliverables: [
        "RSA-OAEP + AES-256-GCM cryptographic pipelines",
        "SHA-256 concurrency control & replay protection",
        "Offline-first state synchronization mechanisms",
        "Real-time visual monitoring dashboards",
      ],
      techStack: ["Java", "Spring Boot", "RSA / AES", "SHA-256", "H2", "React"],
      idealFor: "Fintech, security-critical systems, and applications requiring offline or zero-trust mechanics.",
      timeline: "3 - 6 Weeks",
    },
    {
      id: "devops-cloud",
      number: "04",
      title: "Cloud & Containerized DevOps",
      tagline: "Docker containerization, Kubernetes orchestration, and AWS S3 integration.",
      description:
        "I streamline development and production workflows with multi-stage Docker builds, Kubernetes manifests, AWS S3 cloud storage, and automated Postman API test suites.",
      deliverables: [
        "Docker containerization for Spring Boot & React apps",
        "AWS S3 cloud storage integration for media & documents",
        "Postman API automated test collections",
        "Maven build pipelines & Git collaboration workflows",
      ],
      techStack: ["Docker", "Kubernetes", "AWS S3", "Maven", "Postman", "Git"],
      idealFor: "Teams aiming for smooth deployments, cloud asset management, and predictable CI/CD.",
      timeline: "2 - 4 Weeks",
    },
  ],

  process: [
    {
      number: "01",
      title: "Requirement & Architecture Design",
      duration: "Stage 1",
      tagline: "Defining data contracts, entity schemas, and security matrices.",
      description:
        "We dissect application goals, map relational schemas in MySQL/PostgreSQL, establish RESTful endpoint contracts, and design JWT security tiers before writing code.",
      tasks: [
        "ERD database schema modeling (MySQL / MongoDB)",
        "RESTful API contract definition & security scope (JWT / RBAC)",
        "Architecture diagram & component hierarchy planning",
        "Agile sprint planning and milestone roadmap",
      ],
      outcome: "A comprehensive technical specification document and database schema.",
    },
    {
      number: "02",
      title: "Backend Engineering & Security",
      duration: "Stage 2",
      tagline: "Building robust Spring Boot services with clean MVC architecture.",
      description:
        "Development of core business logic in Java / Spring Boot 3 with JPA repositories, Spring Security filters, cryptographic services, and database indexing.",
      tasks: [
        "Spring Boot 3 REST controller & service layer implementation",
        "Spring Security 6 stateless JWT authentication & role filters",
        "JPA / Hibernate entity relationships & query optimization",
        "Postman collection test harness setup for API verification",
      ],
      outcome: "Fully functional, secure, and tested RESTful API backend.",
    },
    {
      number: "03",
      title: "Frontend Development & UI Polish",
      duration: "Stage 3",
      tagline: "Responsive React & Tailwind CSS interfaces with fluid UX.",
      description:
        "Crafting intuitive, accessible user interfaces in React. Connecting secure API endpoints, building dashboards, and ensuring pixel-perfect responsiveness across mobile and desktop.",
      tasks: [
        "Component development with React, TypeScript, and Tailwind CSS",
        "Axios / Fetch API integration with JWT token refresh handlers",
        "State management and form validations",
        "Framer Motion micro-interactions and loading skeletons",
      ],
      outcome: "An engaging, responsive full-stack staging application.",
    },
    {
      number: "04",
      title: "Optimization, Testing & Hardening",
      duration: "Stage 4",
      tagline: "API performance tuning, latency cuts, and security verification.",
      description:
        "Following clean code principles and performance tuning to eliminate bottlenecks. Verifying cross-device responsiveness, JWT expiration security, and sub-second page loads.",
      tasks: [
        "Database query tuning & connection pool optimization",
        "Security audit: input sanitization, CORS, and role barriers",
        "Cross-browser and mobile device verification",
        "Automated Postman regression testing",
      ],
      outcome: "Hardened, high-performance production-ready software.",
    },
    {
      number: "05",
      title: "Containerization & Cloud Launch",
      duration: "Stage 5",
      tagline: "Docker deployment, AWS S3 integration, and monitoring.",
      description:
        "Packaging the application into lightweight Docker containers, configuring cloud storage with AWS S3, and executing seamless production deployment.",
      tasks: [
        "Multi-stage Dockerfile creation for minimal container footprint",
        "AWS S3 bucket configuration and environment secret management",
        "Production deployment & DNS mapping",
        "Comprehensive code walkthrough & technical documentation",
      ],
      outcome: "Your product live in production, resilient, secure, and maintainable.",
    },
  ],

  testimonials: [
    {
      id: "1",
      quote:
        "Rohan demonstrated exceptional technical capability during his internship at Sdac Infotech. He optimized our REST API response times, followed strict clean code MVC architecture, and built dynamic React interfaces that our clients loved.",
      author: "Technical Lead",
      role: "Engineering Supervisor",
      company: "Sdac Infotech (Mumbai)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      metric: "Significant API Latency Drop",
    },
    {
      id: "2",
      quote:
        "Rohan's engineering solution at the hackathon was an absolute standout. Delivering high-concurrency architecture with cryptographic integrity and clean system design proved his deep mastery of systems programming, concurrency, and security.",
      author: "Hackathon Jury Panel",
      role: "Lead Evaluator",
      company: "Smart India Hackathon (SIH)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      metric: "1st Prize Winner (SIH)",
    },
    {
      id: "3",
      quote:
        "Rohan's grasp on Java, Spring Boot 3, and full-stack integration is remarkable. Whether it's multi-vendor role-based access control or Docker containerization, his code is disciplined, well-commented, and production-ready.",
      author: "Senior Software Architect",
      role: "Faculty Mentor",
      company: "Thakur College of Engineering",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      metric: "8.48 Academic CGPA",
    },
  ],

  faq: [
    {
      question: "What is your primary technology stack?",
      answer:
        "My core stack is Java (Java 17/21), Spring Boot 3, Spring Security, Hibernate/JPA, React, TypeScript, and MySQL/PostgreSQL. I also work with MongoDB, Next.js, Docker, AWS S3, and Python.",
    },
    {
      question: "What was your role at Sdac Infotech?",
      answer:
        "As a Full Stack Developer Intern at Sdac Infotech (Mumbai), I developed scalable full-stack applications using Java, Spring Boot, React, and MySQL, refactored code to reduce API response times, and built responsive UIs following clean MVC architecture.",
    },
    {
      question: "Tell me about your hackathon achievements.",
      answer:
        "I won 1st prize at the Internal Smart India Hackathon (SIH) for designing innovative technical solutions, and qualified as a Finalist at Mumbai Hacks 2025. I actively engineer high-impact solutions under tight hackathon deadlines as well as real-world production client platforms.",
    },
    {
      question: "Are you available for full-time roles or freelance contracts?",
      answer:
        "Yes! I am based in Mumbai, India and available for both full-time software engineering roles as well as selective high-impact freelance/contract engagements worldwide.",
    },
  ],
};
