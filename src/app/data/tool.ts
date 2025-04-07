import { ChipProps } from "../components/chip";

const iconPath = "/icons/";

export const softwareTools: ChipProps[] = [
  {
    icon: `${iconPath}vscode-white.png`,
    name: "VS Code",
  },
  {
    icon: `${iconPath}git-white.png`,
    name: "Git",
  },
  {
    icon: `${iconPath}github.png`,
    name: "GitHub",
  },
  {
    icon: `${iconPath}figma-white.png`,
    name: "Figma",
  },
];

export const frontendTools: ChipProps[] = [
  {
    icon: `${iconPath}html-white.png`,
    name: "HTML",
  },
  {
    icon: `${iconPath}css-white.png`,
    name: "CSS",
  },
  {
    icon: `${iconPath}tailwind-white.png`,
    name: "Tailwind",
  },
  {
    icon: `${iconPath}bootstrap-white.png`,
    name: "Bootstrap",
  },
  {
    icon: `${iconPath}sass-white.png`,
    name: "SASS",
  },
  {
    icon: `${iconPath}js-white.png`,
    name: "JavaScript",
  },
  {
    icon: `${iconPath}ts-white.png`,
    name: "TypeScript",
  },
  {
    icon: `${iconPath}react-white.png`,
    name: "React",
  },
  {
    icon: `${iconPath}next-white.png`,
    name: "Next",
  },
  {
    icon: `${iconPath}angular-white.png`,
    name: "Angular",
  },
];

export const backendTools: ChipProps[] = [
  {
    icon: `${iconPath}java-white.png`,
    name: "Java",
  },
  {
    icon: `${iconPath}spring-boot.png`,
    name: "Spring Boot",
  },
  {
    icon: `${iconPath}express.png`,
    name: "Express",
  },
  {
    icon: `${iconPath}nodejs.png`,
    name: "Node",
  },
  {
    icon: `${iconPath}postgres-white.png`,
    name: "PostgreSQL",
  },
];

export const otherTechTools: ChipProps[] = [
  {
    icon: `${iconPath}python-white.png`,
    name: "Python",
  },
  {
    icon: `${iconPath}c-white.png`,
    name: "C",
  },
  {
    icon: `${iconPath}tensorflow-white.png`,
    name: "TensorFlow",
  },
];

export const darkSoftwareTools: ChipProps[] = [
  softwareTools[0],
  softwareTools[1],
  {
    icon: `${iconPath}github-dark.png`,
    name: "GitHub",
  },
  softwareTools[3],
];
