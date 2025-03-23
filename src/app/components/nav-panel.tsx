import Image from "next/image";

interface NavigationLinkProps {
  iconPath: string;
  navigationText: string;
}

const navigationLinks: NavigationLinkProps[] = [
  { iconPath: "nav-edit.png", navigationText: "Tools" },
  { iconPath: "nav-favorite.png", navigationText: "Work" },
  { iconPath: "nav-project.png", navigationText: "Projects" },
  { iconPath: "nav-achievement.png", navigationText: "Achievements" },
  { iconPath: "nav-contact.png", navigationText: "Contact" },
];

const navigationLink = (iconPath: string, navigationText: string) => (
  <a
    className="flex items-center lg:gap-4 2xl:gap-6"
    href={`#${navigationText}`}
  >
    <Image
      className="lg:w-[30px] lg:h-[30px]"
      src={`/icons/${iconPath}`}
      width={"30"}
      height={"30"}
      alt={`${navigationText} icon`}
    ></Image>
    <p className="2xl:text-2xl xl:text-xl lg:text-lg">{navigationText}</p>
  </a>
);

export default function NavPanel() {
  return (
    <div className="fixed">
      <nav className="h-screen lg:min-w-[225px] xl:min-w-[250px] 2xl:min-w-[305px] flex justify-center">
        <div className="flex-col flex gap-14 justify-center">
          {navigationLinks.map((link, index) => (
            <div key={index}>
              {navigationLink(link.iconPath, link.navigationText)}
            </div>
          ))}
        </div>
      </nav>
      <div className="flex flex-row absolute bottom-12 left-12 gap-4 items-center">
        <p className="text-lg xl:text-xl">Dark Mode</p>
        <label className="relative inline-block w-[50px] h-[24px]">
          <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
          <span className="absolute cursor-pointer left-1 top-0.5 bg-white rounded-full h-5 w-5 z-1 transition-transform duration-300 peer-checked:translate-x-[22px]"></span>
          <span className="absolute cursor-pointer bg-[#F8F5E9] rounded-full w-full h-full peer-checked:bg-[#191F45]" />
        </label>
      </div>
    </div>
  );
}
