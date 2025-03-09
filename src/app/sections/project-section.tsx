import React from "react";
import ButtonWithLink, { ButtonWithLinkProps } from "./button-with-link";
import Image from "next/image";
import { projects } from "../data/project";

export interface ProjectProps {
  title: string;
  children: React.ReactNode;
  imageSrcs: string[];
  buttons: ButtonWithLinkProps;
}

const ImagePartition = ({ images }: { images: string[] }) => {
  return (
    <div className="flex flex-row gap-2 justify-stretch">
      <Image
        src={images[0]}
        key={images[0]}
        width={600}
        height={600}
        alt={`Image ${images[0]}`}
      ></Image>
      {images.length > 1 && (
        <div className="flex flex-col gap-2">
          <Image
            src={images[1]}
            key={images[1]}
            width={600}
            height={600}
            alt={`Image ${images[1]}`}
          ></Image>
          {images.length > 2 && (
            <Image
              src={images[2]}
              key={images[2]}
              width={600}
              height={600}
              alt={`Image ${images[2]}`}
            ></Image>
          )}
        </div>
      )}
    </div>
  );
};

const Project = ({ title, children, imageSrcs, buttons }: ProjectProps) => {
  return (
    <div className="bg-top-background-white rounded-2xl px-4 pt-4 flex flex-col border-neutral-700 border shadow-md">
      <h5>
        <b>{title}</b>
      </h5>
      {children}
      <ImagePartition images={imageSrcs}></ImagePartition>
      <ButtonWithLink items={buttons.items}></ButtonWithLink>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <Project {...projects[0]}>
        <p>
          This portfolio is the very project you&apos;re exploring right now!
          🚀Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and{" "}
          <b>TypeScript</b>, it took me 2 months to bring it to life. Every
          component was crafted with performance and responsiveness in mind.
          Excited to keep pushing boundaries and refining my craft! 🌟
        </p>
        <br />
        <p>
          Before bringing my portfolio to life, I crafted its foundation in{" "}
          <b>Figma</b>! From random scribbles to a polished UI, every detail was
          planned for a seamless user experience.
        </p>
        <p> Check out the design process behind the project! 👇</p>
        <br />
        <p>
          #UIUX #Figma #Innovative #FirePortfolio🔥#Creative #NextJS
          #TailwindCSS
        </p>
        {/* {"This portfolio is the very project you're exploring right now! \ // TODO: remove this
            🚀Built with Next.js, Tailwind CSS, and TypeScript, it took me 2 months to bring it to life. Every component was crafted with \
            performance and responsiveness in mind. Excited to keep pushing boundaries  and refining my craft! 🌟\n\n" +
            "Before bringing my portfolio \
            to life, I crafted its \
            foundation in Figma!  From random scribbles to a polished UI, every \
            detail was planned for a seamless user experience.\n" +
            "Check out the \
            design process behind the project! 👇\n\n" +
            "#UIUX #Figma #PortfolioDesign \
            #Innovative #FirePortfolio🔥 #Creative #NextJS #TailwindCSS"} */}
      </Project>
      <Project {...projects[1]}>
        <p>
          As part of the CS50W course, I built this front-end project,
          replicating <i>Google Search</i>, <i>Google Image Search</i>, and{" "}
          <i>Google Advanced Search</i>. The goal was to recreate the UI while
          improving my skills in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
        </p>
        <p> Check it out and let me know your thoughts! 👇</p>
        <br />
        <p> #Frontend #CS50W #WebDevelopment #HTML #CSS #JavaScript</p>
      </Project>
    </div>
  );
};

export default ProjectSection;
