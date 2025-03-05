"use client";

import NavPanel from "./components/nav-panel";
import Profile from "./components/profile";

export default function Home() {
  return (
    <main className="h-auto flex flex-row divide-x line-stroke font-[Inter]">
      <NavPanel />
      <div className="flex flex-col gap-[86px] p-12 items-center grow">
        <div className="max-w-[1134px]">
          <Profile />
        </div>
      </div>
      {/* <div className="max-w-[1440px] flex justify-self-center flex-col"></div> */}
    </main>
  );
}
