"use cache";
import Events from "../events-of-month/Events";
import Image from "next/image";

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
        <Image src="/assets/bg/slider_bg_overlay.png" alt="" fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Dynamisk sektion titel */}
      <div className="relative h-[70px] mb-[61px]">
        <h2 className="font-ubuntu font-medium text-[clamp(1.5rem,4vw,3rem)] tracking-[2.85px] uppercase text-white text-center text-nowrap leading-normal">Events of the Month</h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent" />
      </div>
      <Events events={events} />
    </section>
  );
};

export default EventsContainer;
