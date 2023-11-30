import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

interface ReviewCardProps {
  customerName: string;
  rating: string;
  description: string;
  imageUrl: string;
}

export const ReviewCard = async ({
  imageUrl = "/logo.svg",
  customerName = "Falha ao carregar o nome do cliente :(",
  rating = "0",
  description = "Falha ao carregar a descrição da avaliação :(",
}: ReviewCardProps) => {
  return (
    <div className="w-full min-h-[15rem] h-full p-4 rounded-md max-w-none flex justify-between items-center flex-col gap-4 bg-white md:max-w-xs">
      <header className="w-full flex flex-col justify-center items-center">
        <Image
          src={imageUrl}
          alt={`Foto de ${customerName}`}
          width={170}
          height={170}
          className="max-w-[5rem] w-full rounded-full border-2 border-solid border-redShadow"
        />

        <div className="flex flex-col justify-center items-center">
          <span className="text-lg">{customerName}</span>

          <Rating
            style={{ maxWidth: 100 }}
            value={Number(rating)}
            readOnly
          />
        </div>
      </header>

      <main className="w-full bg-blue p-4 rounded-md text-white">
        <p
          title={description}
          className="truncate">
          {description}
        </p>
      </main>
    </div>
  );
};
