import Image from "next/image";

export interface ChipProps {
  icon?: string;
  name: string;
}

export default function Chip({ icon, name }: ChipProps) {
  const textColor = icon ? "black" : "text-[#4D4D4D]";

  return (
    <div
      className={`flex items-center flex-row border-black border-1 rounded-3xl gap-2 ${
        icon ? "bg-top-background-white w-[145px] p-2" : "bg-white py-1 px-3"
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

      <p className={`${textColor}`}>{name}</p>
    </div>
  );
}
