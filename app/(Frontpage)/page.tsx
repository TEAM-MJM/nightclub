import Image from "next/image";
import AudioPlayer from "@/components/home/audio-player/AudioPlayer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-[1440px] flex-col items-center justify-betweensm:items-start">
        <AudioPlayer />
      </main>
    </div>
  );
}
