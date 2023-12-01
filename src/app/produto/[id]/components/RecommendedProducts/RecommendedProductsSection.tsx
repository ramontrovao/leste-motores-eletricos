import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { HiArrowRight } from "react-icons/hi2";
import { RecommendedProductsSlider } from "./RecommendedProductsSlider";
import { TProduct } from "@/src/types/Product";

interface RecommendedProductsSectionProps {
  actualProduct: TProduct;
}

export const RecommendedProductsSection = async ({
  actualProduct,
}: RecommendedProductsSectionProps) => {
  const { produtos } = await fetchHygraph<{
    produtos: TProduct[];
  }>(`query ProductsQuery {
      produtos {
        nome
        id
        descricao
        categorias {
          id
          nome
          subcategorias {
            id
            nome
          }
        }
        caracteristicas {
          id
          nome
        }
        imagensDoProduto {
          imagemDoProduto {
            id
            url
          }
          tituloDaImagem
        }
      }
    }
    
      `);

  const recommendedProducts = produtos.filter(
    (product) => product?.categorias === actualProduct?.categorias
  );

  return (
    <>
      {recommendedProducts.length > 0 && (
        <section className="p-4">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-zinc-800">
              PRODUTOS PRÓXIMOS
            </h2>

            <div>
              <a className="flex justify-center items-center gap-2 text-xl text-zinc-800 cursor-pointer duration-300 hover:opacity-80">
                VER MAIS PRODUTOS
                <HiArrowRight />
              </a>
            </div>
          </header>

          <main className="mt-5">
            <RecommendedProductsSlider products={recommendedProducts} />
          </main>
        </section>
      )}
    </>
  );
};
