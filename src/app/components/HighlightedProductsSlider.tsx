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
      spaceBetween={50}
      slidesPerView={3}
      navigation
      loop>
      {products.map((product) => (
        <SwiperSlide>
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
