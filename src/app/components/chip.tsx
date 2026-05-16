import Image from "next/image";

export interface ChipProps {
  icon?: string;
  darkIcon?: string;
  name: string;
  delay?: number;
}

export default function Chip({ icon, darkIcon, name, delay }: ChipProps) {
  return (
    <div
      className={`flex items-center flex-row border-1 border-black dark:border-transparent rounded-3xl gap-2 ${
        icon
          ? "bg-top-background-white dark:bg-space-gray w-[145px] p-2"
          : "bg-white py-1 px-3 dark:bg-dark-purple text-[#4D4D4D] dark:text-white"
      }`}
      style={delay !== undefined ? { animation: "chipEntry 400ms ease both", animationDelay: `${delay}ms` } : undefined}
    >
      {icon ? (
        <div className="relative w-[20px] h-[20px] shrink-0">
          <Image
            className={`w-[20px] h-[20px] absolute ${darkIcon ? "dark:opacity-0" : ""}`}
            src={icon}
            width={"20"}
            height={"20"}
            alt={`Icon of ${name}`}
          />
          {darkIcon && (
            <Image
              className="w-[20px] h-[20px] absolute opacity-0 dark:opacity-100"
              src={darkIcon}
              width={"20"}
              height={"20"}
              alt={`Icon of ${name}`}
            />
          )}
        </div>
      ) : null}

      <p>{name}</p>
    </div>
  );
}
