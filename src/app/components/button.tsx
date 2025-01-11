import Image from "next/image";
import { useEffect } from "react";

export enum ButtonProfile {
  LinkedIn,
  GitHub,
  Resume,
}

export default function NavigationButton({
  buttonProfile,
}: {
  buttonProfile: ButtonProfile;
  }) {
  
  let buttonProfileMapToText;

  useEffect(() => {



  }, [])
  
  
  
  return (
    <a
      href="https://www.linkedin.com/in/yi-zhen-nicholas-wong-1327b0207/"
      target="_blank"
    >
      <div className="bg-blue-300 flex py-1 px-4 text-white rounded-md">
        <h6>{ButtonProfile[buttonProfile]}</h6> 
        <Image
          src={"/linkedin.png"}
          alt={"LinkedIn Icon"}
          width={"20"}
          height={"20"}
        />
      </div>
    </a>
  );
}
