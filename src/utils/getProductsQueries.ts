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
    finalQuery = `where: {categorias_some: {nome: "${category}" ${
      subcategory && `, subcategorias_some: {nome: "${subcategory}"}`
    }}}`;
  }

  return finalQuery;
};
