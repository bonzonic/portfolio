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
        className={`bg-blue-400 active:bg-blue-500 hover:bg-blue-500 flex flex-row py-1 px-4 text-white rounded-md items-center ${
          active
            ? "outline outline-2 outline-offset-2 outline-black bg-blue-500"
            : ""
        }`}
      >
        <h6 className="text-lg">{name}</h6>
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
      </div>
    </a>
  );
}
