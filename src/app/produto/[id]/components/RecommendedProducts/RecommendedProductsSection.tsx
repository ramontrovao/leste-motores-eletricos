import { HiArrowRight } from "react-icons/hi2";
import { RecommendedProductsSlider } from "./RecommendedProductsSlider";
import type { TProduct } from "@/src/types/Product";

interface RecommendedProductsSectionProps {
  actualProduct: TProduct;
  products: TProduct[];
}

export const RecommendedProductsSection = ({
  actualProduct,
  products,
}: RecommendedProductsSectionProps) => {
  const recommendedProducts = products.filter(
    (product) => product?.categoria === actualProduct?.categoria
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
