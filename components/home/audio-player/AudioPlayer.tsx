"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume, SkipForward, SkipBack, Shuffle } from "lucide-react";

export default function AudioPlayer() {
  const tracks = [
    {
      id: 1,
      title: "YOU BELONG WITH ME 2",
      duration: 214,
      audioSrc: "/assets/media/black-box-funky.mp3",
      trackImg: "/assets/content-img/track1.jpg",
    },
    {
      id: 2,
      title: "EUPHORIA",
      duration: 136,
      audioSrc: "/assets/media/euphoria.mp3",
      trackImg: "/assets/content-img/track2.jpg",
    },
    {
      id: 3,
      title: "MIDNIGHT DANCE",
      duration: 154,
      audioSrc: "/assets/media/fashion-red-tape.mp3",
      trackImg: "/assets/content-img/track3.jpg",
    },
    {
      id: 4,
      title: "TRACK 4",
      duration: 136,
      audioSrc: "/assets/media/euphoria.mp3",
      trackImg: "/assets/content-img/track3.jpg",
    },
    {
      id: 5,
      title: "TRACK 5",
      duration: 136,
      audioSrc: "/assets/media/euphoria.mp3",
      trackImg: "/assets/content-img/track3.jpg",
    },
  ];

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.offsetWidth;
    const clickedTime = (clickX / width) * currentTrack.duration;
    if (audioRef.current.currentTime) {
      audioRef.current.currentTime = clickedTime;
      setCurrentTime(clickedTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.audioSrc;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack, isPlaying]);

  return (
    <section className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium uppercase text-white mb-4">Night Club Track</h2>
        </div>
        <div className="h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
      </div>

      {/* Track img */}
      <div className="bg-black border-2 border-white p-8">
        <audio ref={audioRef}></audio>
        <div className="flex gap-8 mb-8">
          <div className="w-[336px] h-[308px] bg-gray-800 shrink-0">
            <Image src={currentTrack.trackImg} alt={currentTrack.title} width={336} height={308} />
          </div>
        </div>

        {/* Track info */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-medium text-white uppercase">{currentTrack.title}</h3>
          <p className="text-white uppercase">
            {formatTime(currentTime)} / {formatTime(currentTrack.duration)}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="relative w-full h-1 bg-gray-700 cursor-pointer">
            <div className="absolute h-full bg-primary" style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }} />
          </div>

          {/* Cirkel til progress bar */}
          <div className="absolute w-6 h-6 bg-white rounded-full -top-2.5 transform -translate-x-1/2" style={{ left: `${(currentTime / currentTrack.duration) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
