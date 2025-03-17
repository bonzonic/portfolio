"use client";

import AchievementSection from "./sections/achievement-section";
import NavPanel from "./components/nav-panel";
import Profile from "./sections/profile";
import ProjectSection from "./sections/project-section";
import SectionBreak from "./components/section-break";
import ToolSection from "./sections/tool-section";
import WorkSection from "./sections/work-section";
import { ContactSection } from "./sections/contact-section";
import { PopupContext, usePopup } from "./utils/main";
import PopupProps from "./components/popup";
import Popup from "./components/popup";

export default function Home() {
  const { isOpen, popupValue, openPopup, closePopup } = usePopup();

  return (
    <main className="h-auto flex flex-row divide-x line-stroke font-[Inter] bg-[#FAFAFA]">
      <div className="w-[305px]">
        <NavPanel />
      </div>
      <PopupContext.Provider value={openPopup}>
        <Popup isOpen={isOpen} popup={popupValue} closePopup={closePopup} />
        <div className="flex flex-col p-12 items-center grow left-[305px]">
          <div className="max-w-[1134px] flex flex-col gap-[86px]">
            <div>
              <Profile />
              <SectionBreak text={"Tools"}>
                <ToolSection />
              </SectionBreak>
            </div>
            <SectionBreak text={"Work"}>
              <WorkSection />
            </SectionBreak>
            <SectionBreak text={"Projects"}>
              <ProjectSection />
            </SectionBreak>
            <SectionBreak text={"Achievements"}>
              <AchievementSection />
            </SectionBreak>
            <SectionBreak text={"Contact"}>
              <ContactSection />
            </SectionBreak>
          </div>
        </div>
      </PopupContext.Provider>
    </main>
  );
}
