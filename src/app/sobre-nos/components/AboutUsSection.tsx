import type { TAboutCompany } from "@/src/types/AboutCompany";
import Image from "next/image";

interface AboutUsSectionProps {
  aboutCompany: TAboutCompany;
}

export const AboutUsSection = ({
  aboutCompany: { imagem, titulo, texto },
}: AboutUsSectionProps) => {
  return (
    <section className="p-4 flex flex-wrap gap-8 justify-between md:flex-nowrap">
      <Image
        className="w-full max-w-[35rem] rounded-lg"
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
