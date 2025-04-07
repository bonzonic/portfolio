import Image from "next/image";

export const ContactSection = () => {
  return (
    <div className="flex flex-col gap-10 items-center  text-center">
      <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#FDBA66] to-[#FD6D71]">
        <b>Thank you for reading to the end!</b>
      </p>
      <div className="flex flex-row gap-6 sm:gap-4 md:gap-[26px] flex-wrap justify-center items-center">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-lg md:text-xl 2xl:text-2xl">Follow me on</p>
          <a
            className="flex flex-row gap-1 px-4 py-1 bg-black rounded-xl items-center"
            href="https://github.com/bonzonic"
            target="_blank"
          >
            <Image
              src={"/icons/github-dark.png"}
              alt={`GitHub Icon`}
              width={"20"}
              height={"20"}
            />
            <p className="text-neutral-50 text-lg md:text-xl">GitHub</p>
          </a>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-lg md:text-xl 2xl:text-2xl">Connect with me on</p>
          <a
            className="flex flex-row gap-1 px-4 py-1 bg-[#0072B1] rounded-xl items-center"
            href="https://www.linkedin.com/in/yi-zhen-nicholas-wong-1327b0207/"
            target="_blank"
          >
            <Image
              src={"/icons/linkedin-white.png"}
              alt={`LinkedIn Icon`}
              width={"20"}
              height={"20"}
            />
            <p className="text-white text-lg md:text-xl">LinkedIn</p>
          </a>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-lg md:text-xl 2xl:text-2xl">Email me at</p>
          <a
            className="flex flex-row gap-1 px-4 py-1 bg-white rounded-xl border border-[#747775] items-center"
            href="mailto:wongyiznicholas@gmail.com"
          >
            <Image
              src={"/icons/gmail-white.png"}
              alt={`Gmail Icon`}
              width={"20"}
              height={"20"}
            />
            <p className="text-[#1F1F1F] text-lg md:text-xl">Gmail</p>
          </a>
        </div>
      </div>
    </div>
  );
};
