"use client";
import { PlaybackState } from "@/lib/types/enum";
import { useAudioPlayer } from "./audioPlayer";
import { useCallback, useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { secondsToHms } from "@/lib/helpers";
import { Button } from "../ui/button";
import {
  IoPlayCircle,
  IoPauseCircle,
  IoPlayBack,
  IoPlayForward,
  IoReload,
  IoSearch,
} from "react-icons/io5";
import Link from "next/link";

export default function AudioPlayer({
  audioSource,
}: {
  audioSource?: string | null;
}) {
  const [audioTrack, setAudioTrack] = useState<string>("");

  const { playerState, togglePlay, setTrackPosition, replay } =
    useAudioPlayer(audioTrack);

  const loadTrack = useCallback(() => {
    setAudioTrack(audioSource || "");
  }, [audioSource]);

  const setTrack = (value: number[]) => {
    setTrackPosition(value[0] || 0);
  };

  useEffect(() => {
    loadTrack();
  }, [loadTrack]);

  return (
    <div className="bg-transparent py-3 fixed bottom-0 left-0 right-0 rounded-t-3xl flex flex-col">
      <div className="flex flex-col gap-1 px-6">
        <Slider
          value={[playerState.playbackPosition || 0]}
          onValueChange={setTrack}
          max={playerState.trackDuration || 0}
          step={1}
          className="hover:cursor-pointer transition-all"
        />
        <div className="flex justify-between">
          <p className="text-sm">
            {secondsToHms(playerState.playbackPosition || 0)}
          </p>
          <p className="text-sm">
            {secondsToHms(playerState.trackDuration || 0)}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-3">
        <Button
          className="rounded-full p-2 text-2xl flex items-center justify-center hover:text-gray-700 disabled:text-gray-500 transition-all hover:bg-transparent font-bold"
          variant={"ghost"}
          disabled={!audioSource}
          onClick={replay}
        >
          <IoReload />
        </Button>
        <Button
          className="rounded-full p-2 text-3xl flex items-center justify-center hover:text-gray-700 disabled:text-gray-500 transition-all hover:bg-transparent"
          variant={"ghost"}
          disabled={true}
        >
          <IoPlayBack />
        </Button>
        <Button
          className="rounded-full p-2 text-5xl flex items-center justify-center hover:text-gray-700 transition-all hover:bg-transparent"
          variant={"ghost"}
          onClick={togglePlay}
        >
          {playerState.playbackState === PlaybackState.PLAYING ? (
            <IoPauseCircle />
          ) : (
            <IoPlayCircle />
          )}
        </Button>
        <Button
          className="rounded-full p-2 text-3xl flex items-center justify-center hover:text-gray-700 disabled:text-gray-500 transition-all hover:bg-transparent"
          variant={"ghost"}
          disabled={true}
        >
          <IoPlayForward />
        </Button>
        <Link
          className="rounded-full p-2 text-2xl flex items-center justify-center hover:text-gray-700 transition-all hover:bg-transparent font-bold"
          href={"/"}
        >
          <IoSearch />
        </Link>
      </div>
    </div>
  );
}
