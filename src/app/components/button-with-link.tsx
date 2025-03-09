import React from "react";
import Image from "next/image";

export interface ButtonWithLinkProps {
  items: {
    text: string;
    icon: string;
    link: string;
  }[];
}

const ButtonWithLink = ({ items }: ButtonWithLinkProps) => {
  return (
    <div className="flex flex-row p-2 gap-2 justify-stretch">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="flex flex-row items-center p-2 gap-2 w-screen justify-center"
        >
          <Image
            src={item.icon}
            width={"20"}
            height={"20"}
            alt={`Icon of ${item.text}`}
          ></Image>
          <p>{item.text}</p>
        </a>
      ))}
    </div>
  );
};

export default ButtonWithLink;
