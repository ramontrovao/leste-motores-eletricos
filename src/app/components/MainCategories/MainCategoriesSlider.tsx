"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { TMainCategory } from "@/src/types/MainCategory";
import { MainCategoryCard } from "@/src/components/MainCategoryCard";

interface HighlightedProductsSliderProps {
  mainCategories: TMainCategory[];
}

export const MainCategoriesSlider = ({
  mainCategories,
}: HighlightedProductsSliderProps) => {
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
      {mainCategories.map((category) => (
        <SwiperSlide key={category.id}>
          <MainCategoryCard
            categoryName={category.nome}
            categoryAlt={`Imagem da categoria ${category.nome}`}
            categoryLink={`/pesquisa?categoria=${category.nome}`}
            imageUrl={category.imagem.url ?? "/logo.svg"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
