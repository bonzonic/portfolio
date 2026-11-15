import React, { useContext } from "react";
import Image from "next/image";
import ButtonWithLink, {
  ButtonWithLinkProps,
} from "../components/button-with-link";
import ScrollReveal from "../components/scroll-reveal";
import { DarkContext, PopupContext } from "../utils/main";
import { PopupProps, projects } from "../data/popup";

export interface ProjectProps {
  title: string;
  children: React.ReactNode;
  imageSrcs: string[];
  buttons: ButtonWithLinkProps[];
}

// Equal-sized preview tiles, cropped from the top so screenshots line up
const ImagePartition = ({ images }: { images: string[] }) => {
  const shown = images.slice(0, 3);
  return (
    <div
      className={`hidden sm:grid gap-3 mt-4 ${shown.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
    >
      {shown.map((image, i) => (
        <div
          key={image}
          className={`relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 aspect-[16/10] ${
            shown.length === 3 && i === 0 ? "row-span-2 aspect-auto" : ""
          }`}
        >
          <Image
            className="object-cover object-top"
            src={`/popup/${image}`}
            fill
            sizes="(min-width: 1280px) 560px, 50vw"
            alt={`Preview ${i + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

const Project = ({
  title,
  description,
  imageSrcs,
  buttons,
  comments,
}: PopupProps) => {
  const openPopup = useContext(PopupContext);

  return (
    <div className="bg-top-background-white dark:bg-space-gray rounded-2xl px-4 pt-4 flex flex-col border-neutral-700 border shadow-md cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-transform duration-200">
      <div
        onClick={() =>
          openPopup({ title, description, imageSrcs, buttons, comments })
        }
      >
        <h5>
          <b>{title}</b>
        </h5>
        <p className="whitespace-pre-line">{description}</p>
        <ImagePartition images={imageSrcs}></ImagePartition>
      </div>
      <ButtonWithLink items={buttons}></ButtonWithLink>
    </div>
  );
};

const ProjectSection = () => {
  const darkMode = useContext(DarkContext);

  return (
    <div className="flex flex-col gap-10">
      {projects(darkMode).map((project, i) => (
        <ScrollReveal key={project.title} delay={500 + i * 100}>
          <Project {...project}></Project>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ProjectSection;
