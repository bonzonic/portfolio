import Image from "next/image";

export interface ChipProps {
  icon?: string;
  darkIcon?: string;
  name: string;
  delay?: number;
  link?: string;
}

export default function Chip({ icon, darkIcon, name, delay, link }: ChipProps) {
  const inner = (
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
      {link && (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden className="shrink-0 opacity-60">
          <path d="M2 9L9 2M9 2H5M9 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 hover:ring-1 hover:ring-black/20 dark:hover:ring-white/20 rounded-3xl transition-all">
        {inner}
      </a>
    );
  }

  return inner;
}
