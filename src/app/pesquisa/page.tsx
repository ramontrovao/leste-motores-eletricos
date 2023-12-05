import { TCategory } from "@/src/types/Category";
import { Categories } from "./components/Categories";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { ProductsSection } from "./components/ProductsSection";
import { TProduct } from "@/src/types/Product";
import { getProductsQueries } from "@/src/utils/getProductsQueries";

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
  const { categorias } = await fetchHygraph<{
    categorias: TCategory[];
  }>(`query SearchQuery {
        categorias {
          nome
          id
          subcategorias {
            nome
            id
          }
        }
      }`);

  console.log({ categoria, subcategoria, tipoDoProduto });

  const res = await fetchHygraph<{
    produtos: TProduct[];
  }>(`query ProductsQuery {
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
      <div className="w-full relative py-8 m-auto max-w-5xl flex gap-8">
        <Categories categories={categorias} />

        <ProductsSection products={res?.produtos ?? []} />
      </div>
    </main>
  );
}
