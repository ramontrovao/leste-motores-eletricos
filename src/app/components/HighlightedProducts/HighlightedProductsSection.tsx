import type { TProduct } from "@/src/types/Product";
import { HiArrowRight } from "react-icons/hi2";
import { HighlightedProductsSlider } from "./HighlightedProductsSlider";
import Link from "next/link";

interface HighlightedProductsSectionProps {
  products: TProduct[];
}

export const HighlightedProductsSection = ({
  products,
}: HighlightedProductsSectionProps) => {
  return (
    <>
      {products && (
        <section className="p-4">
          <header className="flex gap-2 justify-between items-center">
            <h2 className="w-min text-md font-bold text-zinc-800 md:w-auto md:text-xl">
              PRODUTOS DESTAQUE
            </h2>

            <div>
              <Link
                href="/pesquisa"
                className="w-min flex justify-center items-center gap-2 text-md text-zinc-800 cursor-pointer duration-300 hover:opacity-80 md:w-auto  md:text-xl">
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
