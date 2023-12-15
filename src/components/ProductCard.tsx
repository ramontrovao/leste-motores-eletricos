import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  productAlt: string;
  productLink: string;
}

export const ProductCard = ({
  imageUrl = "/logo.svg",
  productName = "Falha ao carregar o nome do produto :(",
  productAlt = "Falha ao carregar a legenda do produto :(",
  productLink = "/",
}: ProductCardProps) => {
  return (
    <div className="w-full p-4 rounded-md flex justify-between items-center flex-col gap-4 bg-white md:max-w-xs">
      <Image
        src={imageUrl}
        alt={productAlt}
        width={170}
        height={170}
        className="h-full"
      />

      <span
        title={productName}
        className="w-full min-h-[2rem] leading-8 text-lg truncate">
        {productName}
      </span>

      <Link
        className="bg-blue text-center p-4 text-white rounded-md w-full duration-300 hover:opacity-80"
        href={productLink}>
        DETALHES DO PRODUTO
      </Link>
    </div>
  );
};
