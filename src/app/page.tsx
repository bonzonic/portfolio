"use client";

import AchievementSection from "./sections/achievement-section";
import NavPanel from "./components/nav-panel";
import Profile from "./sections/profile";
import ProjectSection from "./sections/project-section";
import SectionBreak from "./components/section-break";
import ToolSection from "./sections/tool-section";
import WorkSection from "./sections/work-section";

export default function Home() {
  return (
    <main className="h-auto flex flex-row divide-x line-stroke font-[Inter]">
      <div className="w-[305px]">
        <NavPanel />
      </div>
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
            <AchievementSection />
          </SectionBreak>
        </div>
      </div>
    </main>
  );
}
