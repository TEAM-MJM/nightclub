import Image from "next/image";
import AudioPlayer from "@/components/home/audio-player/AudioPlayer";
import Welcome from "@/components/home/welcome-section/Welcome";
import EventsContainer from "@/components/home/Events-container/EventsContainer";
import TestimonialsContainer from "@/components/home/testimonials-container/TestimonialsContainer";
import VideoPlayer from "@/components/home/video-player/VideoPlayer";
import Newsletter from "@/components/home/newsletter/Newsletter";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-[1440px] flex-col items-center justify-betweensm:items-start">
        <Welcome />
        <EventsContainer />
        <AudioPlayer />
        <VideoPlayer />
        <TestimonialsContainer />
        <Newsletter />
      </main>
    </div>
  );
}
