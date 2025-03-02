"use client";

import NavPanel from "./components/nav-panel";
import Profile from "./components/profile";

export default function Home() {
  return (
    <main className="max-w-[1440px] h-auto flex flex-row divide-x line-stroke">
      <NavPanel />
      <div>
        <Profile />
      </div>
      {/* <div className="max-w-[1440px] flex justify-self-center flex-col"></div> */}
    </main>
  );
}
