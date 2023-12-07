import type { TAboutCompany } from "@/src/types/AboutCompany";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import Image from "next/image";

export const LocationSection = async () => {
  const {
    localizacao: { titulo, texto, imagem },
  } = await fetchHygraph<{
    localizacao: TAboutCompany;
  }>(`query LocationQuery {
    localizacao(where: {id: "clpkj43zc0ohs0bls5okpyzzb"}) {
      texto
      titulo
      imagem {
        url
      }
    }
  }
  `);

  return (
    <section className="p-4 flex flex-wrap gap-8 justify-between md:flex-nowrap">
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-xl font-bold">{titulo}</h2>

        <p className="text-md">{texto}</p>
      </div>

      <Image
        className="w-full max-w-[35rem] rounded-lg"
        src={imagem.url}
        alt=""
        width={450}
        height={450}
      />
    </section>
  );
};
