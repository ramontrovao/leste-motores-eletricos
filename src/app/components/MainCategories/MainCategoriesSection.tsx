import { HiArrowRight } from "react-icons/hi2";
import type { TMainCategory } from "@/src/types/MainCategory";
import { MainCategoriesSlider } from "./MainCategoriesSlider";
import Link from "next/link";

interface MainCategoriesSectionProps {
  mainCategories: TMainCategory[];
}

export const MainCategoriesSection = async ({
  mainCategories,
}: MainCategoriesSectionProps) => {
  return (
    <>
      {mainCategories && (
        <section className="p-4">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-zinc-800">
              PRINCIPAIS CATEGORIAS
            </h2>

            <div>
              <Link
                href="/pesquisa"
                className="flex justify-center items-center gap-2 text-xl text-zinc-800 cursor-pointer duration-300 hover:opacity-80">
                VER MAIS CATEGORIAS
                <HiArrowRight />
              </Link>
            </div>
          </header>

          <main className="mt-5">
            <MainCategoriesSlider mainCategories={mainCategories} />
          </main>
        </section>
      )}
    </>
  );
};
