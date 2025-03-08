import Image from "next/image";

export interface Chip {
  icon: string;
  name: string;
}

export default function Chip({ icon, name }: Chip) {
  return (
    <div className="flex items-center flex-row border-black border-1 rounded-3xl gap-2 p-3 w-[145px] bg-top-background-white">
      <Image
        className="w-[20px] h-[20px]"
        src={icon}
        width={"20"}
        height={"20"}
        alt={`Icon of ${name}`}
      ></Image>
      <p>{name}</p>
    </div>
  );
}
