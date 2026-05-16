import { memo, useEffect, useRef, useState } from "react";
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
  startIndex,
  visible,
}: {
  title: string;
  caption: string;
  tools: ChipProps[];
  startIndex: number;
  visible: boolean;
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
        {tools.map((tool, i) => (
          <Chip
            key={tool.icon}
            icon={tool.icon}
            darkIcon={tool.darkIcon}
            name={tool.name}
            delay={visible ? (startIndex + i) * 60 : undefined}
          />
        ))}
      </div>
    </div>
  );
};

const ToolSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-6">
      <Tool
        title="Software"
        tools={softwareTools}
        caption="Trusty tools that I build software with"
        startIndex={0}
        visible={visible}
      />
      <Tool
        title="Frontend"
        tools={frontendTools}
        caption="Can't build a website without these tools"
        startIndex={4}
        visible={visible}
      />
      <Tool
        title="Backend"
        tools={backendTools}
        caption="The magic behind the scenes"
        startIndex={14}
        visible={visible}
      />
      <Tool
        title="Other Tech"
        tools={otherTechTools}
        caption="Where I dabble in other technologies"
        startIndex={19}
        visible={visible}
      />
    </div>
  );
};

export default memo(ToolSection);
