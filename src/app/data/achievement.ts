export interface Achievement {
  imageUrl: string;
  title: string;
}

export const achievements: Achievement[] = [{
  title: "Published paper: Preprocessing Variations for Classification in Smart Manufacturing",
  imageUrl: "/achievement/paper.png",
},
{
  title: "Best FYP Award 2023 in Monash University Malaysia, awarded by British Petroleum (BP)",
  imageUrl: "/achievement/best_fyp.png",
},
{
  title: "2nd place in KL Mini Hack 2023, building a zero-knowledge app for secure voting, won 500 UDST",
  imageUrl: "/achievement/web3.png",
},{
  title: "Hacktitude Malaysia 2nd Runner-up, fixing FE and BE bugs, won 500 MYR",
  imageUrl: "/achievement/hacktitude.png",
},{
  title: "Varsity Hackathon, built O-Waste, a waste management platform to incentivize Malaysians to recyle",
  imageUrl: "/achievement/o-waste.png",
}]
