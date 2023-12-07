import type { TProduct } from "@/src/types/Product";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { ProductSection } from "./components/Product/ProductSection";
import { BuyProduct } from "@/src/components/BuyProduct";
import { RecommendedProductsSection } from "./components/RecommendedProducts/RecommendedProductsSection";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product({ params: { id } }: ProductProps) {
  const { produto } = await fetchHygraph<{
    produto: TProduct;
  }>(`query ProductQuery {
    produto(where: {id: "${id}"}) {
      caracteristicas {
        id
        nome
      }
      descricao
      imagensDoProduto {
        id
        imagemDoProduto {
          url
        }
      }
      nome
      categoria
      subcategoria
    }
  }
  `);

  return (
    <>
      <main className="w-full bg-slate-100">
        <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
          <ProductSection product={produto} />
          <RecommendedProductsSection actualProduct={produto} />
        </div>
      </main>

      <BuyProduct productName={produto?.nome} />
    </>
  );
}
