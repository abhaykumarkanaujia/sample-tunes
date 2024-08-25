"use client";
import { useSongsStates } from "@/contexts/SongsContext";
import AudioPlayer from "./AudioPlayer";

export default function SongPlayer() {
  const { currentTrack } = useSongsStates();
  return <AudioPlayer audioSource={currentTrack} />;
}
