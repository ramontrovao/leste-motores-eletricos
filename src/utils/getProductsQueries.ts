interface GetProductsQueriesProps {
  category: string | null;
  subcategory: string | null;
  typeOfProduct: string | null;
}

export const getProductsQueries = ({
  category,
  subcategory,
  typeOfProduct,
}: GetProductsQueriesProps) => {
  let finalQuery = "";
  const haveQueries = category || subcategory || typeOfProduct;

  if (!haveQueries) return "";

  if (category) {
    finalQuery = `where: {categoria_contains_some: "${category}" ${
      subcategory ? `, subcategoria_contains_some: "${subcategory}"` : ""
    }
      ${typeOfProduct ? `, tipoDoProduto_in: [${typeOfProduct}]` : ""}
    }`;
  }

  return finalQuery;
};
