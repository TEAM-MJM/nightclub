"use client";
import TestimonialsCard from "../testimonials-card/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Suspense } from "react";
import Image from "next/image";

interface Testimonials {
  id: number;
  name: string;
  content: string;
  asset: {
    url: string;
  };
}

interface TestimonialsProps {
  testimonials: Testimonials[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-24 h-24 flex items-center justify-center my-24">
          <Image
            src="/assets/loader/madbars.gif"
            alt="Loading..."
            width={100}
            height={100}
            unoptimized
          />
        </div>
      }
    >
      <section className="px-4 max-w-[708px] lg:max-w-full mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true, type: "bullets" }}
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pb-16">
              <TestimonialsCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Suspense>
  );
};

export default Testimonials;
