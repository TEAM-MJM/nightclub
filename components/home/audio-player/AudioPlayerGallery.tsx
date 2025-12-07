"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

//Interface Track
// definer struktur for track objekt med TypeScript
// Sender props til at håndtere track selection og current track index
// giver fejl hvis ikke defineret

interface Track {
  id: number;
  title: string;
  audioSrc: string;
  trackImg: string;
}

//Interface AudioPlayerGalleryProps
// definer hvilke props komponentet skal modtage
// track[] = et array af Track objekter
// onSelectTrack = callback funktion til at håndtere track selection. Lader child komponent kommunikere op til parent. (Function Type Notation)
// currentTrackIndex = index af det nuværende track

interface AudioPlayerGalleryProps {
  tracks: Track[];
  onSelectTrack: (index: number) => void;
  currentTrackIndex: number;
}

export default function AudioPlayerGallery({ tracks, onSelectTrack, currentTrackIndex }: AudioPlayerGalleryProps) {
  //states
  const [startIndex, setStartIndex] = useState(0);
  const tracksToShow = 5;

  // Nav handlers
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(tracks.length - tracksToShow, prevIndex + 1));
  };

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < tracks.length - tracksToShow;

  const visibleTracks = tracks.slice(startIndex, startIndex + tracksToShow);

  return (
    <div className="max-w-[1440px] mx-auto my-16">
      <div className="relative flex items-center justify-center gap-4">
        {/* Venstre navigation */}
        <button onClick={handlePrev} disabled={!canGoPrev} className={`w-12 h-12 flex items-center justify-center border-2 border-white transition-colors ${canGoPrev ? "hover:border-primary hover:text-primary text-white" : "opacity-30 cursor-not-allowed text-white"}`} aria-label="Previous tracks">
          <ChevronLeft size={32} />
        </button>

        {/* Track gallery */}
        <div className="flex gap-0">
          {visibleTracks.map((track, index) => {
            const actualIndex = startIndex + index;
            const isActive = actualIndex === currentTrackIndex;

            return (
              <div key={track.id} className="relative w-[288px] h-[264px] group cursor-pointer overflow-hidden" onClick={() => onSelectTrack(actualIndex)}>
                {/* Track billede */}
                <Image src={track.trackImg} alt={track.title} width={288} height={264} className="w-full h-full object-cover" />

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {/* Play knap */}
                  <div className="w-[52px] h-[52px] rounded-full bg-primary flex items-center justify-center">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>

                  {/* Track navn */}
                  <p className="text-white text-lg uppercase tracking-wider px-4 text-center font-medium">{track.title.length > 15 ? `${track.title.substring(0, 15)}...` : track.title}</p>
                </div>

                {/* Aktiv indikator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/90 flex items-center justify-center">
                    <p className="text-white text-sm uppercase tracking-wider truncate px-2 font-medium">{track.title.length > 15 ? `${track.title.substring(0, 15)}...` : track.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Højre navigation */}
        <button onClick={handleNext} disabled={!canGoNext} className={`w-12 h-12 flex items-center justify-center border-2 border-white transition-colors ${canGoNext ? "hover:border-primary hover:text-primary text-white" : "opacity-30 cursor-not-allowed text-white"}`} aria-label="Next tracks">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
