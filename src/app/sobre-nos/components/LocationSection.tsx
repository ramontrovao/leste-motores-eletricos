import type { TAboutCompany } from "@/src/types/AboutCompany";
import Image from "next/image";

interface LocationSectionProps {
  aboutLocation: TAboutCompany;
}

export const LocationSection = ({
  aboutLocation: { titulo, texto, imagem },
}: LocationSectionProps) => {
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
