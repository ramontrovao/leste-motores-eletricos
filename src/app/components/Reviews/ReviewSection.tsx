import type { TReview } from "@/src/types/Review";
import { ReviewSlider } from "./ReviewSlider";

interface ReviewSectionProps {
  reviews: TReview[];
}

export const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  return (
    <>
      {reviews && (
        <section className="p-4">
          <header className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-zinc-800 md:text-xl">
              AVALIAÇÕES GERAIS
            </h2>
          </header>

          <main className="mt-5">
            <ReviewSlider reviews={reviews} />
          </main>
        </section>
      )}
    </>
  );
};
