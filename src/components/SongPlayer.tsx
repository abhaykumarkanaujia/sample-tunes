"use client";
import { SongsStates } from "@/contexts/SongsContext";
import AudioPlayer from "./AudioPlayer";

export default function SongPlayer() {
  const { currentTrack } = SongsStates;
  return <AudioPlayer audioSource={currentTrack} />;
}
