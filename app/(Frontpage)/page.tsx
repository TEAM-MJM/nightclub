import Gallery from "@/components/home/gallery/Gallery";
import AudioPlayer from "@/components/home/audio-player/AudioPlayer";
import Welcome from "@/components/home/welcome-section/Welcome";
import EventsContainer from "@/components/home/Events-container/EventsContainer";
import TestimonialsContainer from "@/components/home/testimonials-container/TestimonialsContainer";
import VideoPlayer from "@/components/home/video-player/VideoPlayer";
import RecentBlog from "@/components/home/recent-blog/RecentBlog";
import Newsletter from "@/components/home/newsletter/Newsletter";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full flex-col items-center justify-betweensm:items-start">
        <Welcome />

        <Suspense fallback={<LoadingSpinner text="Loading events..." />}>
          <EventsContainer />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading gallery..." />}>
          <Gallery />
        </Suspense>

        <AudioPlayer />
        <VideoPlayer />

        <Suspense fallback={<LoadingSpinner text="Loading testimonials..." />}>
          <TestimonialsContainer />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading blog posts..." />}>
          <RecentBlog />
        </Suspense>

        <Newsletter />
      </main>
    </div>
  );
}
