import { FaWhatsapp } from "react-icons/fa";

interface BuyProductProps {
  productName: string;
  whatsappNumber: string;
}

export const BuyProduct = ({
  productName,
  whatsappNumber,
}: BuyProductProps) => {
  return (
    <footer className="sticky p-4 bottom-0 z-20 w-full bg-white bg-opacity-75 flex justify-center items-center gap-2">
      <span className="text-xs md:text-md font-bold hidden md:block">
        Tem interesse no produto?
      </span>

      <a
        className="bg-green-500 p-4 rounded-lg flex justify-center items-center gap-2 text-xs font-bold cursor-pointer transition-all duration-300 hover:opacity-80"
        href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
          whatsappNumber
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
