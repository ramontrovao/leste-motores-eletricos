"use client";

import { ProductCard } from "@/src/components/ProductCard";
import type { TProduct } from "@/src/types/Product";
import { FaSadCry } from "react-icons/fa";

interface ProductsSectionProps {
  products: TProduct[];
}

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const hasProducts = products && products.length > 0;

  return (
    <>
      {!hasProducts && (
        <section className="flex flex-col gap-4 flex-1 justify-center items-center">
          <span className="text-4xl text-blue">
            <FaSadCry />
          </span>

          <span className="text-xl text-center">
            Não encontramos o que você buscava :(
          </span>
        </section>
      )}

      {hasProducts && (
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
      )}
    </>
  );
};
