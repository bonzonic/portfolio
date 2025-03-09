import React from "react";

export default function SectionBreak({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center">
        <div className="flex-grow border-t border-black opacity-30"></div>
        <h5 className="mx-4">{text}</h5>
        <div className="flex-grow border-t border-black opacity-30"></div>
      </div>
      {children}
    </section>
  );
}
