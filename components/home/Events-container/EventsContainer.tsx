"use cache";
import Events from "../events-of-month/Events";
import Image from "next/image";
import Title from "@/components/shared/Title/Title";

const FetchEvents = async () => {
  const url = "http://localhost:4000/events";
  const data = await fetch(url);
  const events = await data.json();
  return events;
};

const EventsContainer = async () => {
  const events = await FetchEvents();
  return (
    <section className="my-24 relative w-full bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/bg/slider_bg_overlay.png"
          alt=""
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
