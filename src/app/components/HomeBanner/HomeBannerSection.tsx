import type { THygraphAsset } from "@/src/types/HygraphImage";
import { HomeBannerSlider } from "./HomeBannerSlider";

interface HomeBannerSectionProps {
  images: THygraphAsset[];
}

export const HomeBannerSection = ({ images }: HomeBannerSectionProps) => {
  return (
    <section className="px-4">
      <HomeBannerSlider images={images} />
    </section>
  );
};
