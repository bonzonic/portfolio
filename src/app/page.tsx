import Button from "./components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>
        Hi, I’m Wong Yi Zhen Nicholas, specializes in Frontend position, looking
        to become a Full-Stack in the future.
      </h1>
      <Image src={"/zn.jpg"} width={480} height={480}></Image>
      <Button text="meow" />
    </main>
  );
}
