import { Fragment, memo } from "react";
import Image from "next/image";
import Chip from "../components/chip";
import ScrollReveal from "../components/scroll-reveal";
import { WorkExperience, workExperiences } from "../data/work";

// Renders *word* as italics, matching the emphasis used in the data file
const Emphasis = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*[^*]+\*)/).map((part, i) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <i key={i}>{part.slice(1, -1)}</i>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    )}
  </>
);

const Work = ({
  imageSrc,
  title,
  company,
  companyBlurb,
  duration,
  technologies,
  highlights,
}: WorkExperience) => {
  return (
    <div className="bg-top-background-white dark:bg-space-gray rounded-2xl p-4 flex flex-row gap-[30px] border-neutral-700 border shadow-md items-center hover:scale-[1.02] hover:shadow-xl transition-transform duration-200">
      <Image
        className="rounded-2xl min-w-[240px] hidden xl:block"
        src={`/work/${imageSrc}`}
        width={"240"}
        height={"310"}
        alt={`${company} logo`}
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
        <p>{companyBlurb ? `${company} (${companyBlurb})` : company}</p>
        <ul className="mt-3 list-disc list-inside flex flex-col gap-2">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Emphasis text={highlight} />
            </li>
          ))}
        </ul>
        <div className="flex flex-row flex-wrap gap-2 sm:gap-4 mt-4">
          {technologies.map((tech) => (
            <Chip key={tech} name={tech}></Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => (
  <>
    {workExperiences.map((work, i) => (
      <ScrollReveal key={work.company} delay={500 + i * 100}>
        <Work {...work} />
      </ScrollReveal>
    ))}
  </>
);

export default memo(WorkSection);
