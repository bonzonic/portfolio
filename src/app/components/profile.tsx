import Link from "next/link";
import Image from "next/image";
import NavigationButton, { ButtonProfile } from "./button";

export default function Profile() {
  return (
    <>
      <div>
        <div>
          <h1>
            Hi, I’m Wong Yi Zhen Nicholas, specializes in Frontend position,
            looking to become a Full-Stack in the future.
          </h1>
          <NavigationButton buttonProfile={ButtonProfile.LinkedIn} />
        </div>
        <Link href="" className="flex justify-end">
          <Image
            className="rounded-full"
            src="/zn.jpg"
            width={"60"}
            height={"60"}
            alt={"Handsome picture of Nicholas"}
          ></Image>
        </Link>
      </div>
    </>
  );
}
