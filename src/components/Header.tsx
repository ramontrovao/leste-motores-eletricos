import Image from "next/image";
import Link from "next/link";
import { Searchbar } from "./Searchbar";

export const Header = () => {
  return (
    <header className="sticky z-30 p-4 w-full bg-blue">
      <div className="px-4 m-auto w-full max-w-7xl flex flex-wrap gap-4 justify-center items-center md:gap-0 md:flex-nowrap md:justify-between">
        <Link className="flex justify-center flex-wrap items-center gap-4 md:flex-nowrap" href="/">
          <Image
            src="/logo.svg"
            alt="Logo da Leste Motores"
            width={200}
            height={50}
            className="max-w-[12.5rem]"
          />

          <span className="text-white text-xs max-w-[12.5rem] md:text-sm">
            Motores Elétricos, Manutenção, Vendas e Locação
          </span>
        </Link>

        <Searchbar />
      </div>
    </header>
  );
};
