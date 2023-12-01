import type { TProduct } from "@/src/types/Product";
import { ProductInfos } from "./ProductInfos";
import { ProductImagesSlider } from "./ProductImagesSlider";

interface ProductSectionProps {
  product: TProduct;
}

export const ProductSection = ({ product }: ProductSectionProps) => {
  return (
    <section className="p-4">
      <header>
        <h1 className="text-2xl font-bold">{product.nome}</h1>
      </header>

      <main className="mt-4 flex flex-wrap justify-between items-center gap-4">
        <ProductImagesSlider images={product.imagensDoProduto} />
        <ProductInfos product={product} />
      </main>
    </section>
  );
};
