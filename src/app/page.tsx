import type { THygraphImage } from "../types/HygraphImage";
import type { TMainCategory } from "../types/MainCategory";
import type { TProduct } from "../types/Product";
import type { TReview } from "../types/Review";
import { fetchHygraph } from "../utils/fetchHygraph";
import { HighlightedProductsSection } from "./components/HighlightedProducts/HighlightedProductsSection";
import { HomeBannerSection } from "./components/HomeBanner/HomeBannerSection";
import { MainCategoriesSection } from "./components/MainCategories/MainCategoriesSection";
import { ReviewSection } from "./components/Reviews/ReviewSection";

export default async function Home() {
  const {
    produtosDestaque,
    bannerDaTelaInicial,
    principaisCategorias,
    avaliacoes,
  } = await fetchHygraph<{
    produtosDestaque: { produtos: TProduct[] };
    bannerDaTelaInicial: { imagemDoBanner: THygraphImage[] };
    principaisCategorias: TMainCategory[];
    avaliacoes: TReview[];
  }>(`query HighlightedProductCardQuery {
      produtosDestaque(where: {id: "clpkja6sf0nwt0bm1j2o5p06u"}) {
        produtos {
          id
          nome
          imagensDoProduto {
            imagemDoProduto {
              url
            }
          }
          descricao
        }
      }

      bannerDaTelaInicial(where: {id: "clpkinrn60ns10blsz4kmwt1b"}) {
        imagemDoBanner {
          url
          id
        }
      }

      principaisCategorias {
        id
        nome
        imagem {
          url
        }
      }
    

      avaliacoes {
        id
        nomeDoCliente
        numeroDeEstrelas
        descricaoDaAvaliacao
        fotoDoCliente {
          url
        }
      }
    }`);

  return (
    <main className="w-full bg-slate-100">
      <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
        <HomeBannerSection images={bannerDaTelaInicial.imagemDoBanner} />
        <MainCategoriesSection mainCategories={principaisCategorias} />
        {produtosDestaque && (
          <HighlightedProductsSection products={produtosDestaque.produtos} />
        )}
        <ReviewSection reviews={avaliacoes} />
      </div>
    </main>
  );
}
