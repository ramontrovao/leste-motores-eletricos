import type { TInformation } from "../types/Information";
import Image from "next/image";
import { fetchHygraph } from "../utils/fetchHygraph";
import { FaEnvelope, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { transformPhoneNumber } from "../utils/transformPhoneNumber";

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
      termosEmPdf
    },
  } = await fetchHygraph<{ informacao: TInformation }>(`query FooterQuery {
    informacao(where: {id: "clpkiwoog0nk30blwftd2eo8i"}) {
      email
      horarioDeFuncionamento
      linkDoInstagram
      linkDoMapsDaLojaFisica
      mensagemRecomendadaWhatsapp
      numeroDoWhatsapp
      numeroFixo
      termosEmPdf {
        url
      }
    }
  }`);

  return (
    <footer className="p-4 w-full bg-white">
      <div className="m-auto max-w-7xl flex flex-wrap justify-between gap-4 items-start md:flex-nowrap">
        <Image
          src="/logo.svg"
          alt=""
          width={200}
          height={50}
        />

        <div className="flex flex-wrap gap-16 md:flex-nowrap">
          <div>
            <h3 className="text-md font-bold md:text-xl">Instituição</h3>

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
                    href={termosEmPdf.url}>
                    Nossos termos
                  </a>
                </li>
                <li>
                  <a
                    className="text-md cursor-pointer duration-300 hover:opacity-80"
                    href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                      numeroDoWhatsapp
                    )}&text=Olá! Vim pelo site e tenho uma dúvida.`}>
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

                <li>
                  <ul className="flex gap-2">
                    <li>
                      <a
                        className="text-2xl text-blue cursor-pointer duration-300 hover:opacity-80"
                        href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                          numeroDoWhatsapp
                        )}&text=${encodeURIComponent(
                          mensagemRecomendadaWhatsapp
                        )}`}
                        target="_blank">
                        <FaWhatsapp />
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-2xl text-blue cursor-pointer duration-300 hover:opacity-80"
                        href={linkDoInstagram}
                        target="_blank">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-md font-bold md:text-xl">Atendimento</h3>

            <nav className="mt-2">
              <ul className="flex justify-start items-start flex-col gap-1">
                <li>
                  <span className="flex text-center justify-center items-center gap-2 text-md duration-300 hover:opacity-80">
                    <span className="text-2xl text-blue">
                      <FaWhatsapp />
                    </span>

                    {transformPhoneNumber(numeroDoWhatsapp)}
                  </span>
                </li>

                <li>
                  <span className="flex text-center justify-center items-center gap-2 text-md duration-300 hover:opacity-80">
                    <span className="text-blue">
                      <FaPhone />
                    </span>

                    {`${transformPhoneNumber(numeroFixo)} (fixo)`}
                  </span>
                </li>

                <li>
                  <span className="flex text-center justify-center items-center gap-2 text-md duration-300 hover:opacity-80">
                    <span className="text-blue">
                      <FaEnvelope />
                    </span>
                    {email}
                  </span>
                </li>

                <li>
                  <span className="flex break-words text-start gap-2 text-md duration-300 hover:opacity-80">
                    Horários de atendimento: <br /> {horarioDeFuncionamento}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
