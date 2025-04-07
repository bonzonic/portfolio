import Image from "next/image";

export interface ChipProps {
  icon?: string;
  name: string;
}

export default function Chip({ icon, name }: ChipProps) {
  return (
    <div
      className={`flex items-center flex-row border-black border-1 dark:border-none rounded-3xl gap-2 ${
        icon
          ? "bg-top-background-white dark:bg-space-gray w-[145px] p-2"
          : "bg-white py-1 px-3 dark:bg-dark-purple text-[#4D4D4D] dark:text-white"
      }`}
    >
      {icon ? (
        <Image
          className="w-[20px] h-[20px]"
          src={icon}
          width={"20"}
          height={"20"}
          alt={`Icon of ${name}`}
        ></Image>
      ) : null}

      <p>{name}</p>
    </div>
  );
}
