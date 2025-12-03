"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume, SkipForward, SkipBack, Shuffle } from "lucide-react";

export default function AudioPlayer() {
  // track array
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
      trackImg: "/assets/content-img/track4.jpg",
    },
    {
      id: 5,
      title: "TRACK 5",
      duration: 154,
      audioSrc: "/assets/media/fashion-red-tape.mp3",
      trackImg: "/assets/content-img/track5.jpg",
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
    const clickedTime = (clickX / width) * currentTrack.duration;
    if (audioRef.current) {
      audioRef.current.currentTime = clickedTime;
      setCurrentTime(clickedTime);
    }
  };

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
    <section className="bg-black py-20">
      <audio ref={audioRef}></audio>

      {/* Sektions titel */}
      <div className="mx-auto px-60">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium uppercase text-white mb-4">Night Club Track</h2>
        </div>
        <div className="h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
      </div>

      {/* Afspiller */}
      <div className="max-w-[1440px] mx-auto my-24">
        <div className="flex gap-60">
          {/* Track img */}
          <div className="w-[336px] h-[308px] bg-gray-800 shrink-0">
            <Image src={currentTrack.trackImg} alt={currentTrack.title} width={336} height={308} />
          </div>
        </div>

        {/* Track info */}
        <div className="flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-white uppercase">{currentTrack.title}</h3>
            <p className="text-white uppercase">
              {formatTime(currentTime)} / {formatTime(currentTrack.duration)}
            </p>
          </div>

          {/* Controls knapper */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* skipback */}
            <button onClick={handlePrev} className="text-white hover:text-primary transition-colors">
              <SkipBack size={32} />
            </button>

            {/* play/pause */}
            <button onClick={handlePlay} className="text-white hover:text-primary transition-colors">
              {isPlaying ? <Pause size={48} /> : <Play size={48} />}
            </button>

            {/* skipforward */}
            <button onClick={handleNext} className="text-white hover:text-primary transition-colors">
              <SkipForward size={32} />
            </button>

            {/* shuffle */}
            <button onClick={handleShuffle} className={`text-white hover:text-primary transition-colors ${isShuffle ? "text-primary" : ""}`}>
              <Shuffle size={32} />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-4 mb-8">
            <Volume size={24} className="text-white" />
            <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} className="w-32 h-1 bg-gray-700 appearance-none cursor-pointer" />
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="relative w-full h-1 bg-gray-700 cursor-pointer" onClick={handleProgressClick}>
              <div className="absolute h-full bg-primary" style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }} />

              {/* Cirkel til progress bar */}
              <div className="absolute w-6 h-6 bg-white rounded-full -top-2.5 transform -translate-x-1/2" style={{ left: `${(currentTime / currentTrack.duration) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
