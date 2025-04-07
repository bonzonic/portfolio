"use client";

import AchievementSection from "./sections/achievement-section";
import NavPanel from "./components/nav-panel";
import Profile from "./sections/profile";
import ProjectSection from "./sections/project-section";
import SectionBreak from "./components/section-break";
import ToolSection from "./sections/tool-section";
import WorkSection from "./sections/work-section";
import { ContactSection } from "./sections/contact-section";
import useDarkMode, { DarkContext, PopupContext, usePopup } from "./utils/main";
import Popup from "./components/popup";
import dynamic from "next/dynamic";

/**
 * Dynamic because we have to do client side rendering, due to the dark mode configuration, where we store inside local storage
 */
const Home = dynamic(
  async () => {
    const Home = () => {
      const { isOpen, popupValue, openPopup, closePopup } = usePopup();
      const darkMode = useDarkMode();

      return (
        <DarkContext.Provider value={darkMode}>
          <main
            className={`${
              darkMode ? "dark" : ""
            } h-auto flex flex-row divide-x dark:divide-white/70 divide-black/50 font-[Inter] bg-[#FAFAFA] dark:text-white dark:bg-background-dark`}
          >
            <div className="lg:min-w-[225px] xl:min-w-[250px] 2xl:min-w-[305px] lg:visible invisible">
              <NavPanel />
            </div>
            <PopupContext.Provider value={openPopup}>
              <Popup
                isOpen={isOpen}
                popup={popupValue}
                closePopup={closePopup}
              />
              <div className="flex flex-col p-4 sm:p-12 items-center grow">
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
        </DarkContext.Provider>
      );
    };
    return Home;
  },
  { ssr: false }
);

export default Home;
