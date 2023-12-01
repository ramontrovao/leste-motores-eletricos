import type { TInitialBanner } from "@/src/types/InitialBanner";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { HomeBannerSlider } from "./HomeBannerSlider";

export const HomeBannerSection = async () => {
  const { bannerDaTelaInicial } =
    await fetchHygraph<TInitialBanner>(`query HomeBannerQuery {
    bannerDaTelaInicial(where: {id: "clpkinrn60ns10blsz4kmwt1b"}) {
      imagemDoBanner {
        url
      }
    }
  }`);

  return (
    <section>
      <HomeBannerSlider
        images={[
          bannerDaTelaInicial.imagemDoBanner.url,
          bannerDaTelaInicial.imagemDoBanner.url,
          bannerDaTelaInicial.imagemDoBanner.url,
        ]}
      />
    </section>
  );
};