import type { THygraphImage } from "@/src/types/HygraphImage";
import { HomeBannerSlider } from "./HomeBannerSlider";

interface HomeBannerSectionProps {
  images: THygraphImage[];
}

export const HomeBannerSection = async ({ images }: HomeBannerSectionProps) => {
  return (
    <section className="px-4">
      <HomeBannerSlider images={images} />
    </section>
  );
};
