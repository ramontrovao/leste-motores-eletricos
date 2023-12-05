import { TCategory } from "@/src/types/Category";
import { Categories } from "./components/Categories";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { ProductsSection } from "./components/ProductsSection";
import { TProduct } from "@/src/types/Product";
import { getProductsQueries } from "@/src/utils/getProductsQueries";
import { transformLoanwords } from "@/src/utils/transformLoanwords";

interface SearchProps {
  params: {
    categoria: string;
    subcategoria: string;
    tipoDoProduto: string;
  };
  searchParams: { [key: string]: string };
}

export default async function Search({
  searchParams: { categoria, subcategoria, tipoDoProduto },
}: SearchProps) {
  console.log(tipoDoProduto);

  const { categoriasParaFiltrar } = await fetchHygraph<{
    categoriasParaFiltrar: TCategory[];
  }>(`query SearchQuery {
    categoriasParaFiltrar {
      nome
      id
      subcategorias {
        nome
        id
      }
    }
  }`);

  const res = await fetchHygraph<{
    produtos: TProduct[];
  }>(`query ProductsQuery {
        produtos(${getProductsQueries({
          category: categoria,
          subcategory: subcategoria,
          typeOfProduct: transformLoanwords(tipoDoProduto),
        })}) {
          id
          nome
          imagensDoProduto {
            imagemDoProduto {
              url
            }
          }
        }
      }`);

  console.log(`query ProductsQuery {
    produtos(${getProductsQueries({
      category: categoria,
      subcategory: subcategoria,
      typeOfProduct: tipoDoProduto,
    })}) {
      id
      nome
      imagensDoProduto {
        imagemDoProduto {
          url
        }
      }
    }
  }`);

  return (
    <main className="w-full bg-slate-100">
      <div className="w-full py-8 px-4 m-auto max-w-5xl flex flex-wrap gap-4 md:flex-nowrap">
        <Categories categories={categoriasParaFiltrar} />

        <ProductsSection products={res?.produtos ?? []} />
      </div>
    </main>
  );
}
