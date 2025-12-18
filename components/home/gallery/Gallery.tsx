"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "@/components/shared/Title/Title";
import Button from "@/components/shared/button/Button";
import useSWR from "swr";

// SWR Fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface GalleryImage {
  id: number;
  image: string;
  alt: string;
  description: string;
}

export default function Gallery() {
  const { data: images, error } = useSWR<GalleryImage[]>("/api/gallery", fetcher, { suspense: true, fallbackData: [] });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  if (error) return <div className="text-center text-white py-16">Failed to load gallery</div>;
  if (!images || !Array.isArray(images) || images.length === 0) return null;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));

  return (
    // Fragment for at returnere flere elementer, i dette tilfælde galleriet og "lightbox"
    <>
      <section className="w-full py-16">
        <Title title="Night club Gallery" />
        <div>
          <div className="flex flex-col md:flex-row w-full mt-8 gap-0 md:gap-0">
            {images.slice(0, 4).map((img, i) => (
              <motion.div key={img.id} className="h-82 md:h-82 md:flex-1 cursor-pointer relative overflow-hidden" initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15, ease: "easeInOut" }} onClick={() => openLightbox(i)}>
                <Image src={img.image} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" unoptimized />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row w-full gap-0 md:gap-0">
            {images.slice(4, 7).map((img, i) => (
              <motion.div key={img.id} className="h-82 md:h-82 md:flex-1 cursor-pointer relative overflow-hidden" initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15, ease: "easeInOut" }} onClick={() => openLightbox(i + 4)}>
                <Image src={img.image} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" unoptimized />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 cursor-pointer text-white text-4xl hover:text-gray-300 z-10">
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 cursor-pointer text-white text-6xl hover:text-gray-300 z-10"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 cursor-pointer text-white text-6xl hover:text-gray-300 z-10"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-6xl w-full bg-black" onClick={(e) => e.stopPropagation()}>
              <motion.div key={selectedIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                <div className="relative w-full h-[70vh]">
                  <Image src={images[selectedIndex].image} alt={images[selectedIndex].alt} fill className="object-contain" unoptimized />
                </div>

                {images[selectedIndex].description && (
                  <div className="mt-2 text-white p-4">
                    <h3 className="text-2xl font-bold mb-4">NIGHT CLUB PARTY</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{images[selectedIndex].description}</p>
                    <div className="flex justify-end">
                      <Button isLink={true} route="/blog" text="READ MORE" />
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
