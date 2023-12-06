"use client";

import type { TProduct } from "@/src/types/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductCard } from "@/src/components/ProductCard";

interface HighlightedProductsSliderProps {
  products: TProduct[];
}

export const RecommendedProductsSlider = ({
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
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation
      loop>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
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
