import Image from "next/image";

interface ButtonValue {
  name: string;
  url?: string;
  image?: string;
  download?: boolean;
  onClick?: () => void;
}

export default function Button({
  name,
  url = "#",
  image = undefined,
  download = false,
  onClick = () => false,
}: ButtonValue) {
  return (
    <a href={url} target="_blank" download={download} onClick={onClick}>
      <div className="bg-blue-300 flex flex-row py-1 px-4 text-white rounded-md items-center">
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
