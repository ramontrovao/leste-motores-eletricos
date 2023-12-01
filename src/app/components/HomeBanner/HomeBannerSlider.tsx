"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface HomeBanneSliderProps {
  images: string[];
}

export const HomeBannerSlider = ({ images }: HomeBanneSliderProps) => {
  return (
    <Swiper
      style={{ borderRadius: "8px" }}
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      loop>
      {images.map((image) => (
        <SwiperSlide>
          <Image
            className="w-full min-h-[20vh] md:min-h-[50vh]"
            src={image}
            width={1280}
            height={420}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
