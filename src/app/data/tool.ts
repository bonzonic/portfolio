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
    darkIcon: `${iconPath}github-dark.png`,
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
    icon: `${iconPath}vue.png`,
    name: "Vue",
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
    icon: `${iconPath}claude-ai.svg`,
    name: "Claude Code",
  },
  {
    icon: `${iconPath}aws.svg`,
    name: "AWS SAA",
    link: "https://www.credly.com/badges/6c7dff51-8f3a-4772-93be-96664d0c87d1",
  },
  {
    icon: `${iconPath}gcp.png`,
    name: "GCP ACE",
    link: "https://www.credly.com/badges/61b6945c-babf-45d4-898c-cc98a96099c0",
  },
];
