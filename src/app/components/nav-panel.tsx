import Image from "next/image";

export default function NavPanel() {
  return (
    <div className="fixed">
      <nav className="h-screen w-[305px] flex justify-center">
        <div className="flex-col flex gap-14 justify-center">
          <a className="flex items-center gap-6">
            <Image
              className="lg:w-[30px] lg:h-[30px]"
              src="/icons/nav-edit.png"
              width={"30"}
              height={"30"}
              alt={"Pencil icon"}
            ></Image>
            <h5>Tools</h5>
          </a>
          <a className="flex items-center gap-6">
            <Image
              className="lg:w-[30px] lg:h-[30px]"
              src="/icons/nav-favorite.png"
              width={"30"}
              height={"30"}
              alt={"Pencil icon"}
            ></Image>
            <h5>Work</h5>
          </a>
          <a className="flex items-center gap-6">
            <Image
              className="lg:w-[30px] lg:h-[30px]"
              src="/icons/nav-project.png"
              width={"30"}
              height={"30"}
              alt={"Pencil icon"}
            ></Image>
            <h5>Projects</h5>
          </a>
          <a className="flex items-center gap-6">
            <Image
              className="lg:w-[30px] lg:h-[30px]"
              src="/icons/nav-achievement.png"
              width={"30"}
              height={"30"}
              alt={"Pencil icon"}
            ></Image>
            <h5>Achievements</h5>
          </a>
          <a className="flex items-center gap-6">
            <Image
              className="lg:w-[30px] lg:h-[30px]"
              src="/icons/nav-contact.png"
              width={"30"}
              height={"30"}
              alt={"Pencil icon"}
            ></Image>
            <h5>Contact</h5>
          </a>
        </div>
      </nav>
      <div className="flex flex-row absolute bottom-12 left-12 gap-4 items-center">
        <h6>Dark Mode</h6>
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
