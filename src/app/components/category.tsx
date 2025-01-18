import Button from "./button";

export default function Category() {
  return (
    <div className="card flex-row divide-x-8 items-center inline-flex">
      <p className="text-2xl">Category</p>
      <div className="flex flex-row gap-4">
        <Button name="Projects" />
        <Button name="Recent Activities" />
        <Button name="Achievements" />
      </div>
    </div>
  );
}
