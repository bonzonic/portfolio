"use client";

import NavPanel from "./components/nav-panel";
import Profile from "./components/profile";
import ProjectSection from "./components/project-section";
import SectionBreak from "./components/section-break";
import ToolSection from "./components/tool-section";
import WorkSection from "./components/work-section";

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
        </div>
      </div>
    </main>
  );
}
