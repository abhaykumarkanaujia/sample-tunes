"use client";
import { useSongsStates } from "@/contexts/SongsContext";
import AudioPlayer from "./AudioPlayer";
import { useCallback, useEffect, useState } from "react";

export default function SongPlayer() {
  const [track, setTrack] = useState("");
  const { currentTrack } = useSongsStates();
  const changeCurrentTrack = useCallback(() => {
    setTrack(currentTrack);
  }, [currentTrack]);

  useEffect(() => {
    changeCurrentTrack();
  }, [changeCurrentTrack]);
  return <AudioPlayer audioSource={track} />;
}
