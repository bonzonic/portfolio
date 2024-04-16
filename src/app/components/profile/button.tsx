import Link from "next/link";
import Image from "next/image";

export default function ProfileButton() {
  return (
    <Link href="" className="flex justify-end">
      <Image
        className="rounded-full"
        src="/zn.jpg"
        width={"60"}
        height={"60"}
      ></Image>
    </Link>
  );
}
