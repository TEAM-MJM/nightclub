"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Suspense, useState } from "react";
import EventCard from "../event-card/Event-card";
import { EventItem } from "@/lib/types";

const Events = ({ events }: { events: EventItem[] }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
      <section className="px-4 max-w-[708px] lg:max-w-[1440px] mx-auto">
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
          pagination={{ clickable: true, type: "bullets" }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {events?.map((event) => (
            <SwiperSlide key={event.id} className="pb-16">
              <EventCard event={event} activeCard={activeCard} setActiveCard={setActiveCard} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Suspense>
  );
};

export default Events;
