import type { TInformation } from "@/src/types/Information";
import { fetchHygraph } from "@/src/utils/fetchHygraph";
import { FaWhatsapp } from "react-icons/fa";

interface BuyProductProps {
  productName: string;
}

export const BuyProduct = async ({ productName }: BuyProductProps) => {
  const {
    informacao: { numeroDoWhatsapp },
  } = await fetchHygraph<TInformation>(`query MyQuery {
            informacao(where: {id: "clpkiwoog0nk30blwftd2eo8i"}) {
              mensagemRecomendadaWhatsapp
              numeroDoWhatsapp
            }
          }
          `);

  return (
    <footer className="fixed p-4 bottom-0 z-20 w-full bg-white bg-opacity-75 flex justify-center items-center gap-2">
      <span className="text-xs md:text-md font-bold">
        Tem interesse no produto?
      </span>

      <a
        className="bg-green-500 p-4 rounded-lg flex justify-center items-center gap-2 text-xs font-bold cursor-pointer transition-all duration-300 hover:opacity-80"
        href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
          numeroDoWhatsapp
        )}&text=${encodeURIComponent(
          `Olá! Vim pelo site e tenho interesse no produto: ${productName}`
        )}`}
        target="_blank">
        <span>
          <FaWhatsapp />
        </span>
        NOS ENVIE UMA MENSAGEM
      </a>
    </footer>
  );
};
