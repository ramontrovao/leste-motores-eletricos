"use client";

import type { TProduct } from "@/src/types/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import { ProductCard } from "@/src/components/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface HighlightedProductsSliderProps {
  products: TProduct[];
}

export const HighlightedProductsSlider = ({
  products,
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
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            productName={product.nome}
            productAlt={`Imagem do produto ${product.nome}`}
            productLink={`/produto/${product.id}`}
            imageUrl={
              product.imagensDoProduto[0]?.imagemDoProduto.url ?? "/logo.svg"
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
