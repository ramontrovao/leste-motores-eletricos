import Image from "next/image";

interface HighlightedProductCardProps {
  imageUrl: string;
  productName: string;
  productAlt: string;
  productLink: string;
}

export const HighlightedProductCard = async ({
  imageUrl,
  productName,
  productAlt,
  productLink,
}: HighlightedProductCardProps) => {
  return (
    <div className="w-full p-4 rounded-md max-w-xs flex justify-center items-center flex-col gap-4 bg-white">
      <Image
        src={imageUrl}
        alt={productAlt}
        width={170}
        height={170}
        className="w-full"
      />

      <span className="text-lg">{productName}</span>

      <a
        className="bg-blue text-center p-4 text-white rounded-md w-full duration-300 hover:opacity-80"
        href={productLink}>
        DETALHES DO PRODUTO
      </a>
    </div>
  );
};
