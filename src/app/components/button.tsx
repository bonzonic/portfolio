import Image from "next/image";

interface ButtonValue {
  name: string;
  url?: string;
  image?: string;
  download?: boolean;
  onClick?: () => void;
  active?: boolean;
}

export default function Button({
  name,
  url = "#",
  image = undefined,
  download = false,
  onClick = () => false,
  active = false,
}: ButtonValue) {
  return (
    <a
      href={url}
      target={url === "#" ? "_self" : "_blank"}
      download={download}
      onClick={onClick}
    >
      <div
        className={`bg-[#4D7DFF] hover:bg-blue-500 flex flex-row gap-1.5 py-1 px-3 text-neutral-50 rounded-lg items-center`}
      >
        {image ? (
          <Image
            className="ml-1"
            src={image}
            alt={`${name} Icon`}
            width={"20"}
            height={"20"}
          />
        ) : (
          <></>
        )}
        <p>{name}</p>
      </div>
    </a>
  );
}
