import Image from "next/image";
import React, { useState, useCallback } from "react";

export const Carousel = ({ imageSrcs }: { imageSrcs: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useCallback(
    (newPos: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setPrevious(current);
      setCurrent(newPos);
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setPrevious(null);
        setIsAnimating(false);
      }, 300);
    },
    [current, isAnimating],
  );

  return (
    <div className="relative flex items-center justify-center h-full overflow-hidden">
      {imageSrcs.length > 0 && (
        <div className="relative w-full h-full">
          {previous !== null && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: `${direction === "right" ? "slideOutToLeft" : "slideOutToRight"} 300ms ease forwards`,
              }}
            >
              <Image
                className="h-full w-auto lg:w-full lg:h-auto"
                src={`/popup/${imageSrcs[previous]}`}
                alt={`Image ${previous}`}
                width={600}
                height={942}
              />
            </div>
          )}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: isAnimating
                ? `${direction === "right" ? "slideInFromRight" : "slideInFromLeft"} 300ms ease forwards`
                : undefined,
            }}
          >
            <Image
              className="h-full w-auto lg:w-full lg:h-auto"
              src={`/popup/${imageSrcs[current]}`}
              alt={`Image ${current}`}
              width={600}
              height={942}
            />
          </div>
        </div>
      )}
      <div className="absolute flex items-center justify-between p-4 w-full z-10">
        <button
          onClick={() => navigate(current - 1, "left")}
          className={`${current > 0 ? "visible" : "invisible"} cursor-pointer`}
        >
          <Image
            src={"/component/left-arrow.png"}
            alt={`Left Arrow Icon`}
            width={"45"}
            height={"45"}
          />
        </button>
        <button
          onClick={() => navigate(current + 1, "right")}
          className={`${current < imageSrcs.length - 1 ? "visible" : "invisible"} cursor-pointer`}
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
