"use client";

import { useState, useEffect } from "react";
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
  const [tracksToShow, setTracksToShow] = useState(5);

  const getTracksToShow = () => {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1200) return 2;
    if (width < 1440) return 3;
    return 5;
  };

  useEffect(() => {
    setTracksToShow(getTracksToShow());

    const handleResize = () => {
      setTracksToShow(getTracksToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxStartIndex = Math.max(0, tracks.length - tracksToShow);
    if (startIndex > maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  }, [tracksToShow, tracks.length, startIndex]);

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return tracks.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex >= tracks.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const visibleTracks = tracks.slice(startIndex, startIndex + tracksToShow);

  return (
    <div className="w-full my-8 p-1 md:my-16">
      <div className="flex items-center justify-center gap-1 sm:gap-4">
        {/* Venstre navigation */}
        <button onClick={handlePrev} className="w-10 h-10 mx-2 flex items-center justify-center border-2 border-white transition-colors hover:border-primary hover:text-primary text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Track gallery container*/}
        <div className="max-w-[1440px] w-full overflow-hidden">
          <div className="flex gap-0 overflow-hidden flex-1 sm:flex-initial justify-center">
            {visibleTracks.map((track, index) => {
              const actualIndex = startIndex + index;
              const isActive = actualIndex === currentTrackIndex;

              return (
                <div key={track.id} className="relative w-full max-w-[288px] sm:w-[288px] aspect-square group cursor-pointer overflow-hidden mx-auto" onClick={() => onSelectTrack(actualIndex)}>
                  <Image src={track.trackImg} alt={track.title} width={288} height={264} className="w-full h-full object-cover" />

                  {/* Hover overlay med play knap */}
                  <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    <div className="w-[52px] h-[52px] rounded-full bg-primary flex items-center justify-center">
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Track titel kun synlig når aktiv */}
                  {isActive && (
                    <div className="absolute w-full bottom-0 left-0 h-12 bg-black/90 flex items-center justify-center">
                      <p className="text-white text-sm uppercase tracking-wider truncate px-2 font-medium">{track.title.length > 15 ? `${track.title.substring(0, 15)}...` : track.title}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Højre navigation */}
        <button onClick={handleNext} className="w-10 h-10 mx-2 flex items-center justify-center border-2 border-white transition-colors hover:border-primary hover:text-primary text-white">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
