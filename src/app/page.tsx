import { HomeBanner } from "./components/HomeBanner";
import { HighlightedProductsSection } from "./components/HighlightedProducts/HighlightedProductsSection";
import { ReviewSection } from "./components/Reviews/ReviewSection";

export default function Home() {
  return (
    <main className="py-20 w-full bg-slate-100">
      <HomeBanner />

      <div className="m-auto max-w-7xl">
        <HighlightedProductsSection />
        <ReviewSection />
      </div>
    </main>
  );
}
