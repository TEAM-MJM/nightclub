"use client";
import Image from "next/image";
import { Suspense, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const easeOut = [0.16, 1, 0.3, 1] as const;

const cornerVariants = {
  rest: { opacity: 0, y: -50, x: -50 },
  hover: { opacity: 1, y: 0, x: 0, transition: { duration: 1, ease: easeOut } },
};

const cornerVariants2 = {
  rest: { opacity: 0, y: 50, x: 50 },
  hover: { opacity: 1, y: 0, x: 0, transition: { duration: 1, ease: easeOut } },
};

const borderLineVariants = {
  rest: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, originX: 0, transition: { duration: 1, ease: easeOut } },
};

const borderLineVariants2 = {
  rest: { scaleX: 0, originX: 1 },
  hover: { scaleX: 1, originX: 1, transition: { duration: 1, ease: easeOut } },
};

const contentVariants = {
  rest: { y: 100 },
  hover: { y: 0, transition: { duration: 1, ease: easeOut } },
};

const contentVariants2 = {
  rest: { y: -100 },
  hover: { y: 0, transition: { duration: 1.5, ease: easeOut } },
};

const contentVariants3 = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 1.5, ease: easeOut } },
};

const parentVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { delayChildren: 0.05 } },
};

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

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventDay = new Date(event.date).getDate();
  const eventMonth = new Date(event.date).toLocaleString("default", { month: "short" });
  const eventDayMonth = `${eventDay} ${eventMonth}`;
  const eventTime = new Date(event.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardTap = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <Suspense
      fallback={
        <div className="mx-auto w-24 h-24 flex items-center justify-center my-24">
          <Image src="/assets/loader/madbars.gif" alt="Loading..." width={100} height={100} unoptimized />
        </div>
      }
    >
      <div>
        <div>
          <div className="grid grid-cols-1 grid-rows-1 w-full h-full relative overflow-hidden">
            <Image src={event.asset.url} alt={event.title || "Event"} width={708} height={497} loading="lazy" unoptimized className="col-start-1 col-end-1 row-start-1 row-end-1 object-cover object-center" />
            <motion.div initial="rest" animate={activeCard === event.id ? "hover" : "rest"} whileHover="hover" onTap={() => handleCardTap(event.id)} variants={parentVariants} className="flex flex-col justify-end col-start-1 col-end-1 row-start-1 row-end-1 w-full h-full relative bg-black/80">
              <motion.div variants={cornerVariants} className="absolute top-0 left-0 w-0 h-0 border-t-100 border-t-primary border-r-100 border-r-transparent" />
              <motion.div variants={borderLineVariants} className="absolute top-0 left-0 w-full border-t-2 border-primary origin-left" />
              <Link href="/book-table">
                <motion.button variants={contentVariants2} className="absolute sm:top-1/3 sm:right-1/2 top-5 right-5 bg-primary text-white text-sm w-fit px-6 py-4 transform sm:translate-x-1/2 rounded-sm cursor-pointer hover:scale-105 transition-[scale] duration-300 active:scale-95">
                  Book Now
                </motion.button>
              </Link>
              <motion.div variants={contentVariants} className="bg-black/60 p-4 pr-16">
                <motion.p variants={contentVariants3} className="text-white text-lg">
                  {event.title}
                </motion.p>
                <motion.p variants={contentVariants3} className="text-white text-sm line-clamp-3">
                  {event.description}
                </motion.p>
              </motion.div>
              <motion.div variants={cornerVariants2} className="absolute bottom-0 right-0 w-0 h-0 border-b-100 border-b-primary border-l-100 border-l-transparent" />
              <motion.div variants={borderLineVariants2} className="absolute bottom-0 right-0 w-full border-b-2 border-primary origin-right" />
            </motion.div>
          </div>

          <div className="flex gap-4 bg-primary text-white p-4">
            <p className="text-sm">{eventDayMonth}</p>
            <p className="text-sm">{eventTime}</p>
            <p className="text-sm">{event.location}</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
//
export default EventCard;
