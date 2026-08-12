import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Biswajit Sarkar",
  initials: "BS",
  url: "https://biswa007.vercel.app/",
  location: "West Bengal, India",
  locationLink: "https://www.google.com/maps/place/west+bengal",
  description:
    "a 20 engineer.",
  summary: `Full-stack developer building modern, interactive web apps with TypeScript, React, and Next.js, NodeJs and PostgreSQL. I care about clean UI, solid architecture, and details that make products feel right—not just work.


  
Stack-agnostic by principle, design-driven by instinct. I learn by building, breaking things, and fixing them properly. Open to collaboration and projects that value craft over buzzwords`,
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Python",
    "C",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "VS Code",
    "Figma",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Prisma",
    "AWS",
    "Linux",
    "Vercel",
    "Render"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "biswajitsarkar0485@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biswajit-sarkar-007",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/biswajit007/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/biswa_sarkar007",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:biswajitsarkar0458@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
     {
      company: "Gluonweb – Web and Technology Developer",
      href: "https://www.gluonweb.com/",
      badges: ["On Site"],
      location: "On Site",
      title: "Node.js Web Developer",
      logoUrl: "/guloweb.png",
      start: "February 2026",
      end: "Present",
      description:
        "I am building here production ready frontend application with responsive design and modern UI/UX and make it interactive with latest technology.",
    },
    {
      company: "Hacktoberfest '25",
      href: "https://hacktoberfest.com/",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/hacktoberfest.png",
      start: "October 2025",
      end: "November 2025",
      description:
        "Merged 4+ PRs enhancing interactive UI components (buttons, navbars, hero sections) and collaborated via GitHub issues, PR reviews, and community discussions.",
    },
    {
      company: "The Entrepreneurship Network (TEN)",
      href: "https://www.entrepreneurshipnetwork.net/",
      badges: ["Remote"],
      location: "Remote",
      title: "React Developer Intern",
      logoUrl: "./ten.jpg",
      start: "July 2025",
      end: "October 2025",
      description:
        "Led frontend development, creating responsive and scalable UIs with React.js and Tailwind CSS. Built and optimized reusable components to enhance performance and overall user experience. Collaborated in an agile remote team using Git and code reviews to deliver high-quality features.",
    },
    {
      company: "GirlScript Summer of Code '24",
      href: "https://gssoc.girlscript.tech/",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/gssoc.jpg",
      start: "October 2024",
      end: "December 2024",
      description:
        "Contributed to 10+ repositories, merged 100+ PRs improving UI/UX, layouts, responsiveness, and accessibility. Ranked 41 among 40,000+ participants.",
    },
    {
      company: "Hacktoberfest '24",
      href: "https://hacktoberfest.com/",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/hacktoberfest.png",
      start: "October 2024",
      end: "November 2024",
      description:
        "Merged 4+ PRs enhancing interactive UI components (buttons, navbars, hero sections) and collaborated via GitHub issues, PR reviews, and community discussions.",
    },
  ],

  education: [
    {
      school: "Global Institute of Management and Technology",
      href: "https://gimt-india.com/",
      degree: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
      logoUrl: "/gimt.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Badkulla United Academy High School",
      href: "https://school.banglarshiksha.gov.in/ws/website/index/19101218004",
      degree: "Higher Secondary (Science Stream) - Class 11: 80% | Class 12: 63%",
      logoUrl: "/school.jpg",
      start: "2015",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Hello AI - AI Content Generator",
      href: "https://hello-ai-01.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Developed full-stack AI platform to generate social media content (Twitter, LinkedIn, Instagram) using Gemini AI. Integrated Clerk authentication, Stripe payments, and a points-based content system. Achieved 30+ users in the first week with positive feedback for responsive UI.",
      technologies: [
        "Next.js 15",
        "PostgreSQL",
        "Neon",
        "Drizzle ORM",
        "Clerk",
        "Stripe",
        "Mailtrap",
        "Gemini AI"
      ],
      links: [
        {
          type: "Website",
          href: "https://hello-ai-01.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswajit-sarkar-007/hello-ai",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/hello_ai.png",
      video: "",
    },
   {
  title: "Paper – Social Infrastructure Engineering",
  href: "https://white-theme-web.vercel.app/",
  dates: "2025",
  active: true,
  description:
    "Designed and built a high-end, architectural social media scheduling and orchestration platform for growth teams and engineers. Focused on infrastructure-grade UI, precision-driven layouts, and scalable visualization for coordinated publishing workflows.",
  technologies: [
    "React 19",
    "TypeScript (Strict Mode)",
    "Tailwind CSS v4",
    "Vite 6",
    "Recharts",
    "Lucide React"
  ],
  links: [
    {
      type: "Website",
      href: "https://white-theme-web.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/biswajit-sarkar-007/white-theme-web",
      icon: <Icons.github className="size-3" />,
    }
  ],
  image: "/paper.png",
  video: "",
},

{
  title: "Conductor – Multi-Platform Email Campaign Orchestrator",
  href: "https://dark-theme-web.vercel.app/",
  dates: "2025",
  active: true,
  description:
    "Built an industrial-grade control plane for unified email campaign orchestration. Enables organizations to design once and deploy across 15+ ESPs with consistent structure, centralized control, and analytics-ready architecture.",
  technologies: [
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Vite 6",
    "Inter Font"
  ],
  links: [
    {
      type: "Website",
      href: "https://dark-theme-web.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/biswajit-sarkar-007/dark-theme-web",
      icon: <Icons.github className="size-3" />,
    }
  ],
  image: "/conductor.png",
  video: "",
},

{
  title: "CryptoTrack – Professional Crypto Trading Platform",
  href: "https://crypto-track-ochre.vercel.app/",
  dates: "2024–2025",
  active: true,
  description:
    "Developed a professional cryptocurrency tracking and analysis platform featuring real-time market data, advanced charts, and TradingView-powered visualizations for active traders and market analysis.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "TradingView"
  ],
  links: [
    {
      type: "Website",
      href: "https://crypto-track-ochre.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/biswajit-sarkar-007/CryptoTrack",
      icon: <Icons.github className="size-3" />,
    }
  ],
  image: "/crypto.png",
  video: "",
},

    {
      title: "BudgetBee - Expense Tracker",
      href: "https://budgetbee.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Built a full-stack expense tracker with secure authentication, responsive design, and light/dark mode. Integrated AI-powered insights to analyze spending patterns and improve financial decision-making. Implemented interactive data visualizations using Chart.js.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Clerk",
        "OpenrouterAI API",
        "Chart.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://budgetbee.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswajit-sarkar-007/budgetbee",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/budget_bee.png",
      video: "",
    },
    {
      title: "HireLens-AI - Resume Analyzer",
      href: "https://hirelens-ai.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Built an AI-powered resume analyzer with ATS checks, content feedback, and real-time PDF parsing in a secure, responsive web app.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PDF.js",
        "puter.com"
      ],
      links: [
        {
          type: "Website",
          href: "https://hirelens-ai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biswajit-sarkar-007/hirelens-ai",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/hire_lens.png",
      video: "",
    },
  ],

  // hackathons: [
  //   {
  //     title: "Postman Student Expert",
  //     dates: "October 2024 - November 2024",
  //     location: "Online",
  //     description:
  //       "Official certification from Postman recognizing expertise in API development and testing.",
  //     image: "/postman.png",
  //     links: [
  //       {
  //         title: "Certificate",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Top 50 Contributor - GSSoC 2024",
  //     dates: "October 2024 - December 2024",
  //     location: "Online",
  //     description:
  //       "Ranked among Top 50 contributors out of 40,000+ participants. Successfully merged 140+ pull requests across various open-source repositories during community events and independent contributions.",
  //     image: "/gssoc.png",
  //     links: [
  //       {
  //         title: "Certificate",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "#",
  //       },
  //     ],
  //   },
  // ],


} as const;
