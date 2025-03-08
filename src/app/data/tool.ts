import { Chip } from "../components/chip";

const iconPath = "/icons/"

export const getSoftwareTools = (): Chip[] =>  [
        {
            icon: `${iconPath}vscode-white.png`,
            name: "VS Code"
        },
        {
            icon: `${iconPath}git-white.png`,
            name: "Git"
        },
        {
            icon: `${iconPath}github-software.png`,
            name: "GitHub"
        },
        {
            icon: `${iconPath}figma-white.png`,
            name: "Figma"
        },
    ];

export const getFrontendTools =  (): Chip[] => [
    {
        icon: `${iconPath}html-white.png`,
        name: "HTML"
    },
    {
        icon: `${iconPath}css-white.png`,
        name: "CSS"
    },
    {
        icon: `${iconPath}tailwind-white.png`,
        name: "Tailwind"
    },
    {
        icon: `${iconPath}bootstrap-white.png`,
        name: "Bootstrap"
    },
    {
        icon: `${iconPath}sass-white.png`,
        name: "SASS"
    },
    {
        icon: `${iconPath}js-white.png`,
        name: "JavaScript"
    },
    {
        icon: `${iconPath}ts-white.png`,
        name: "TypeScript"
    },
    {
        icon: `${iconPath}react-white.png`,
        name: "React"
    },
    {
        icon: `${iconPath}next-white.png`,
        name: "Next"
    },
    {
        icon: `${iconPath}angular-white.png`,
        name: "Angular"
    }
];

export const getBackendTools =  (): Chip[] => [
    {
        icon: `${iconPath}java-white.png`,
        name: "Java"
    },
    {
        icon: `${iconPath}spring-boot-white.png`,
        name: "Spring Boot"
    },
    {
        icon: `${iconPath}express-white.png`,
        name: "Express"
    },
    {
        icon: `${iconPath}node-white.png`,
        name: "Node"
    },
    {
        icon: `${iconPath}postgres-white.png`,
        name: "PostgreSQL"
    },
];

export const getOtherTechTools =  (): Chip[] => [
    {
        icon: `${iconPath}python-white.png`,
        name: "Python"
    },
    {
        icon: `${iconPath}c-white.png`,
        name: "C"
    },
    {
        icon: `${iconPath}tensorflow-white.png`,
        name: "TensorFlow"
    },
];