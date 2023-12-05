"use client";

import type { TCategory } from "@/src/types/Category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface CategoriesProps {
  categories: TCategory[];
}

type TSetCategoryParams = {
  categoryName: string;
  queryKey?: "categoria" | "subcategoria" | "tipoDoProduto";
};

export const Categories = ({ categories }: CategoriesProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentQueries = new URLSearchParams(
    Array.from(searchParams.entries())
  );

  const categoryActive = currentQueries
    .get("categoria")
    ?.toString()
    .toLowerCase();
  const subCategoryActive = currentQueries
    .get("subcategoria")
    ?.toString()
    .toLowerCase();
  const productTypeActive = currentQueries
    .get("tipoDoProduto")
    ?.toString()
    .toLowerCase();

  const productTypes = [
    { name: "Locação", color: "#C7B22A" },
    { name: "Pesados", color: "#EB7373" },
    { name: "Vendas", color: "#2EBB17" },
  ];

  const handleSetCategory = ({
    categoryName,
    queryKey = "categoria",
  }: TSetCategoryParams) => {
    currentQueries.delete("subcategoria");

    if (currentQueries.get(queryKey) === categoryName) {
      return currentQueries.delete(queryKey);
    }

    currentQueries.set(queryKey, categoryName);

    const queriesUpdated = currentQueries.toString();
    const query = queriesUpdated ? `?${queriesUpdated}` : "";

    router.push(`${pathname}${query}`);
  };

  const renderSubCategories = (category: TCategory) => {
    return (
      <>
        {category.subcategorias.map((subcategory) => (
          <p
            className="ml-2 flex items-center gap-2 text-md cursor-pointer transition-all duration-300 hover:opacity-80"
            onClick={() =>
              handleSetCategory({
                categoryName: subcategory.nome,
                queryKey: "subcategoria",
              })
            }
            style={{
              ...(subCategoryActive === subcategory.nome.toLowerCase() && {
                color: "#064987",
              }),
            }}
            key={subcategory.id}>
            {subcategory.nome} <FaArrowRight />
          </p>
        ))}
      </>
    );
  };

  const renderCategories = () => {
    return (
      <div className="ml-2 mt-2">
        {categories.map((category) => (
          <div key={category.id}>
            {category.subcategorias.length > 0 && (
              <details open={categoryActive === category.nome.toLowerCase()}>
                <summary
                  className="flex items-center gap-2 list-none text-md cursor-pointer transition-all duration-300 hover:opacity-80"
                  onClick={() =>
                    handleSetCategory({ categoryName: category.nome })
                  }
                  style={{
                    ...(categoryActive === category.nome.toLowerCase() && {
                      color: "#064987",
                    }),
                  }}>
                  {category.nome} <FaArrowRight />
                </summary>
                {renderSubCategories(category)}
              </details>
            )}

            {category.subcategorias.length <= 0 && (
              <p
                className="flex items-center gap-2 text-md cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() =>
                  handleSetCategory({ categoryName: category.nome })
                }
                style={{
                  ...(categoryActive === category.nome.toLowerCase() && {
                    color: "#064987",
                  }),
                }}>
                {category.nome} <FaArrowRight />
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderProductType = () => {
    return (
      <RadioGroup.Root
        onValueChange={(value) =>
          handleSetCategory({ categoryName: value, queryKey: "tipoDoProduto" })
        }
        className="ml-2 mt-2 mb-2 flex gap-2 flex-wrap">
        {productTypes.map((productType) => (
          <RadioGroup.Item
            className="flex justify-center items-center gap-2 border border-solid border-transparent bg-zinc-200 transition-all duration-300 rounded-md p-2 hover:opacity-80"
            value={productType.name}
            key={productType.name}
            style={{
              ...(productTypeActive === productType.name.toLowerCase() && {
                color: productType.color,
                borderColor: productType.color,
              }),
            }}>
            {productType.name} <FaExclamationCircle />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  };

  return (
    <aside className="p-4 rounded-md z-20 max-w-[20rem] w-full bg-white overflow-y-scroll h-80">
      <div>
        <h2 className="text-lg mb-4 text-black pb-2 border-b border-b-blue">
          Filtros de pesquisa
        </h2>

        <div>
          <span className="my-4 text-md">Tipo do produto</span>

          {renderProductType()}
        </div>

        <div>
          <span className="my-4 text-md">Categorias</span>

          {renderCategories()}
        </div>
      </div>
    </aside>
  );
};
