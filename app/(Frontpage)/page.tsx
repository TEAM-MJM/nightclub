import Gallery from "@/components/home/gallery/Gallery";
import AudioPlayer from "@/components/home/audio-player/AudioPlayer";
import Welcome from "@/components/home/welcome-section/Welcome";
import EventsContainer from "@/components/home/Events-container/EventsContainer";
import TestimonialsContainer from "@/components/home/testimonials-container/TestimonialsContainer";
import VideoPlayer from "@/components/home/video-player/VideoPlayer";
import Newsletter from "@/components/home/newsletter/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full flex-col items-center justify-betweensm:items-start">
        <Welcome />
        <EventsContainer />
        <Gallery />
        <AudioPlayer />
        <VideoPlayer />
        <TestimonialsContainer />
        <Newsletter />
      </main>
    </div>
  );
}
