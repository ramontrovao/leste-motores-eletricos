import type { TCategory } from "@/src/types/Category";
import type { TProduct } from "@/src/types/Product";
import { Categories } from "./components/Categories";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { ProductsSection } from "./components/ProductsSection";
import { getProductsQueries } from "@/src/utils/getProductsQueries";
import { transformLoanwords } from "@/src/utils/transformLoanwords";
import { TProductType } from "@/src/types/ProductType";

interface SearchProps {
  searchParams: { [key: string]: string };
}

export default async function Search({
  searchParams: { categoria, subcategoria, tipoDoProduto, q, pagina = "1" },
}: SearchProps) {
  const products = await fetchHygraph<{
    produtos: TProduct[];
    informacao: {
      produtosPorPagina: string;
    };
    categoriasParaFiltrar: TCategory[];
    tipoDeProdutos: TProductType[]
  }>(`query ProductsQuery {
          produtos(${getProductsQueries({
            category: categoria,
            subcategory: subcategoria,
            typeOfProduct: transformLoanwords(tipoDoProduto),
            q: transformLoanwords(q),
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

  const infos = await fetchHygraph<{
    produtos: TProduct[];
    informacao: {
      produtosPorPagina: string;
    };
    categoriasParaFiltrar: TCategory[];
    tipoDeProdutos: TProductType[]
  }>(`query InfosQuery {
          informacao(where: {id: "clpkiwoog0nk30blwftd2eo8i"}) {
            produtosPorPagina
          }

          categoriasParaFiltrar {
            nome
            id
            subcategorias {
              nome
              id
            }
          }

          tipoDeProdutos {
            tipoDoProduto
            id
            cor {
              hex
            }
          }
        }`);

  return (
    <main className="w-full px-4 py-8 bg-slate-100">
      {categoria && (
        <header className="w-full pb-2 m-auto max-w-7xl">
          <h2 className="text-2xl font-bold">
            {subcategoria && `${subcategoria} em ${categoria}`}
            {!subcategoria && `${categoria}`}
          </h2>
        </header>
      )}
      <div className="w-full m-auto max-w-7xl flex flex-wrap gap-4 md:flex-nowrap">
        <Categories productTypes={infos?.tipoDeProdutos} categories={infos?.categoriasParaFiltrar} />
        <ProductsSection
          page={Number(pagina)}
          products={products?.produtos ?? []}
          productsPerPage={Number(infos?.informacao?.produtosPorPagina)}
        />
      </div>
    </main>
  );
}
