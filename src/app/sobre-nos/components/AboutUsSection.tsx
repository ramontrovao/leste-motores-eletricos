import { TAboutCompany } from "@/src/types/AboutCompany";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import Image from "next/image";

export const AboutUsSection = async () => {
  const {
    sobreAEmpresa: { titulo, texto, imagem },
  } = await fetchHygraph<{ sobreAEmpresa: TAboutCompany }>(`query AboutUsQuery {
            sobreAEmpresa(where: {id: "clpkjawak0orf0blsyfwc3bfl"}) {
              texto
              titulo
              imagem {
                url
              }
            }
          }
          `);

  return (
    <section className="p-4 flex flex-wrap gap-8 justify-between md:relative md:flex-nowrap">
      <Image
        className="md:sticky md:top-0 w-full max-w-[35rem] rounded-lg"
        src={imagem.url}
        alt=""
        width={450}
        height={450}
      />

      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-xl font-bold">{titulo}</h2>

        <p className="text-md">{texto}</p>
      </div>
    </section>
  );
};
