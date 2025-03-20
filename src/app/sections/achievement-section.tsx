import React, { useContext } from "react";
import Image from "next/image";
import { PopupContext } from "../utils/main";
import { achievements } from "../data/popup";

const AchievementSection = () => {
  const openPopup = useContext(PopupContext);

  return (
    <div className="flex flex-row gap-[86px] flex-wrap justify-center items-center">
      {achievements.map((achievement) => (
        <a
          key={achievement.title}
          className="w-[264px] flex flex-col items-center cursor-pointer"
          onClick={() => openPopup(achievement)}
        >
          <div className="w-[264px] h-[264px] flex items-center">
            <Image
              src={`/popup/${achievement.imageSrcs[0]}`}
              width={"264"}
              height={"264"}
              alt={`Image of ${achievement.title}`}
            />
          </div>
          <p className="mt-4">{achievement.title}</p>
        </a>
      ))}
    </div>
  );
};

export default AchievementSection;
