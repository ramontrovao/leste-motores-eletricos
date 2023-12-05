import { HighlightedProductsSection } from "./components/HighlightedProducts/HighlightedProductsSection";
import { HomeBannerSection } from "./components/HomeBanner/HomeBannerSection";
import { ReviewSection } from "./components/Reviews/ReviewSection";

export default function Home() {
  return (
    <main className="w-full bg-slate-100">
      <div className="py-8 m-auto max-w-5xl flex flex-col gap-8">
        <HomeBannerSection />
        <HighlightedProductsSection />
        <ReviewSection />
      </div>
    </main>
  );
}
