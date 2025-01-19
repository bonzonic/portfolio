import { useState } from "react";
import Button from "./button";

export default function Category() {
  const [activeSelected, setActiveSelected] = useState(0);

  return (
    <>
      <div className="card mx-auto flex-row divide-solid bg-purple divide-x-4 items-center inline-flex gap-4 divide-gray-200">
        <p className="text-2xl">Category</p>
        <div className="flex flex-row gap-4 pl-4">
          <Button
            active={activeSelected === 0}
            name="Projects"
            onClick={() => setActiveSelected(0)}
          />
          <Button
            active={activeSelected === 1}
            name="Recent Activities"
            onClick={() => setActiveSelected(1)}
          />
          <Button
            active={activeSelected === 2}
            name="Achievements"
            onClick={() => setActiveSelected(2)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-flow-row">
        <div className="card">
          
        </div>
      </div>
    </>
  );
}
