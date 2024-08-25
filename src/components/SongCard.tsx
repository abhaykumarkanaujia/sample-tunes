"use client";
import { useSongsStates } from "@/contexts/SongsContext";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SongCard({
  audioSource,
  imageSource,
  name,
}: {
  audioSource: string;
  imageSource: string;
  name: string;
  artistName: string;
}) {
  const { currentTrack, setCurrentTrack } = useSongsStates();
  const handleClick = () => {
    setCurrentTrack(audioSource);
  };
  return (
    <div
      onClick={handleClick}
      className={cn(
        "text-white max-h-[16rem] max-w-[16rem] min-h-[16rem] min-w-[16rem] p-8 mx-2 my-2 bg-primary-accent2  hover:cursor-pointer hover:bg-primary-accent4",
        currentTrack === audioSource && "bg-primary-accent4"
      )}
    >
      <div className="flex justify-center items-center w-full">
        <Image
          src={imageSource}
          alt={name}
          width={200}
          height={200}
          className="max-h-[12rem] max-w-[12rem] min-h-[12rem] min-w-[12rem] rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center py-1 mx-3">
        <p className="max-w-[90%] w-full truncate text-sm text-center">
          {name}
        </p>
      </div>
    </div>
  );
}
