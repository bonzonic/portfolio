import Chip, { ChipProps } from "../components/chip";
import {
  softwareTools,
  frontendTools,
  backendTools,
  otherTechTools,
} from "../data/tool";

const Tool = ({
  title,
  caption,
  tools,
}: {
  title: string;
  caption: string;
  tools: ChipProps[];
}) => {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left">
      <div>
        <h6>
          <b>{title}</b>
        </h6>
        <p className="text-xs">{caption}</p>
      </div>
      <div className="flex flex-row gap-4 flex-wrap justify-center md:justify-start">
        {tools.map((tool) => (
          <Chip key={tool.icon} icon={tool.icon} name={tool.name} />
        ))}
      </div>
    </div>
  );
};

const ToolSection = () => (
  <div className="flex flex-col gap-6">
    <Tool
      title="Software"
      tools={softwareTools}
      caption="Trusty tools that I build software with"
    ></Tool>
    <Tool
      title="Frontend"
      tools={frontendTools}
      caption="Can't build a website without these tools"
    ></Tool>
    <Tool
      title="Backend"
      tools={backendTools}
      caption="The magic behind the scenes"
    ></Tool>
    <Tool
      title="Other Tech"
      tools={otherTechTools}
      caption="Where I dabble in other technologies"
    ></Tool>
  </div>
);

export default ToolSection;
