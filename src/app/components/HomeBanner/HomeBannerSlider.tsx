"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { THygraphAsset } from "@/src/types/HygraphImage";

interface HomeBanneSliderProps {
  images: THygraphAsset[];
}

export const HomeBannerSlider = ({ images }: HomeBanneSliderProps) => {
  return (
    <Swiper
      style={{ borderRadius: "8px" }}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      pagination
      navigation
      loop>
      {images.map((image) => (
        <SwiperSlide key={image?.id}>
          <Image
            className="w-full h-[20vh] md:h-[50vh]"
            src={image.url}
            width={1280}
            height={420}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
