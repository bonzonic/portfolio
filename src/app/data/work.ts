export interface WorkExperience {
  imageSrc: string;
  title: string;
  company: string;
  companyBlurb?: string;
  duration: string;
  technologies: string[];
  // Wrap words in *asterisks* to render them in italics on the page
  highlights: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    imageSrc: "trontal.jpg",
    title: "Full Stack Developer",
    company: "Trontal Group",
    companyBlurb:
      "2-year startup developing a platform for advanced trading analytics, including multi-exchange data aggregation and real-time market insights",
    duration: "Jun 2025 - Present",
    technologies: ["Vue", "TypeScript", "Express.js", "WebSockets", "WebGL"],
    highlights: [
      "Cut application load time from ~4s to ~1.5s through bundle analysis, eliminating barrel imports and unused dependencies, code splitting, and lazy-loading heavy charts",
      "Built a real-time crypto price alerting system using *WebSockets* for in-app push, plus email/webhook delivery for offline users — 60,000+ alerts created since launch in Aug 2025",
      "Core maintainer of *kScript*, an in-house scripting language for trading indicators with 140+ user-written scripts; designed concurrent data fetching with retry/fallback so indicator results stay consistent on unreliable networks",
      "Integrated execution trading via a third-party provider connecting to Binance, Bybit, and Hyperliquid, supporting 100+ users; load tested with *k6*",
      "Used AI agents and locally built *MCP* tools to monitor and automatically fix features such as price alerts, keeping 99.99% uptime for users",
    ],
  },
  {
    imageSrc: "ds.png",
    title: "Full Stack Developer",
    company: "Dassault Systèmes",
    duration: "Dec 2023 - Jun 2025",
    technologies: ["React", "TypeScript", "Java", "Spring Boot"],
    highlights: [
      "Led a frontend team of 3, owning task planning, code reviews, and delivery quality; partnered with Product Managers to identify risks early and ship stable, predictable releases",
      "Raised test coverage from 55% to 95% with comprehensive unit tests in *React Testing Library* and *Jasmine*; introduced reusable page objects to keep end-to-end tests maintainable",
      "Implemented core features for a logistics visualization platform — managing items across stock locations and organizing them into planning scopes — across *React*, *TypeScript*, *Java* and *Spring Boot*, including REST APIs and access control for resource ownership and visibility",
      "Joined the committee for the annual team-building event, coordinating with vendors for shirt production and event logistics",
    ],
  },
  {
    imageSrc: "plentisoft.png",
    title: "Web Developer Intern",
    company: "Plentisoft Sdn Bhd",
    duration: "Nov 2022 - Feb 2023",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Angular", "Express"],
    highlights: [
      "Developed static web pages from scratch using *HTML, SASS, Tailwind CSS, JavaScript* and deployed to WordPress using *SFTP*",
      "Collected data such as time spent on the site, revenue generated/day and active users/day into a *PostgreSQL* database using *Express*, then displayed it using *Angular, Angular Material* and *Apache ECharts*",
      "Scraped text from heading tags with *Puppeteer* and *Cheerio*, using proxies to get past bot checks (Cloudflare's security checks still won)",
    ],
  },
];

export const stripEmphasis = (text: string) => text.replace(/\*/g, "");
