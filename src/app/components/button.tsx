export default function Button({ text }: {text: string}) {
  return (
    <div className="bg-blue-300 w-80 text-6xl">
      {text}
    </div>
  );
}
