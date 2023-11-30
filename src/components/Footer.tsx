import Image from "next/image";
import { TInformation } from "../types/Information";
import { fetchHygraph } from "../utils/fetchHygraph";

export const Footer = async () => {
  const {
    informacao: {
      email,
      horarioDeFuncionamento,
      linkDoInstagram,
      linkDoMapsDaLojaFisica,
      mensagemRecomendadaWhatsapp,
      numeroDoWhatsapp,
      numeroFixo,
    },
  } = await fetchHygraph<TInformation>(`query MyQuery {
        informacao(where: {id: "clpkiwoog0nk30blwftd2eo8i"}) {
          email
          horarioDeFuncionamento
          linkDoInstagram
          linkDoMapsDaLojaFisica
          mensagemRecomendadaWhatsapp
          numeroDoWhatsapp
          numeroFixo
        }
      }
      `);

  return (
    <footer className="p-4 w-full min-h-[15rem]">
      <div className="m-auto max-w-7xl flex flex-wrap gap-16 items-start md:flex-nowrap">
        <Image
          src="/logo.svg"
          alt=""
          width={200}
          height={50}
        />

        <div className="flex flex-wrap gap-16 md:flex-nowrap">
          <div>
            <h3 className="text-xl font-bold">Instituição</h3>

            <nav className="mt-2">
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href="/sobre-nos">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href="/sobre-nos">
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href={linkDoMapsDaLojaFisica}>
                    Loja física
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold">Atendimento</h3>

            <nav className="mt-2">
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href="/sobre-nos">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href="/sobre-nos">
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href={linkDoMapsDaLojaFisica}>
                    Loja física
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
