import Image from "next/image";
import Link from "next/link";

interface MainCategoryProps {
  imageUrl: string;
  categoryName: string;
  categoryAlt: string;
  categoryLink: string;
}

export const MainCategoryCard = async ({
  imageUrl = "/logo.svg",
  categoryName = "Falha ao carregar o nome da categoria :(",
  categoryAlt = "Falha ao carregar a legenda da categoria :(",
  categoryLink = "/",
}: MainCategoryProps) => {
  return (
    <Link
      href={categoryLink}
      className="w-full p-4 rounded-md flex justify-between items-center flex-col gap-4 bg-white cursor-pointer transition-all duration-300 hover:opacity-80 md:max-w-xs">
      <Image
        src={imageUrl}
        alt={categoryAlt}
        width={170}
        height={170}
      />

      <span
        title={categoryName}
        className="w-full text-lg text-center truncate">
        {categoryName}
      </span>
    </Link>
  );
};
