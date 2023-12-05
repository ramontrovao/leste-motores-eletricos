import { TCategory } from "@/src/types/Category";
import { Categories } from "./components/Categories";
import { fetchHygraph } from "@/src/utils/fetchHygraph";

export default async function Search() {
  const { categorias } = await fetchHygraph<{
    categorias: TCategory[];
  }>(`query SearchQuery {
        categorias {
          nome
          id
          subcategorias {
            nome
            id
          }
        }
      }`);

  return (
    <main className="w-full bg-slate-100">
      <div className="w-full relative py-8 m-auto max-w-5xl flex gap-8">
        <Categories categories={categorias} />

        <div className="h-screen" />
      </div>
    </main>
  );
}
