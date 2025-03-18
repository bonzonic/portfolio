import React, { useContext } from "react";
import Image from "next/image";
import ButtonWithLink, {
  ButtonWithLinkProps,
} from "../components/button-with-link";
import { PopupContext } from "../utils/main";
import { googleFePopup, PopupProps, portfolioPopup } from "../data/popup";

export interface ProjectProps {
  title: string;
  children: React.ReactNode;
  imageSrcs: string[];
  buttons: ButtonWithLinkProps[];
}

const ImagePartition = ({ images }: { images: string[] }) => {
  return (
    <div className="flex flex-row gap-2 justify-stretch">
      <Image
        src={`/popup/${images[0]}`}
        key={images[0]}
        width={600}
        height={600}
        alt={`Image ${images[0]}`}
      ></Image>
      {images.length > 1 && (
        <div className="flex flex-col gap-2">
          <Image
            src={`/popup/${images[1]}`}
            key={images[1]}
            width={600}
            height={600}
            alt={`Image ${images[1]}`}
          ></Image>
          {images.length > 2 && (
            <Image
              src={`/popup/${images[2]}`}
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

const Project = ({
  title,
  description,
  imageSrcs,
  buttons,
  comments,
}: PopupProps) => {
  const openPopup = useContext(PopupContext);

  return (
    <div
      className="bg-top-background-white rounded-2xl px-4 pt-4 flex flex-col border-neutral-700 border shadow-md cursor-pointer"
      onClick={() => {
        openPopup({
          title,
          description,
          imageSrcs,
          buttons,
          comments: comments,
        });
      }}
    >
      <h5>
        <b>{title}</b>
      </h5>
      <p className="whitespace-pre-line">{description}</p>
      <ImagePartition images={imageSrcs}></ImagePartition>
      <ButtonWithLink items={buttons}></ButtonWithLink>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <Project {...portfolioPopup}></Project>
      <Project {...googleFePopup}></Project>
    </div>
  );
};

export default ProjectSection;
