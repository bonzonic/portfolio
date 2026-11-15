"use client";

import { memo } from "react";
import Image from "next/image";

interface NavigationLinkProps {
  iconPath: string;
  navigationText: string;
}

const navigationLinks: NavigationLinkProps[] = [
  { iconPath: "nav-edit", navigationText: "Tools" },
  { iconPath: "nav-favorite", navigationText: "Work" },
  { iconPath: "nav-project", navigationText: "Projects" },
  { iconPath: "nav-achievement", navigationText: "Achievements" },
  { iconPath: "nav-contact", navigationText: "Contact" },
];

const NavigationLink = memo(
  ({ iconPath, navigationText }: NavigationLinkProps) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      document.getElementById(navigationText)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <a
        className="flex items-center gap-3 2xl:gap-4 opacity-80 hover:opacity-100"
        href={`#${navigationText}`}
        onClick={handleClick}
      >
        <div className="relative w-[22px] h-[22px] 2xl:w-[24px] 2xl:h-[24px] shrink-0">
          <Image
            className="w-full h-full absolute dark:opacity-0"
            src={`/icons/${iconPath}.png`}
            width={30}
            height={30}
            alt={`${navigationText} icon`}
          />
          <Image
            className="w-full h-full absolute opacity-0 dark:opacity-100"
            src={`/icons/${iconPath}-dark.png`}
            width={30}
            height={30}
            alt={`${navigationText} icon`}
          />
        </div>
        <p className="text-base 2xl:text-lg text-black dark:text-white [transition-duration:100ms]">{navigationText}</p>
      </a>
    );
  },
);

NavigationLink.displayName = "NavigationLink";

const NavPanel = memo(function NavPanel() {
  return (
    <div className="fixed top-0 left-0 h-screen lg:w-[180px] xl:w-[200px] 2xl:w-[230px] border-r border-black/15 dark:border-white/25 bg-[#FAFAFA] dark:bg-background-dark">
      <nav className="h-full flex justify-center">
        <div className="flex-col flex gap-10 2xl:gap-12 justify-center">
          {navigationLinks.map((link, index) => (
            <div key={index}>
              <NavigationLink
                iconPath={link.iconPath}
                navigationText={link.navigationText}
              />
            </div>
          ))}
        </div>
      </nav>
      <div className="flex flex-row absolute bottom-10 inset-x-0 justify-center gap-3 items-center">
        <p className="text-sm 2xl:text-base text-black dark:text-white [transition-duration:100ms]">Dark Mode</p>
        <label className="relative inline-block w-[50px] h-[24px]">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0 peer checked"
            defaultChecked={localStorage.getItem("darkMode") === "true"}
            onClick={() => {
              localStorage.getItem("darkMode") === "true"
                ? localStorage.removeItem("darkMode")
                : localStorage.setItem("darkMode", "true");
              window.dispatchEvent(new Event("storage"));
            }}
          />
          <span className="absolute cursor-pointer left-1 top-0.5 bg-white rounded-full h-5 w-5 z-1 transition-transform duration-300 peer-checked:translate-x-[22px]"></span>
          <span className="absolute cursor-pointer bg-[#F8F5E9] rounded-full w-full h-full peer-checked:bg-[#191F45]" />
        </label>
      </div>
    </div>
  );
});

export default NavPanel;
