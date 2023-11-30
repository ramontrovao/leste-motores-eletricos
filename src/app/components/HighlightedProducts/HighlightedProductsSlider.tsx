"use client";

import type { TProduct } from "@/src/types/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import { HighlightedProductCard } from "./HighlightedProductCard";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface HighlightedProductsSliderProps {
  products: TProduct[];
}

export const HighlightedProductsSlider = ({
  products,
}: HighlightedProductsSliderProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      centeredSlides
      centeredSlidesBounds
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
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation
      loop>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <HighlightedProductCard
            productName={product.nome}
            productAlt={`Imagem do product ${product.nome}`}
            productLink="/search"
            imageUrl={
              product.imagensDoProduto[0]?.imagemDoProduto.url ?? "/logo.svg"
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
