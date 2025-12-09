"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoPlayer() {
  const videos = [
    {
      id: 1,
      title: "Crowd Video",
      videoSrc: "/assets/media/video-crowd.mp4",
    },
    {
      id: 2,
      title: "DJ Crowd Video",
      videoSrc: "/assets/media/video-dj-crowd1.mp4",
    },
    {
      id: 3,
      title: "DJ Crowd Video 2",
      videoSrc: "/assets/media/video-dj-crowd-2.mp4",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Næste og forrige video handlers
  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Handle når video er færdig - autoplay næste
  const handleVideoEnd = () => {
    handleNext();
  };

  // Opdater video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  // Check om vi kan gå frem eller tilbage
  const canGoPrev = currentVideoIndex > 0;
  const canGoNext = currentVideoIndex < videos.length - 1;

  return (
    <section className="max-w-[1440px] mx-auto px-[60px] py-16">
      {/* Dynamisk sektion titel */}
      <div className="relative h-[70px] mb-[61px]">
        <h2 className="font-ubuntu font-medium text-[clamp(1.5rem,4vw,3rem)] tracking-[2.85px] uppercase text-white text-center text-nowrap leading-normal">Latest video</h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Video container */}
      <div className="relative w-full lg:h-[608px]  mb-14">
        <div className="absolute -top-0.5 -left-0.5 w-0 h-0 border-t-104 border-t-primary border-r-104 border-r-transparent" />
        <div className="absolute -bottom-0.5 -right-0.5 w-0 h-0 border-b-104 border-b-primary border-l-104 border-l-transparent" />
        <video ref={videoRef} className="w-full h-full object-cover" onEnded={handleVideoEnd} autoPlay muted playsInline>
          <source src={videos[currentVideoIndex].videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation knapper */}
      <div className="flex items-center justify-center gap-3">
        <button onClick={handlePrev} disabled={!canGoPrev} className={`w-12 h-12 flex items-center justify-center border-2 border-white transition-colors ${canGoPrev ? "hover:border-primary hover:text-primary text-white" : "opacity-30 cursor-not-allowed text-white"}`}>
          <ChevronLeft size={32} />
        </button>

        <button onClick={handleNext} disabled={!canGoNext} className={`w-12 h-12 flex items-center justify-center border-2 border-white transition-colors ${canGoNext ? "hover:border-primary hover:text-primary text-white" : "opacity-30 cursor-not-allowed text-white"}`}>
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
