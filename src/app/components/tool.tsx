import { getSoftwareTools, getFrontendTools } from "../data/tool";
import Chip from "./chip";

export default function Tool({title, caption, tools}: {title: string, caption: string, tools: Chip[]}) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h6>
          <b>{title}</b>
        </h6>
        <p className="text-xs">{caption}</p>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {tools.map((tool) => (
          <Chip key={tool.icon} icon={tool.icon} name={tool.name} />
        ))}
      </div>
    </div>
  );
}
