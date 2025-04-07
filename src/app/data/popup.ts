import { ButtonWithLinkProps } from "../components/button-with-link";
import { Comment } from "../components/comment";

export interface PopupProps {
  title: string;
  description: string;
  imageSrcs: string[];
  buttons: ButtonWithLinkProps[];
  comments: Comment[];
}

const linkArrowSrc = (darkMode: boolean) =>
  darkMode ? "/icons/link-arrow-dark.png" : "/icons/link-arrow-white.png";

const githubSrc = (darkMode: boolean) =>
  darkMode ? "/icons/github-dark.png" : "/icons/github.png";

export const portfolioPopup = (darkMode: boolean): PopupProps => {
  return {
    title: "Portfolio🔥🔥🔥🔥🔥",
    description: `This portfolio is the very project you're exploring right now! 🚀Built with Next.js, Tailwind CSS, and TypeScript, it took me 2 months to bring it to life. Every component was crafted with performance and responsiveness in mind. Excited to keep pushing boundaries and refining my craft! 🌟
    
    Before bringing my portfolio to life, I crafted its foundation in Figma! From random scribbles to a polished UI, every detail was planned for a seamless user experience.
    
    #UIUX #Figma #Innovative #FirePortfolio🔥#Creative #NextJS #TailwindCSS`,
    imageSrcs: ["portfolio.png", "portfolio2.png"],
    buttons: [
      {
        text: "Demo",
        icon: linkArrowSrc(darkMode),
        link: "https://portfolio-steel-eta-78.vercel.app/",
      },
      {
        text: "GitHub",
        icon: githubSrc(darkMode),
        link: "https://github.com/bonzonic/portfolio",
      },
      {
        text: "Figma",
        icon: "/icons/figma-white.png",
        link: "https://www.figma.com/proto/nNBqTRyRPBhmFMMRGLoymj/Untitled?page-id=32%3A124&node-id=322-1320&p=f&viewport=1426%2C-496%2C0.46&t=9IxZppgoKKcaF56T-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=322%3A1320&show-proto-sidebar=1",
      },
    ],
    comments: [
      {
        comment:
          "Its my first portfolio guys, not the best, but at least its something :)",
        profileIcon: "wong-nicholas.png",
        name: "wong.nicholas_",
      },
      {
        comment: "Amazing Work! 👍 ",
        profileIcon: "elon-musk.png",
        name: "elonrmuskk",
      },
      {
        comment: "Amazing figma portfolio!!",
        profileIcon: "christine.png",
        name: "christineeccy",
      },
    ],
  };
};

export const googleFePopup = (darkMode: boolean): PopupProps => {
  return {
    title: "Google Frontend Clone 🌐",
    description: `As part of the CS50W course, I built this front-end project, replicating Google Search, Google Image Search, and Google Advanced Search. The goal was to recreate the UI while improving my skills in HTML, CSS, and JavaScript.
  Check it out and let me know your thoughts! 👇

  #Frontend #CS50W #WebDevelopment #HTML #CSS #JavaScript`,
    imageSrcs: ["google-1.png", "google-2.png", "google-3.png"],
    buttons: [
      {
        text: "Demo",
        icon: linkArrowSrc(darkMode),
        link: "https://bonzonic.github.io/Google-Frontend/",
      },
      {
        text: "GitHub",
        icon: githubSrc(darkMode),
        link: "https://github.com/bonzonic/Google-Frontend",
      },
    ],
    comments: [
      {
        comment:
          "Its my first portfolio guys, not the best, but at least its something :)",
        profileIcon: "wong-nicholas.png",
        name: "wong.nicholas_",
      },
      {
        comment: `Got any old banknotes lying around? 💰 I’m collecting rare and vintage currency—DM me 
        if you have any to trade or sell! 📩 Got any old banknotes lying around? 💰`,
        profileIcon: "old-notes-buyer.png",
        name: "old_notes_buyer199313",
      },
    ],
  };
};

export const paperPopup = (darkMode: boolean): PopupProps => {
  return {
    title:
      "Published paper: Preprocessing Variations for Classification in Smart Manufacturing ",
    description: `Collaborating with my other FYP teammates in university, I managed to publish a paper with the title above to the Association for Computing Machinery (ACM). Our paper investigates the impact of preprocessing techniques, including brightness and blurriness adjustments, on the performance of deep learning model when dealing with low-quality visual data (edible bird nest) commonly encountered in industrial settings.

Key Highlights:➊ Successful development of AI prototype for grading Edible Bird's Nest.➋ Potential automation for quality control of Edible Bird's Nest.➌ Utilization of generative AI to create images for training the model.`,
    imageSrcs: ["paper.png"],
    buttons: [
      {
        text: "Link",
        icon: linkArrowSrc(darkMode),
        link: "https://dl.acm.org/doi/10.1145/3611380.3629545",
      },
    ],
    comments: [
      {
        comment:
          "It took us 1 month to write the paper and 4k MYR to publish it. Couldn’t have done it without my team members, Brian, Christine, Caleb and most importantly Dr Lim, our FYP lecturer!! ",
        profileIcon: "wong-nicholas.png",
        name: "wong.nicholas_",
      },
      {
        comment: `
            ⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀⠀
⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀⠀
⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀⠀
⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀
⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀⠀
⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀⠀
⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀
⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀
⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀
⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀⠀
⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
        profileIcon: "anime-girl.png",
        name: "anime_girl_123",
      },
    ],
  };
};

export const bpPopup = (darkMode: boolean): PopupProps => {
  return {
    title:
      "Best FYP Award 2023 in Monash University Malaysia, awarded by British Petroleum (BP)",
    description: `Our project utilizes deep learning models such as Faster R-CNN, YoloV8 and MobileNet-V2 to automate the grading of EBN in the manufacturing industry! We also trained the models by incorporating perturbed datasets featuring variations in brightness and bluriness, and included synthetic images to increase the dataset size. Notably, MobileNet-V2 emerged as the optimal choice, striking a balance between speed and accuracy in grading predictions.🚀`,
    imageSrcs: ["bp.png", "bp2.png", "bp3.png"],
    buttons: [
      {
        text: "Github",
        icon: githubSrc(darkMode),
        link: "https://github.com/MCS04/MCS04-AI",
      },
    ],
    comments: [
      {
        comment: "Can you believe it? Our FYP got 2 awards :D",
        profileIcon: "wong-nicholas.png",
        name: "wong.nicholas_",
      },
    ],
  };
};

export const klMiniHackPopup = (darkMode: boolean): PopupProps => {
  return {
    title:
      "2nd place in KL Mini Hack 2023, building a zero-knowledge app for secure voting, won 500 UDST",
    description: `This project won 2nd place in a Web3 Hackathon called KL Mini Hack held on 2023. 

    Developed by a group of 4, it's an anonymous voting system for presidential election using zero knowledge. Using the technology of blockchain, an immutable decentralized database shared among everyone in the network,  it makes it nearly impossible for anyone to be able to manipulate the votes, since a faulty database can be verified by others in the network. 

    For more details, refer to the GitHub link shared below.`,
    imageSrcs: ["klminihack2023.png"],
    buttons: [
      {
        text: "Demo",
        icon: linkArrowSrc(darkMode),
        link: "https://bonzonic.github.io/KL-Mini-Hack",
      },
      {
        text: "GitHub",
        icon: githubSrc(darkMode),
        link: "https://github.com/bonzonic/KL-Mini-Hack",
      },
    ],
    comments: [
      {
        comment: `It was my first time coding a blockchain app, using truffle, smart contracts and many more! 
      Although the hackathon was 1 week long, for us, it was akin a 1-day hackathon, since none of us had any idea of crypto and zero-knowledge.
      Nevertheless, was a good experience overall and the food was great!`,
        profileIcon: "wong-nicholas.png",
        name: "wong.nicholas_",
      },
    ],
  };
};

export const hacktitudePopup = (darkMode: boolean): PopupProps => {
  return {
    title:
      "Hacktitude Malaysia 2nd Runner-up, fixing FE and BE bugs, won 500 MYR",
    description: `I can’t remember the details of this hackathon, but all I can say was that doing this hackathon was quite fun and that’s all it really matters at the end of the day :)`,
    imageSrcs: ["hacktitude.png"],
    buttons: [
      {
        text: "Certificate Link",
        icon: linkArrowSrc(darkMode),
        link: "https://credential.certifyme.online/verify/0fc44a1e7498",
      },
    ],
    comments: [],
  };
};

export const oWastePopup: PopupProps = {
  title:
    "Varsity Hackathon, built O-Waste, a waste management platform to incentivize Malaysians to recyle",
  description: `Team of 3 designed an innovative waste management platform that employs gamification and a point redemption system, to encourage Malaysians to actively participate in recycling using Figma.
  Although we didn’t win anything, I still believed the idea was good and the Figma prototype we did was fantastic.`,
  imageSrcs: ["o-waste.png"],
  buttons: [
    {
      text: "Figma",
      icon: "/icons/figma-white.png",
      link: "https://www.figma.com/proto/vEvjR8pcu1tjgjnxNSq5Lt/O-Waste?page-id=0%3A1&type=design&node-id=0-1&viewport=296%2C409%2C0.05&scaling=scale-down&starting-point-node-id=1%3A103&show-proto-sidebar=1&mode=design",
    },
  ],
  comments: [
    {
      comment: `Huge respect to christine for joining this hackathon with me, and the other hackathons too... Hope we can team up in other hackathons in the future!`,
      profileIcon: "wong-nicholas.png",
      name: "wong.nicholas_",
    },
  ],
};

export const achievements = (darkMode: boolean): PopupProps[] => [
  paperPopup(darkMode),
  bpPopup(darkMode),
  klMiniHackPopup(darkMode),
  hacktitudePopup(darkMode),
  oWastePopup,
];
