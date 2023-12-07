import type { THygraphImage } from "./HygraphImage";

export type TReview = {
  id: string;
  nomeDoCliente: string;
  numeroDeEstrelas: string;
  descricaoDaAvaliacao: string;
  fotoDoCliente: THygraphImage;
};
