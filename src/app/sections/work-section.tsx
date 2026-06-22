import { memo } from "react";
import Image from "next/image";
import Chip, { ChipProps } from "../components/chip";
import ScrollReveal from "../components/scroll-reveal";

interface WorkProps {
  imageSrc: string;
  title: string;
  company: string;
  duration: string;
  technologies: ChipProps[];
  children: React.ReactNode;
}

const Work = ({
  imageSrc,
  title,
  company,
  duration,
  technologies,
  children,
}: WorkProps) => {
  return (
    <div className="bg-top-background-white dark:bg-space-gray rounded-2xl p-4 flex flex-row gap-[30px] border-neutral-700 border shadow-md items-center hover:scale-[1.02] hover:shadow-xl transition-transform duration-200">
      <Image
        className="rounded-2xl min-w-[240px] hidden xl:block"
        src={`/work/${imageSrc}`}
        width={"240"}
        height={"310"}
        alt={"Handsome picture of Nicholas"}
      ></Image>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between">
          <h6>
            <b>{title}</b>
          </h6>
          <p>
            <i>{duration}</i>
          </p>
        </div>
        <p>{company}</p>
        <div className="mt-3">{children}</div>
        <div className="flex flex-row flex-wrap gap-2 sm:gap-4 mt-4">
          {technologies.map((tech) => (
            <Chip key={tech.name} {...tech}></Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => (
  <>
    <ScrollReveal delay={500}>
      <Work
        imageSrc="trontal.jpg"
        title="Full Stack Developer"
        company="Trontal Group (2-year startup developing a platform for advanced trading analytics, including multi-exchange data
aggregation and real-time market insights)"
        duration="Jun 2025 - Present"
        technologies={[
          { name: "Vue" },
          { name: "TypeScript" },
          { name: "Express.js" },
          { name: "WebSockets" },
          { name: "WebGL" },
        ]}
      >
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            Optimized application load time from ~4s to ~1.5s through bundle
            analysis, eliminating barrel imports, code splitting, and lazy
            loading
          </li>
          <li>
            Integrated execution trading via a third-party provider connecting
            to Binance, Bybit, and Hyperliquid, supporting 100+ users; conducted
            load testing with <i>k6</i>
          </li>
          <li>
            Built a real-time crypto price alerting system using{" "}
            <i>WebSockets</i> for in-app alerts and backend APIs for email
            delivery — 60,000+ alerts created
          </li>
          <li>
            Core contributor to <i>kScript</i>, a scripting language for trading
            indicators with 140+ user-written scripts; architected async data
            flow handling, retry/fallback mechanisms, and polling strategies
          </li>
        </ul>
      </Work>
    </ScrollReveal>
    <ScrollReveal delay={600}>
      <Work
        imageSrc="ds.png"
        title="Software Engineer Associate"
        company="Dassault Systèmes"
        duration="Dec 2023 - Present"
        technologies={[
          { name: "React" },
          { name: "TypeScript" },
          { name: "Java" },
          { name: "Spring Boot" },
        ]}
      >
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            Act as "Frontend Lead" in a frontend team of 3 for the application
            after a year, overseeing frontend tasks, peer reviewing FE code, and
            mitigating risks with the Product Manager
          </li>
          <li>
            Developed comprehensive unit tests using{" "}
            <i>React Testing Library</i> and <i>Jasmine</i> to ensure code
            quality and reliability, going from 55% -&gt; 95% coverage with the
            team. Created reusable page objects to streamline the end-to-end
            testing process and improve maintainability.
          </li>
          <li>
            Became the committee for the annual team-building event,
            coordinating with vendors for shirt production and event logistics.
          </li>
        </ul>
      </Work>
    </ScrollReveal>
    <ScrollReveal delay={700}>
      <Work
        imageSrc="plentisoft.png"
        title="Web Developer Intern"
        company="Plentisoft Sdn Bhd"
        duration="Nov 2022 - Feb 2023"
        technologies={[
          { name: "HTML" },
          { name: "Tailwind CSS" },
          { name: "JavaScript" },
          { name: "Angular" },
          { name: "Express" },
        ]}
      >
        <ul className="list-disc list-inside flex flex-col gap-4">
          <li>
            Developed static web pages from scratch using
            <i> HTML, SASS, Tailwind CSS, JavaScript</i> and deployed to
            WordPress using <i>SFTP</i>
          </li>
          <li>
            Collected data such as time spent on the site, revenue
            generated/day, active users/day and stored them into a{" "}
            <i>PostgreSQL</i> database using <i>Express</i>. Afterwards,
            displaying the data on a website using{" "}
            <i>Angular, Angular Material</i> and <i>Apache ECharts</i>
          </li>
          <li>
            Scraped text from heading tags using libraries such as{" "}
            <i>Puppeteer and Cheerio</i> and used proxies to bypass bot checks.
            Unfortunately, was not able to bypass security checks from
            Cloudflare.
          </li>
        </ul>
      </Work>
    </ScrollReveal>
  </>
);

export default memo(WorkSection);
