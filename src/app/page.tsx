import { HomeBanner } from "./components/HomeBanner";
import { HighlightedProductsSection } from "./components/HighlightedProducts/HighlightedProductsSection";
import { ReviewSection } from "./components/Reviews/ReviewSection";

export default function Home() {
  return (
    <main className="pt-28 sm:pt-16 w-full bg-slate-100">
      <HomeBanner />

      <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
        <HighlightedProductsSection />
        <ReviewSection />
      </div>
    </main>
  );
}
