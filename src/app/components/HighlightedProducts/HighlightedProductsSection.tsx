import type { THighlightedProducts } from "@/src/types/HighlightedProducts";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { HiArrowRight } from "react-icons/hi2";
import { HighlightedProductsSlider } from "./HighlightedProductsSlider";

export const HighlightedProductsSection = async () => {
  const { produtosDestaque } =
    await fetchHygraph<THighlightedProducts>(`query HighlightedProductCardQuery {
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
      }`);

  return (
    <>
      {produtosDestaque && (
        <section className="p-4">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-zinc-800">
              PRODUTOS DESTAQUE
            </h2>

            <div>
              <a className="flex justify-center items-center gap-2 text-xl text-zinc-800 cursor-pointer duration-300 hover:opacity-80">
                VER MAIS PRODUTOS
                <HiArrowRight />
              </a>
            </div>
          </header>

          <main className="mt-5">
            <HighlightedProductsSlider products={produtosDestaque?.produtos} />
          </main>
        </section>
      )}
    </>
  );
};
