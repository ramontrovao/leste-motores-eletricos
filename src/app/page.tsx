import { HomeBanner } from "./components/HomeBanner";
import { MainCategoriesSection } from "./components/MainCategoriesSection";

export default function Home() {
  return (
    <main className="py-20 w-full bg-white">
      <HomeBanner />

      <div className="m-auto max-w-7xl">
        <MainCategoriesSection />
      </div>
    </main>
  );
}
