"use client";
import { Suspense, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { HandPlatter } from "lucide-react";
import { Martini } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const cornerVariants = {
  rest: { opacity: 0, y: -20, x: -20 },
  hover: { opacity: 1, y: 0, x: 0, transition: { duration: 1, ease: easeOut } },
};

const cornerVariants2 = {
  rest: { opacity: 0, y: 20, x: 20 },
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
  rest: { opacity: 0, scale: 0.8 },
  hover: { opacity: 1, scale: 1, transition: { duration: 1, ease: easeOut } },
};

const contentVariants2 = {
  rest: { opacity: 0, x: 50 },
  hover: { opacity: 1, x: 0, transition: { duration: 1.5, ease: easeOut } },
};

const parentVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { delayChildren: 0.05 } },
};

const CARDS = [
  {
    id: 0,
    image: "/assets/content-img/thumb1.jpg",
    icon: { type: "image" as const, src: "/assets/icon/Favicon.svg" },
    title: "NIGHT CLUB",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 1,
    image: "/assets/content-img/reastaurant_1.jpg",
    icon: { type: "icon" as const, name: "HandPlatter" },
    title: "RESTAURANT",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
  },
  {
    id: 2,
    image: "/assets/content-img/thumb2.jpg",
    icon: { type: "icon" as const, name: "Martini" },
    title: "BAR",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
  },
];

const Welcome = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardTap = (cardIndex: number) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  return (
    <section className="mt-32 mx-auto px-4">
      <div className="mx-auto px-60">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium uppercase text-white mb-4">Welcome in nightclub</h2>
        </div>
        <div className="h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
      </div>
      <Suspense
        fallback={
          <div className="mx-auto w-24 h-24 flex items-center justify-center my-24">
            <Image src="/assets/loader/madbars.gif" alt="Loading..." width={100} height={100} />
          </div>
        }
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-full max-w-[459px] my-24 gap-8 mx-auto">
          {CARDS.map((card, index) => (
            <div key={card.id} className="grid grid-cols-1 grid-rows-1 w-full h-full relative">
              <Image
                src={card.image}
                alt="Welcome Image"
                width={459}
                height={573}
                loading="lazy"
                className="col-start-1 col-end-1 row-start-1 row-end-1 object-cover object-center"
              />
              <motion.div
                initial="rest"
                animate={activeCard === index ? "hover" : "rest"}
                whileHover="hover"
                onTap={() => handleCardTap(index)}
                variants={parentVariants}
                className="text-center items-center justify-center flex flex-col gap-4 col-start-1 col-end-1 row-start-1 row-end-1 p-6 w-full h-full relative bg-black"
              >
                <motion.div
                  variants={cornerVariants}
                  className="absolute top-0 left-0 w-0 h-0 border-t-100 border-t-primary border-r-100 border-r-transparent"
                />
                <motion.div
                  variants={borderLineVariants}
                  className="absolute top-0 left-0 w-full border-t-2 border-primary origin-left"
                />
                <motion.div variants={contentVariants} className="flex justify-center">
                  {card.icon.type === "image" ? (
                    <Image
                      src={card.icon.src}
                      alt="Icon"
                      width={100}
                      height={100}
                      className="border-primary border-3 p-6 rounded-md"
                    />
                  ) : card.icon.name === "HandPlatter" ? (
                    <HandPlatter
                      size={100}
                      color="var(--primary)"
                      className="border-primary border-3 p-6 rounded-md"
                    />
                  ) : (
                    <Martini
                      size={100}
                      color="var(--primary)"
                      className="border-primary border-3 p-6 rounded-md"
                    />
                  )}
                </motion.div>
                <motion.h2
                  variants={contentVariants}
                  className="text-lg font-medium uppercase text-white"
                >
                  {card.title}
                </motion.h2>
                <motion.p variants={contentVariants2}>{card.description}</motion.p>
                <motion.div
                  variants={cornerVariants2}
                  className="absolute bottom-0 right-0 w-0 h-0 border-b-100 border-b-primary border-l-100 border-l-transparent"
                />
                <motion.div
                  variants={borderLineVariants2}
                  className="absolute bottom-0 right-0 w-full border-b-2 border-primary origin-right"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Welcome;
