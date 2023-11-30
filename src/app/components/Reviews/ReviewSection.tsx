import type { TReview } from "@/src/types/Review";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { ReviewSlider } from "./ReviewSlider";

export const ReviewSection = async () => {
  const { avaliacoes } = await fetchHygraph<{
    avaliacoes: TReview[];
  }>(`query ReviewQuery {
      avaliacoes {
        id
        nomeDoCliente
        numeroDeEstrelas
        descricaoDaAvaliacao
        fotoDoCliente {
          url
        }
      }
    }
    `);

  return (
    <section className="p-4">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-zinc-800">AVALIAÇÕES GERAIS</h2>
      </header>

      <main className="mt-5">
        <ReviewSlider reviews={avaliacoes} />
      </main>
    </section>
  );
};
