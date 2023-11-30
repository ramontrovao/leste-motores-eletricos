import { HiArrowRight } from "react-icons/hi2";

export const MainCategoriesSection = () => {
  return (
    <section className="p-4">
      <header className="flex justify-between items-center">
        <h2 className="text-xl text-zinc-800">PRINCIPAIS CATEGORIAS</h2>

        <div>
          <a className="flex justify-center items-center gap-2 text-xl text-zinc-800 cursor-pointer duration-300 hover:opacity-80">
            VER MAIS CATEGORIAS
            <HiArrowRight />
          </a>
        </div>
      </header>
    </section>
  );
};
