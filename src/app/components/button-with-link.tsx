import React from "react";
import Image from "next/image";

export interface ButtonWithLinkProps {
  text: string;
  icon: string;
  link: string;
}

const ButtonWithLink = ({ items }: { items: ButtonWithLinkProps[] }) => {
  return (
    <button className="flex flex-row p-2 gap-2 justify-stretch w-full">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="flex flex-row items-center p-2 gap-2 grow justify-center"
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
    </button>
  );
};

export default ButtonWithLink;
