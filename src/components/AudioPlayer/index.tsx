"use client";
import { PlaybackState } from "@/lib/types/enum";
import { useAudioPlayer } from "./audioPlayer";
import { useCallback, useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { secondsToHms } from "@/lib/helpers";
import { Button } from "../ui/button";
import Link from "next/link";
import { Icons } from "../Icons";

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
    <section className="bg-primary-accent1 pt-4 pb-2 fixed bottom-0 left-0 right-0 rounded-t-3xl sm:rounded-t-none flex flex-col items-center">
      <div className="flex justify-center items-center w-full gap-3">
        <Button
          className="rounded-full p-2 text-2xl flex items-center justify-center hover:text-gray-200 text-white transition-all hover:bg-transparent font-bold"
          variant={"ghost"}
          disabled={!audioSource}
          onClick={replay}
        >
          <Icons.reload />
        </Button>
        <Button
          className="rounded-full p-2 text-3xl flex items-center justify-center hover:text-gray-200 text-white disabled:text-gray-500 transition-all hover:bg-transparent"
          variant={"ghost"}
          disabled={true}
        >
          <Icons.playBack />
        </Button>
        <Button
          className="rounded-full p-2 text-5xl flex items-center justify-center hover:text-gray-200 text-white transition-all hover:bg-transparent"
          variant={"ghost"}
          onClick={togglePlay}
        >
          {playerState.playbackState === PlaybackState.PLAYING ? (
            <Icons.pause />
          ) : (
            <Icons.play />
          )}
        </Button>
        <Button
          className="rounded-full p-2 text-3xl flex items-center justify-center hover:text-gray-200 text-white disabled:text-gray-500 transition-all hover:bg-transparent"
          variant={"ghost"}
          disabled={true}
        >
          <Icons.playForward />
        </Button>
        <Link
          className="rounded-full p-2 text-2xl flex items-center justify-center hover:text-gray-200 text-white transition-all hover:bg-transparent font-bold"
          href={"/"}
        >
          <Icons.search />
        </Link>
      </div>
      <div className="flex gap-2 sm:gap-3 lg:gap-4 px-2 md:px-16 lg:px-32 my-2 lg:max-w-[80vw] xl:max-w-[70vw] w-full">
        <p className="text-xs text-gray-300">
          {secondsToHms(playerState.playbackPosition || 0)}
        </p>
        <Slider
          value={[playerState.playbackPosition || 0]}
          onValueChange={setTrack}
          max={playerState.trackDuration || 0}
          step={1}
          className="hover:cursor-pointer transition-all"
        />
        <p className="text-xs text-gray-300">
          {secondsToHms(playerState.trackDuration || 0)}
        </p>
      </div>
    </section>
  );
}
