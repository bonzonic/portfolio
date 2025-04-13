import Image from "next/image";
import Button from "../components/button";

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row gap-10 mb-10 items-center">
      <Image
        className="rounded-full"
        src="/zn.jpg"
        width={"200"}
        height={"200"}
        alt={"Handsome picture of Nicholas"}
      ></Image>
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-0">
        <p className="hidden md:block text-2xl">wong.nicholas_</p>
        <div className="mt-2 flex flex-row gap-4 md:gap-10 justify-center sm:justify-start flex-wrap mb-2 order-2">
          <Button
            name="GitHub"
            url="https://github.com/bonzonic"
            image="/icons/github-dark.png"
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
        <p className="text-2xl md:text-sm order-1 md:order-2">
          <b>Wong Nicholas</b>
        </p>
        <p className="order-3">
          2 years of experience in full-stack development that loves challenges
          and algorithms! Skilled in building responsive UIs with comprehensive
          unit tests, and specializes in React with TypeScript and does back-end
          occasionally. Collaborates effectively in team environments and
          demonstrates strong leadership by taking committee roles in the club
          and company. Currently on the Get Certified Program for Associate
          Cloud Engineer by Google Cloud!
        </p>
      </div>
    </section>
  );
}
