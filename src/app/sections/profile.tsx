import Image from "next/image";
import Button from "../components/button";

export default function Profile() {
  return (
    <section className="flex gap-10 mb-10">
      <Image
        className="rounded-full w-[200px] h-[200px]"
        src="/zn.jpg"
        width={"200"}
        height={"200"}
        alt={"Handsome picture of Nicholas"}
      ></Image>
      <div className="flex flex-col">
        <h4 className="mb-2">wong.nicholas_</h4>
        <div className="flex flex-row gap-10 justify-center lg:justify-start flex-wrap mb-2">
          <Button
            name="GitHub"
            url="https://github.com/bonzonic"
            image="/icons/github-white.png"
          />
          <Button
            name="LinkedIn"
            url="https://www.linkedin.com/in/yi-zhen-nicholas-wong-1327b0207/"
            image="/icons/linkedin-white.png"
          />
          <Button
            name="Resume"
            url="/WongYiZhenNicholas_Resume.pdf"
            image="/icons/download-white.png"
            download={true}
          />
        </div>
        <p>
          <b>Wong Nicholas</b>
        </p>
        <p>
          2 years of experience in full-stack development that loves challenges
          and algorithms! Skilled in building responsive UIs with comprehensive
          unit tests, and specializes in React with TypeScript. Learning Mobile
          Development in my free time and networking with professionals!
        </p>
      </div>
    </section>
  );
}
