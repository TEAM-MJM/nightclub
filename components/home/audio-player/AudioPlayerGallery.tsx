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

export default function AudioPlayerGallery({ tracks, onSelectTrack, currentTrackIndex }: AudioPlayerGalleryProps) {}
