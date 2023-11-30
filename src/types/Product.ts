import type { TCategory } from "./Category";
import type { TCharacteristic } from "./Characteristic";
import type { HygraphImage } from "./HygraphImage";

export type TProduct = {
  nome: string;
  caracteristicas: TCharacteristic[];
  categorias: TCategory[];
  descricao: string;
  imagensDoProduto: HygraphImage[];
};
