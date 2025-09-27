import Info from "./info";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start">
      <h1 className="text-2xl md:text-6xl font-bold">Specify your target</h1>

      <Info/>
    </main>
  );
}