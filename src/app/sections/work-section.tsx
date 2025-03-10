import Image from "next/image";
import Chip, { ChipProps } from "../components/chip";

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
    <div className="bg-top-background-white rounded-2xl p-4 flex flex-row gap-[30px] border-neutral-700 border shadow-md">
      <Image
        className="rounded-2xl w-[240px]"
        src={`/work/${imageSrc}`}
        width={"240"}
        height={"310"}
        alt={"Handsome picture of Nicholas"}
      ></Image>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h6>
            <b>{title}</b>
          </h6>
          <p>
            <i>{duration}</i>
          </p>
        </div>
        <p>{company}</p>
        <div className="mt-3">{children}</div>
        <div className="flex flex-row gap-4 mt-4">
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
          Act as “Frontend Lead” in a frontend team of 3 for the application
          after a year, overseeing frontend tasks, peer reviewing FE code, and
          mitigating risks with the Product Manager
        </li>
        <li>
          Developed comprehensive unit tests using <i>React Testing Library</i>{" "}
          and <i>Jasmine</i> to ensure code quality and reliability, going from
          55% -&gt; 95% coverage with the team. Created reusable page objects to
          streamline the end-to-end testing process and improve maintainability.
        </li>
        <li>
          Became the committee for the annual team-building event, coordinating
          with vendors for shirt production and event logistics.
        </li>
      </ul>
    </Work>
    <Work
      imageSrc="essfs.png"
      title="Full Stack Developer"
      company="Monash UReview"
      duration="Jul 2022 - Nov 2023 (Part Time)"
      technologies={[{ name: "React" }, { name: "TypeScript" }]}
    >
      <p>
        UReview is a team of less than 10 students working on apps such as Early
        Semester Student Feedback Form (ESSFS) to gather feedback from students
        regarding the lecturers and their style of teaching. The application is
        deployed in the School of IT and Engineering (1000+ students) and is
        sponsored by the University.
      </p>
      <ul className="list-disc list-inside flex flex-col gap-4 mt-4">
        <li>
          Revamping admin dashboard with a new UI and making it responsive
        </li>
        <li>
          Maintaining the application by solving simple bugs on <i>OAuth</i> and
          upgrading dependencies whenever necessary
        </li>
      </ul>
    </Work>
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
          <i> HTML, SASS, Tailwind CSS, JavaScript</i> and deployed to WordPress
          using <i>SFTP</i>
        </li>
        <li>
          Collected data such as time spent on the site, revenue generated/day,
          active users/day and stored them into a <i>PostgreSQL</i> database
          using <i>Express</i>. Afterwards, displaying the data on a website
          using <i>Angular, Angular Material</i> and <i>Apache ECharts</i>
        </li>
        <li>
          Scraped text from heading tags using libraries such as{" "}
          <i>Puppeteer and Cheerio</i> and used proxies to bypass bot checks.
          Unfortunately, was not able to bypass security checks from Cloudflare.
        </li>
      </ul>
    </Work>
  </>
);

export default WorkSection;
