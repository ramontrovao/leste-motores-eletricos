import type { TCategory } from "./Category";
import type { TCharacteristic } from "./Characteristic";
import type { THygraphImage } from "./HygraphImage";

export type TProduct = {
  nome: string;
  caracteristicas: TCharacteristic[];
  categorias: TCategory[];
  descricao: string;
  imagensDoProduto: {
    id: string;
    tituloDaImagem: string;
    imagemDoProduto: THygraphImage;
  }[];
};
