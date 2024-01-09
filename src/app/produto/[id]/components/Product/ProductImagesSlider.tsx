"use client";

import type { THygraphAsset } from "@/src/types/HygraphImage";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductImagesSliderProps {
  images: {
    id: string;
    tituloDaImagem: string;
    imagemDoProduto: THygraphAsset;
  }[];
}

export const ProductImagesSlider = ({ images }: ProductImagesSliderProps) => {
  return (
    <Swiper
      style={{ borderRadius: "8px" }}
      modules={[Navigation, Pagination]}
      pagination
      slidesPerView={1}
      navigation
      loop>
      {images.map((image) => (
        <SwiperSlide>
          <Image
            className="w-full max-h-[40rem]"
            src={image.imagemDoProduto.url}
            width={1280}
            height={420}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
