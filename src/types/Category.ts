import type { TSubcategory } from "./Subcategory";

export type TCategory = {
  id: string;
  nome: string;
  subcategorias: TSubcategory[];
};
