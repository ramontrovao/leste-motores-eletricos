import type { TProduct } from "@/src/types/Product";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { ProductSection } from "./components/Product/ProductSection";
import { BuyProduct } from "@/src/components/BuyProduct";
import { RecommendedProductsSection } from "./components/RecommendedProducts/RecommendedProductsSection";
import { TInformation } from "@/src/types/Information";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product({ params: { id } }: ProductProps) {
  const { produto, produtos, informacao } = await fetchHygraph<{
    produto: TProduct;
    produtos: TProduct[];
    informacao: TInformation;
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

    produtos {
      nome
      id
      descricao
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
  
    informacao(where: {id: "clpkiwoog0nk30blwftd2eo8i"}) {
    mensagemRecomendadaWhatsapp
    numeroDoWhatsapp
    }
  }`);

  return (
    <>
      <main className="w-full bg-slate-100">
        <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
          <ProductSection product={produto} />
          <RecommendedProductsSection
            products={produtos}
            actualProduct={produto}
          />
        </div>
      </main>

      <BuyProduct
        whatsappNumber={informacao.numeroDoWhatsapp}
        productName={produto?.nome}
      />
    </>
  );
}
