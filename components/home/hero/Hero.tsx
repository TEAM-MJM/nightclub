"use client";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-dvh bg-black flex items-center justify-center">
          <Image
            src="/assets/loader/madbars.gif"
            alt="Loading..."
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      }
    >
      <section className="w-full h-dvh flex items-center justify-center -mb-[107px] lg:-mb-[124px] relative overflow-hidden snap-y">
        <Suspense>
          <HeroBackground />
        </Suspense>
        <div className="relative z-2 w-800 h-200 flex flex-col items-center justify-center gap-2">
          <motion.div
            initial={{ rotateX: 90, y: -40, opacity: 0 }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
            style={{ transformPerspective: 400 }}
          >
            <Image
              src="/assets/icon/Logo.svg"
              alt="Logo"
              width={950}
              height={200}
              className="object-contain px-0 mx-0"
              preload
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          >
            <p className="text-center lg:text-lg md:text-md text-[13px] text-shadow-md text-shadow-black md:tracking-[32px] tracking-[13px] mx-8">
              HAVE A GOOD TIM<span className="tracking-normal">E</span>
            </p>
            <Image
              src="/assets/bottom_line.png"
              alt="Bottom Line"
              width={800}
              height={20}
              className="object-contain"
              preload
            />
          </motion.div>
        </div>
      </section>
    </Suspense>
  );
};

export default Hero;

function HeroBackground() {
  const [bgImageIndex, setBgImageIndex] = useState(0);

  useEffect(() => {
    setBgImageIndex(Math.floor(Math.random() * 2));
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Image
        src={`/assets/bg/header_bg_${bgImageIndex + 1}.jpg`}
        alt="Hero Image"
        fill
        className="object-cover w-full h-full"
        preload
      />
    </motion.div>
  );
}
