import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularBikes />
      <div className="h-[20000px]"></div>
    </main>
  );
}
