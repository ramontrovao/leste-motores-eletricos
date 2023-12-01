"use client";

import type { THygraphImage } from "@/src/types/HygraphImage";
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
    imagemDoProduto: THygraphImage;
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
        <>
          <SwiperSlide>
            <Image
              className="w-full"
              src={image.imagemDoProduto.url}
              width={1280}
              height={420}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full"
              src={image.imagemDoProduto.url}
              width={1280}
              height={420}
              alt=""
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};
