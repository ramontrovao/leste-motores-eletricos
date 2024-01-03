import { HiArrowRight } from "react-icons/hi2";
import type { TMainCategory } from "@/src/types/MainCategory";
import { MainCategoriesSlider } from "./MainCategoriesSlider";
import Link from "next/link";

interface MainCategoriesSectionProps {
  mainCategories: TMainCategory[];
}

export const MainCategoriesSection = ({
  mainCategories,
}: MainCategoriesSectionProps) => {
  return (
    <>
      {mainCategories && (
        <section className="p-4">
          <header className="flex gap-2 justify-between items-center">
            <h2 className="w-min text-md font-bold text-zinc-800 md:w-auto md:text-xl">
              PRINCIPAIS CATEGORIAS
            </h2>

            <div>
              <Link
                href="/pesquisa"
                className="w-min underline underline-offset-4 flex justify-center items-center gap-2 text-sm text-zinc-800 cursor-pointer duration-300 hover:opacity-80 md:w-auto  md:text-xl">
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
