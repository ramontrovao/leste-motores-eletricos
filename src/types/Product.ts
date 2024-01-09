import type { TCategory } from "./Category";
import type { TCharacteristic } from "./Characteristic";
import type { THygraphAsset } from "./HygraphImage";

export type TProduct = {
  id: string;
  nome: string;
  caracteristicas: TCharacteristic[];
  categoria: string[];
  descricao: string;
  imagensDoProduto: {
    id: string;
    tituloDaImagem: string;
    imagemDoProduto: THygraphAsset;
  }[];
};
