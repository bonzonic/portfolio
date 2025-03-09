import { ButtonWithLinkProps } from "../components/button-with-link";

interface Project {
  title: string;
  imageSrcs: string[];
  buttons: ButtonWithLinkProps;
}

export const projects: Project[] = [
  {
    title: "Portfolio🔥🔥🔥🔥🔥",
    imageSrcs: ["/project/google-1.png","/project/google-2.png","/project/google-3.png"],
    buttons: {
      items: [
        {
          text: "Demo",
          icon: "/icons/link-arrow-white.png",
          link: "https://portfolio-steel-eta-78.vercel.app/" // TODO: change this link
        },
        {
          text: "GitHub",
          icon: "/icons/github-software.png",
          link: "https://github.com/bonzonic/portfolio" 
        },
        {
          text: "Figma",
          icon: "/icons/figma-white.png",
          link: "https://github.com/bonzonic/portfolio" // TODO: change this link
        },
      ],
    }
  },
  {
    title: "Google Frontend Clone 🌐",
    imageSrcs: [
        "/project/google-1.png","/project/google-2.png","/project/google-3.png"
    ],
    buttons: {
      items: [
        {
          text: "Demo",
          icon: "/icons/link-arrow-white.png",
          link: "https://bonzonic.github.io/Google-Frontend/" 
        },
        {
          text: "GitHub",
          icon: "/icons/github-software.png",
          link: "https://github.com/bonzonic/Google-Frontend" 
        },
      ],
    }
  },
];
