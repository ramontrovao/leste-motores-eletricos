import Image from "next/image";

interface HighlightedProductCardProps {
  imageUrl: string;
  productName: string;
  productAlt: string;
  productLink: string;
}

export const HighlightedProductCard = ({
  imageUrl,
  productName,
  productAlt,
  productLink,
}: HighlightedProductCardProps) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={productAlt}
        width={170}
        height={170}
      />

      <span className="text-lg">{productName}</span>

      <a href={productLink}>DETALHES DO PRODUTO</a>
    </div>
  );
};
