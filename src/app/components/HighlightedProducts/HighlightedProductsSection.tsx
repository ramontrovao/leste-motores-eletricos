import type { TProduct } from "@/src/types/Product";
import { HiArrowRight } from "react-icons/hi2";
import { HighlightedProductsSlider } from "./HighlightedProductsSlider";
import Link from "next/link";

interface HighlightedProductsSectionProps {
  products: TProduct[];
}

export const HighlightedProductsSection = async ({
  products,
}: HighlightedProductsSectionProps) => {
  return (
    <>
      {products && (
        <section className="p-4">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-zinc-800">
              PRODUTOS DESTAQUE
            </h2>

            <div>
              <Link
                href="/pesquisa"
                className="flex justify-center items-center gap-2 text-xl text-zinc-800 cursor-pointer duration-300 hover:opacity-80">
                VER MAIS PRODUTOS
                <HiArrowRight />
              </Link>
            </div>
          </header>

          <main className="mt-5">
            <HighlightedProductsSlider products={products} />
          </main>
        </section>
      )}
    </>
  );
};
