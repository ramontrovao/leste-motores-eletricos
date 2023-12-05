"use client";

import { ProductCard } from "@/src/components/ProductCard";
import { TProduct } from "@/src/types/Product";

interface ProductsSectionProps {
  products: TProduct[];
}

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
    <section className="gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <ProductCard
          productAlt={`Imagem do produto ${product.nome}`}
          key={product.id}
          productName={product.nome}
          imageUrl={product.imagensDoProduto[0].imagemDoProduto.url}
          productLink={`/produto/${product.id}`}
        />
      ))}
    </section>
  );
};
