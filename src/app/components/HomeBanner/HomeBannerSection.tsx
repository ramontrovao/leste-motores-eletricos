import type { TInitialBanner } from "@/src/types/InitialBanner";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { HomeBannerSlider } from "./HomeBannerSlider";

export const HomeBannerSection = async () => {
  const {
    bannerDaTelaInicial: { imagemDoBanner },
  } = await fetchHygraph<TInitialBanner>(`query HomeBannerQuery {
      bannerDaTelaInicial(where: {id: "clpkinrn60ns10blsz4kmwt1b"}) {
        imagemDoBanner {
          url
          id
        }
      }
    }`);

  return (
    <section className="px-4">
      <HomeBannerSlider images={imagemDoBanner} />
    </section>
  );
};
