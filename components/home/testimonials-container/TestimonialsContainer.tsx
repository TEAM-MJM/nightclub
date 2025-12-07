"use cache";
import Testimonials from "../testimonials/Testimonials";
import Image from "next/image";

const FetchTestimonials = async () => {
  const url = "http://localhost:4000/Testimonials";
  const data = await fetch(url);
  const events = await data.json();
  return events;
};

const TestimonialsContainer = async () => {
  const testimonials = await FetchTestimonials();
  return (
    <section className="my-24 relative w-full bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/assets/bg/footerbg.jpg" alt="" fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <Testimonials testimonials={testimonials} />
    </section>
  );
};

export default TestimonialsContainer;
