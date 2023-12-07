import { HighlightedProductsSection } from "./components/HighlightedProducts/HighlightedProductsSection";
import { HomeBannerSection } from "./components/HomeBanner/HomeBannerSection";
import { MainCategoriesSection } from "./components/MainCategories/MainCategoriesSection";
import { ReviewSection } from "./components/Reviews/ReviewSection";

export default function Home() {
  return (
    <main className="w-full bg-slate-100">
      <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
        <HomeBannerSection />
        <MainCategoriesSection />
        <HighlightedProductsSection />
        <ReviewSection />
      </div>
    </main>
  );
}
