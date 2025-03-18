import Image from "next/image";
import React, { useState } from "react";

export const Carousel = ({ imageSrcs }: { imageSrcs: string[] }) => {
  const [imagePosition, setImagePosition] = useState<number>(0); // starts with 0, like a true engineer

  return (
    <div className="relative flex items-center h-full">
      {imageSrcs.length > 0 && (
        <Image
          className="w-full"
          src={`/popup/${imageSrcs[imagePosition]}`}
          alt={`${imageSrcs[imagePosition]} Image`}
          width={"600"}
          height={"942"}
        />
      )}
      <div className="absolute flex items-center justify-between p-4 w-full">
        <button
          onClick={() => setImagePosition((prev) => prev - 1)}
          className={`${
            imagePosition > 0 ? "visible" : "invisible"
          } cursor-pointer`}
        >
          <Image
            src={"/component/left-arrow.png"}
            alt={`Left Arrow Icon`}
            width={"45"}
            height={"45"}
          />
        </button>
        <button
          onClick={() => setImagePosition((prev) => prev + 1)}
          className={`${
            imagePosition < imageSrcs.length - 1 ? "visible" : "invisible"
          } cursor-pointer`}
        >
          <Image
            src={"/component/right-arrow.png"}
            alt={`Right Arrow Icon`}
            width={"45"}
            height={"45"}
          />
        </button>
      </div>
    </div>
  );
};
