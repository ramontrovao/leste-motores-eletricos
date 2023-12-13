import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { AboutUsSection } from "./components/AboutUsSection";
import { LocationSection } from "./components/LocationSection";
import type { TAboutCompany } from "@/src/types/AboutCompany";

export default async function AboutUs() {
  const { sobreAEmpresa, localizacao } = await fetchHygraph<{
    sobreAEmpresa: TAboutCompany;
    localizacao: TAboutCompany;
  }>(`query AboutUsQuery {
    sobreAEmpresa(where: {id: "clpkjawak0orf0blsyfwc3bfl"}) {
      texto
      titulo
      imagem {
        url
      }
    }
    localizacao(where: {id: "clpkj43zc0ohs0bls5okpyzzb"}) {
      texto
      titulo
      imagem {
        url
      }}          
}`);

  return (
    <main className="w-full bg-slate-100">
      <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
        <AboutUsSection aboutCompany={sobreAEmpresa} />
        <LocationSection aboutLocation={localizacao} />
      </div>
    </main>
  );
}
