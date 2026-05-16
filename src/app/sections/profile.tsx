import { memo, useState, useEffect } from "react";
import Image from "next/image";
import Button from "../components/button";

const DESCRIPTION =
  "Full-stack developer with 3 years of experience building and shipping products in fast-paced environments. Experienced in developing end-to-end systems, from CRUD applications to high-performance, real-time platforms. Specializes in React, TypeScript, Vue, and WebGL, with a focus on low-latency, data-intensive systems. Leverages AI-assisted workflows to rapidly deliver scalable, production-ready applications.";

const Profile = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= DESCRIPTION.length) return;
    const t = setTimeout(() => {
      setDisplayed(DESCRIPTION.slice(0, index + 1));
      setIndex((i) => i + 1);
    }, 12);
    return () => clearTimeout(t);
  }, [index]);

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
          {displayed}
          {index < DESCRIPTION.length && <span className="animate-pulse">_</span>}
        </p>
      </div>
    </section>
  );
};

export default memo(Profile);
