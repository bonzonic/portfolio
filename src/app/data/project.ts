export interface Project {
  title: string;
  description: string;
  image: string;
  gitHubUrl?: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "The portfolio is this website project you are looking at now! Built using NextJS, Tailwind CSS and TypeScript. Took me 6 days to built this!",
    image: "/portfolio.png",
    gitHubUrl: " https://github.com/bonzonic/portfolio",
    projectUrl: "https://portfolio-steel-eta-78.vercel.app/",
  },
  {
    title: "Portfolio Figma",
    description:
      "Before developing the portfolio, I created a Figma design system and utilized the system to design the portfolio. This project demonstrates my understanding of Figma and the tools that they provide. It took me a while (2 weeks) to create this design as I'm not particularly creative... Over the time, the portfolio's design diverted from the this portfolio's design as it didn't look as good as initially thought",
    image: "/portfolio_design.png",
    projectUrl:
      "https://www.figma.com/design/nNBqTRyRPBhmFMMRGLoymj/Untitled?node-id=32-124&t=L3vxrfCKXRIUCBwq-1",
  },
  {
    title: "Google Frontend",
    description:
      "I built this following the CS50W course. This is a front-end for Google Search, Google Image Search, and Google Advanced Search.",
    image: "/google.png",
    gitHubUrl: "https://github.com/bonzonic/Google-Frontend",
    projectUrl: "https://bonzonic.github.io/Google-Frontend/",
  },
  {
    title: "ZK Anonymous Voting System",
    description:
      "This project won 2nd place in a Web3 Hackathon called KL Mini Hack held on 2023. Developed by a group of 4, it's an anonymous voting system for presidential election using zero knowledge. Using the technology of blockchain, an immutable decentralized database shared among everyone in the network,  it makes it nearly impossible for anyone to be able to manipulate the votes, since a faulty database can be verified by others in the network. For more details, refer to the GitHub link shared below. (Yes we won 500 USDT)",
    image: "/kl_mini_hack.png",
    gitHubUrl: "https://github.com/bonzonic/KL-Mini-Hack",
    projectUrl: "https://bonzonic.github.io/KL-Mini-Hack/",
  },
];
