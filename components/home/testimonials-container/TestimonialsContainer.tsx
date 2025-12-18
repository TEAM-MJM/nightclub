"use client";

import Testimonials from "../testimonials/Testimonials";
import Image from "next/image";
import useSWR from "swr";
import { Testimonial } from "@/lib/types";

// SWR fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TestimonialsContainer = () => {
  const { data: testimonials, error } = useSWR<Testimonial[]>("/api/testimonials", fetcher, { suspense: true, fallbackData: [] });

  // Error
  if (error || !testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return (
      <section className="my-24 relative w-full bg-cover bg-center bg-no-repeat py-16 px-4">
        <div className="absolute inset-0 pointer-events-none -z-1">
          <Image src="/assets/bg/footerbg.jpg" alt="testimonials background" fill className="object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <p className="text-center my-10 text-white">Unable to load testimonials at this time. Please try again later.</p>
      </section>
    );
  }

  // Testimonials
  return (
    <section className="my-24 relative w-full bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="absolute inset-0 pointer-events-none -z-1">
        <Image src="/assets/bg/footerbg.jpg" alt="testimonials background" fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <Testimonials testimonials={testimonials} />
    </section>
  );
};

export default TestimonialsContainer;
