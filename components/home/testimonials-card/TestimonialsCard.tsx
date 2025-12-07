"use client";
import Image from "next/image";
import { Suspense } from "react";
import SocialIcons from "@/components/shared/social-icons/SocialIcons";

interface Testimonials {
  id: number;
  name: string;
  content: string;
  asset: {
    url: string;
  };
}

interface TestimonialsCardProps {
  testimonial: Testimonials;
}

const TestimonialsCard = ({ testimonial }: TestimonialsCardProps) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-48 flex items-center justify-center">
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
      <div className="mx-auto text-center flex flex-col gap-6 items-center">
        <Image
          src={testimonial.asset.url}
          alt={testimonial.name || "Testimonial"}
          width={210}
          height={210}
          loading="lazy"
          unoptimized
          className="mx-auto"
        />
        <h2 className="text-lg uppercase">{testimonial.name}</h2>
        <p className="max-w-[1000px]">{testimonial.content}</p>
        <SocialIcons />
      </div>
    </Suspense>
  );
};

export default TestimonialsCard;
