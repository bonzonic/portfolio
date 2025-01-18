import Image from "next/image";
import Button from "./button";

export default function Profile() {
  return (
    <>
      <div className="grid grid-flow-row lg:grid-cols-12 items-center gap-2 justify-center justify-items-center pb-10">
        <div className="flex flex-col lg:col-span-8 lg:order-first order-last card">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 lg:text-left text-center">
            Hi, I’m <i>Nicholas</i>, specializes in Full-stack development, with
            technologies such as React, Angular and Java Spring Boot.
          </h1>
          <div className="flex flex-row gap-5 justify-center lg:justify-start flex-wrap">
            <Button
              name="GitHub"
              url="https://github.com/bonzonic"
              image="/github.png"
            />
            <Button
              name="LinkedIn"
              url="https://www.linkedin.com/in/yi-zhen-nicholas-wong-1327b0207/"
              image="/linkedin.png"
            />
            <Button
              name="Resume"
              url="/WongYiZhenNicholas_Resume.pdf"
              image="/resume.png"
              download={true}
            />
          </div>
        </div>
        <Image
          className="rounded-full lg:col-span-4 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          src="/zn.jpg"
          width={"200"}
          height={"200"}
          alt={"Handsome picture of Nicholas"}
        ></Image>
      </div>
    </>
  );
}
