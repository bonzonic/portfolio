import Profile from "./components/profile";

export default function Home() {
  return (
    <main className="p-4 sm:p-10 bg-blue-100">
      <div className="max-w-[1440px] flex justify-self-center">
        <Profile />
      </div>
    </main>
  );
}
