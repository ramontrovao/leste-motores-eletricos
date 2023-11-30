import type { TInitialBanner } from "@/src/types/InitialBanner";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import Image from "next/image";

export const HomeBanner = async () => {
  const { bannerDaTelaInicial } =
    await fetchHygraph<TInitialBanner>(`query HomeBannerQuery {
    bannerDaTelaInicial(where: {id: "clpkinrn60ns10blsz4kmwt1b"}) {
      imagemDoBanner {
        url
      }
    }
  }`);

  return (
    <header>
      <Image
        className="w-full min-h-[20vh] md:min-h-[50vh]"
        src={bannerDaTelaInicial.imagemDoBanner.url}
        width={1280}
        height={420}
        alt=""
      />
    </header>
  );
};
