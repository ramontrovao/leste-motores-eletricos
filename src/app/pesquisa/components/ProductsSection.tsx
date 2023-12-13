"use client";

import { ProductCard } from "@/src/components/ProductCard";
import type { TProduct } from "@/src/types/Product";
import { FaSadCry } from "react-icons/fa";
import { Pagination } from "./Pagination";

interface ProductsSectionProps {
  products: TProduct[];
  productsPerPage?: number;
  page?: number;
}

export const ProductsSection = ({
  products,
  productsPerPage = 30,
  page = 1,
}: ProductsSectionProps) => {
  const productsSliced = products.slice(
    page === 1 ? 0 : (page - 1) * productsPerPage,
    page * productsPerPage
  );
  const hasProducts = productsSliced && productsSliced.length > 0;
  const pages = Math.ceil(products.length / productsPerPage);

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
        <section className="w-full flex flex-col justify-center items-center">
          <div className="mb-8 gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {productsSliced?.map((product, index) => (
              <ProductCard
                productAlt={`Imagem do produto ${product.nome}`}
                key={index}
                productName={product.nome}
                imageUrl={product.imagensDoProduto[0].imagemDoProduto.url}
                productLink={`/produto/${product.id}`}
              />
            ))}
          </div>

          {pages > 1 && (
            <Pagination
              pageActive={page}
              pages={pages}
            />
          )}
        </section>
      )}
    </>
  );
};
