"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, SkipForward, SkipBack, Shuffle } from "lucide-react";
import AudioPlayerGallery from "./AudioPlayerGallery";

export default function AudioPlayer() {
  // track array
  const tracks = [
    {
      id: 1,
      title: "YOU BELONG WITH ME 2",
      audioSrc: "/assets/media/black-box-funky.mp3",
      trackImg: "/assets/content-img/track1.jpg",
    },
    {
      id: 2,
      title: "EUPHORIA",
      audioSrc: "/assets/media/euphoria.mp3",
      trackImg: "/assets/content-img/track2.jpg",
    },
    {
      id: 3,
      title: "MIDNIGHT DANCE",
      audioSrc: "/assets/media/fashion-red-tape.mp3",
      trackImg: "/assets/content-img/track4.jpg",
    },
    {
      id: 4,
      title: "TRACK 4",
      audioSrc: "/assets/media/euphoria.mp3",
      trackImg: "/assets/content-img/track5.jpg",
    },
    {
      id: 5,
      title: "TRACK 5",
      audioSrc: "/assets/media/fashion-red-tape.mp3",
      trackImg: "/assets/content-img/track2.jpg",
    },
  ];

  // tidsformattering
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // states
  const audioRef = useRef<HTMLAudioElement>(null);
  const loadedTrackSrc = useRef<string>("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = tracks[currentTrackIndex];

  // funktions håndtering
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.offsetWidth;
    const clickedTime = (clickX / width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = clickedTime;
      setCurrentTime(clickedTime);
    }
  };

  // Håndter responsive billede visning
  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth >= 1440);
    };

    // Sæt initial værdi
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    const setAudioDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  // Track skift og play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Kun load hvis track faktisk har skiftet
    if (loadedTrackSrc.current !== currentTrack.audioSrc) {
      audio.src = currentTrack.audioSrc;
      audio.load();
      setCurrentTime(0);
      setDuration(0);
      loadedTrackSrc.current = currentTrack.audioSrc;
    }

    // Håndter play/pause
    const handlePlayback = async () => {
      if (isPlaying) {
        if (audio.readyState >= 3) {
          await audio.play();
        } else {
          audio.addEventListener("canplay", () => audio.play(), { once: true });
        }
      } else {
        audio.pause();
      }
    };

    handlePlayback();
  }, [currentTrack, isPlaying]);

  return (
    <section className="bg-black">
      <audio ref={audioRef}></audio>

      {/* Dynamisk sektion titel */}
      <div className="relative h-[70px] mb-[61px]">
        <h2 className="font-ubuntu font-medium text-[clamp(1.5rem,4vw,3rem)] tracking-[2.85px] uppercase text-white text-center text-nowrap leading-normal">Night club track</h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Afspiller */}
      <div className="max-w-[1440px] w-full xl:p-0 sm:p-4 mx-auto my-12 sm:my-16 lg:my-24">
        <div className="flex flex-col items-center lg:flex-row lg:gap-8">
          {/* Track img */}
          {showImage && (
            <div className="w-[336px] h-[308px] bg-gray-800 shrink-0">
              <Image src={currentTrack.trackImg} alt={currentTrack.title} width={336} height={308} loading="lazy" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="w-full gap-2 sm:gap-4 lg:gap-6 flex flex-col justify-center">
            <div className="flex items-start">
              <h3 className="font-ubuntu font-medium text-[clamp(1.5rem,4vw,3rem)] tracking-[2.85px] uppercase text-white text-center text-nowrap leading-normal">{currentTrack.title}</h3>
            </div>
            {/* Track info */}
            <div className="flex flex-col justify-between">
              <div className="flex-1 flex flex-col justify-center"></div>
            </div>

            {/* Progress bar */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <div className="relative w-full h-1 bg-gray-200 cursor-pointer" onClick={handleProgressClick}>
                <div className="absolute h-full bg-primary" style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }} />

                {/* Cirkel til progress bar */}
                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full -top-2 sm:-top-2.5 transform -translate-x-1/2" style={{ left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }} />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-between gap-6 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
              {/* Timer */}
              <p className="text-white uppercase text-center lg:text-left text-sm sm:text-base mb-4 sm:mb-6 lg:mb-0">
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>

              <div className="flex items-center justify-center gap-6 sm:gap-8">
                {/* skipback */}
                <button onClick={handlePrev} className="text-white hover:text-primary transition-colors">
                  <SkipBack className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>

                {/* play/pause */}
                <button onClick={handlePlay} className="text-white border-4 border-white rounded-full p-2 hover:border-primary hover:text-primary transition-colors">
                  {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10" />}
                </button>

                {/* skipforward */}
                <button onClick={handleNext} className="text-white hover:text-primary transition-colors">
                  <SkipForward className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>

                {/* shuffle */}
                <button onClick={handleShuffle} className={`text-white hover:text-primary transition-colors ${isShuffle ? "text-primary" : ""}`}>
                  <Shuffle className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto justify-center max-w-xs lg:max-w-none">
                <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
                <div className="relative w-full lg:w-32 h-1 bg-gray-200 rounded-full">
                  <div className="absolute h-full bg-primary rounded-full" style={{ width: `${volume * 100}%` }} />
                  <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} className="absolute inset-0 w-full appearance-none cursor-pointer bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 sm:[&::-webkit-slider-thumb]:w-5 sm:[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 sm:[&::-moz-range-thumb]:w-5 sm:[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Track gallery */}
      <AudioPlayerGallery tracks={tracks} currentTrackIndex={currentTrackIndex} onSelectTrack={setCurrentTrackIndex} />
    </section>
  );
}
