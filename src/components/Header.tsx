import Image from "next/image";
import Link from "next/link";
import { Searchbar } from "./Searchbar";

export const Header = () => {
  return (
    <header className="fixed z-20 p-4 w-full bg-blue">
      <div className="m-auto max-w-7xl flex flex-wrap gap-4 justify-center items-center md:flex-nowrap md:justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo da Leste Motores"
            width={200}
            height={50}
            className="max-w-[8rem]"
          />
        </Link>

        <Searchbar />
      </div>
    </header>
  );
};
