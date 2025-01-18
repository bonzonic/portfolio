"use client";

import Button from "./components/button";
import Category from "./components/category";
import Profile from "./components/profile";

export default function Home() {
  return (
    <main className="p-4 sm:p-10 bg-gray-100">
      <div className="max-w-[1440px] flex justify-self-center flex-col">
        <Profile />
        <Category />
      </div>
    </main>
  );
}
