"use client";

import Events from "../events-of-month/Events";
import Image from "next/image";
import Title from "@/components/shared/Title/Title";
import useSWR from "swr";

// SWR fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  asset: {
    url: string;
  };
}

const EventsContainer = () => {
  const { data: events, error } = useSWR<Event[]>("/api/events", fetcher);

  // Error
  if (error || !events || !Array.isArray(events) || events.length === 0) {
    return (
      <section className="my-24 relative w-full bg-cover bg-center bg-no-repeat py-16 px-4">
        <div className="absolute inset-0 pointer-events-none -z-1">
          <Image
            src="/assets/bg/slider_bg_overlay.png"
            alt="events background"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Title title="Events of the Month" wrap={true} />
        <p className="text-center my-10 text-white">
          Unable to load events at this time. Please try again later.
        </p>
      </section>
    );
  }

  // Events
  return (
    <section className="my-24 relative w-full bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="absolute inset-0 pointer-events-none -z-1">
        <Image
          src="/assets/bg/slider_bg_overlay.png"
          alt="events background"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Title title="Events of the Month" wrap={true} />
      <Events events={events} />
    </section>
  );
};

export default EventsContainer;
