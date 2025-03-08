"use client";

import NavPanel from "./components/nav-panel";
import Profile from "./components/profile";
import SectionBreak from "./components/section-break";
import Tool from "./components/tool";
import {
  getBackendTools,
  getFrontendTools,
  getSoftwareTools,
  getOtherTechTools,
} from "./data/tool";

export default function Home() {
  return (
    <main className="h-auto flex flex-row divide-x line-stroke font-[Inter]">
      <NavPanel />
      <div className="flex flex-col p-12 items-center grow">
        <div className="max-w-[1134px] flex flex-col gap-[86px]">
          <div>
            <Profile />
            <SectionBreak text={"Tools"} />
            <section className="flex flex-col gap-6">
              <Tool
                title="Software"
                tools={getSoftwareTools()}
                caption="Trusty tools that I build software with"
              ></Tool>
              <Tool
                title="Frontend"
                tools={getFrontendTools()}
                caption="Can't build a website without these tools"
              ></Tool>
              <Tool
                title="Backend"
                tools={getBackendTools()}
                caption="The magic behind the scenes"
              ></Tool>
              <Tool
                title="Other Tech"
                tools={getOtherTechTools()}
                caption="Where I dabble in other technologies"
              ></Tool>
            </section>
          </div>
          <section>
            
          </section>
        </div>
      </div>
    </main>
  );
}
