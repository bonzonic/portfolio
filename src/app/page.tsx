"use client";

import AchievementSection from "./sections/achievement-section";
import NavPanel from "./components/nav-panel";
import Profile from "./sections/profile";
import ProjectSection from "./sections/project-section";
import SectionBreak from "./components/section-break";
import ScrollReveal from "./components/scroll-reveal";
import ToolSection from "./sections/tool-section";
import WorkSection from "./sections/work-section";
import { ContactSection } from "./sections/contact-section";
import useDarkMode, { DarkContext, PopupContext, usePopup } from "./utils/main";
import Popup from "./components/popup";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { registerPortfolioTools } from "./webmcp/tools";

/**
 * Dynamic because we have to do client side rendering, due to the dark mode configuration, where we store inside local storage
 */
const Home = dynamic(
  async () => {
    const Home = () => {
      const { isOpen, popupValue, openPopup, closePopup } = usePopup();
      const { darkMode, isInitializing } = useDarkMode();

      useEffect(() => registerPortfolioTools(), []);

      return (
        <DarkContext.Provider value={darkMode}>
          <main
            className={`${darkMode ? "dark" : ""} ${isInitializing ? "no-transition" : ""} h-auto flex flex-row font-[Inter] bg-[#FAFAFA] dark:text-white dark:bg-background-dark`}
          >
            <div className="hidden lg:block shrink-0 lg:w-[180px] xl:w-[200px] 2xl:w-[230px]">
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
                  <ScrollReveal>
                    <SectionBreak text={"Work"}>
                      <WorkSection />
                    </SectionBreak>
                  </ScrollReveal>
                  <ScrollReveal>
                    <SectionBreak text={"Projects"}>
                      <ProjectSection />
                    </SectionBreak>
                  </ScrollReveal>
                  <ScrollReveal>
                    <SectionBreak text={"Achievements"}>
                      <AchievementSection />
                    </SectionBreak>
                  </ScrollReveal>
                  <ScrollReveal>
                    <SectionBreak text={"Contact"}>
                      <ContactSection />
                    </SectionBreak>
                  </ScrollReveal>
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
