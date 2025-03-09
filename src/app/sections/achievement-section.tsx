import React from "react";
import Image from "next/image";
import { achievements } from "../data/achievement";

const AchievementSection = () => {
  return (
    <div className="w-100% flex flex-row gap-[86px] flex-wrap justify-center">
      {achievements.map((achievement) => (
        <a key={achievement.title} className="w-[264px]">
          <Image
            className=""
            src={achievement.imageUrl}
            width={"264"}
            height={"264"}
            alt={`Image of ${achievement.title}`}
          />
          <p className="mt-4">{achievement.title}</p>
        </a>
      ))}
    </div>
  );
};

export default AchievementSection;
