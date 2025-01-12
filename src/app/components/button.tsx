import Image from "next/image";
import { useEffect } from "react";

export enum ButtonProfile {
  LinkedIn,
  GitHub,
  Resume,
}

interface ButtonValue {
  name: string;
  url: string;
  image: string;
  download: boolean;
}

const buttonProfileMapToText = new Map<ButtonProfile, ButtonValue>([
  [
    ButtonProfile.GitHub,
    {
      name: "GitHub",
      url: "https://github.com/bonzonic",
      image: "/github.png",
      download: false,
    },
  ],
  [
    ButtonProfile.LinkedIn,
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yi-zhen-nicholas-wong-1327b0207/",
      image: "/linkedin.png",
      download: false,
    },
  ],
  [
    ButtonProfile.Resume,
    {
      name: "Resume",
      url: "/WongYiZhenNicholas_Resume.pdf",
      image: "/resume.png",
      download: true,
    },
  ],
]);

export default function NavigationButton({
  buttonProfile,
}: {
  buttonProfile: ButtonProfile;
}) {
  const buttonValue = buttonProfileMapToText.get(buttonProfile)!;

  return (
    <a href={buttonValue.url} target="_blank" download={buttonValue.download}>
      <div className="bg-blue-300 flex flex-row py-1 px-4 text-white rounded-md items-center">
        <h6 className="text-lg">{buttonValue.name}</h6>
        <Image
          className="ml-1"
          src={buttonValue.image}
          alt={`${buttonValue.name} Icon`}
          width={"20"}
          height={"20"}
        />
      </div>
    </a>
  );
}
