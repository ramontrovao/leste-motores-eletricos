interface GetProductsQueriesProps {
  category: string | null;
  subcategory: string | null;
  typeOfProduct: string | null;
  q: string | null;
}

export const getProductsQueries = ({
  category,
  subcategory,
  typeOfProduct,
  q,
}: GetProductsQueriesProps) => {
  let finalQuery = "";
  const haveQueries = category || subcategory || typeOfProduct || q;

  if (!haveQueries) return "";

  if (q) {
    finalQuery = `where: { nome_contains: "${q}" }`;
  }

  if (typeOfProduct && !category && !subcategory) {
    finalQuery = `where: { tipoDoProduto_in: [${typeOfProduct}] }`;
  }

  if (category) {
    finalQuery = `where: {categoria_contains_some: "${category}" ${
      subcategory ? `, subcategoria_contains_some: "${subcategory}"` : ""
    } ${typeOfProduct ? `, tipoDoProduto_in: [${typeOfProduct}]` : ""}}`;
  }

  return finalQuery;
};
