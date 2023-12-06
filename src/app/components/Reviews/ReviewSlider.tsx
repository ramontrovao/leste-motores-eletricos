"use client";

import type { TReview } from "@/src/types/Review";
import { ReviewCard } from "./ReviewCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ReviewSliderProps {
  reviews: TReview[];
}

export const ReviewSlider = ({ reviews }: ReviewSliderProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation
      loop>
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewCard
            customerName={review.nomeDoCliente}
            description={review.descricaoDaAvaliacao}
            imageUrl={review.fotoDoCliente.url}
            rating={review.numeroDeEstrelas}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
