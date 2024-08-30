"use client";
import { useSongsStates } from "@/contexts/SongsContext";
import { cn } from "@/lib/utils";
import Image from "next/image";

// min-h-[8rem] max-h-[8rem] min-w-[8rem] max-w-[8rem] md:max-h-[16rem] md:max-w-[16rem] md:min-h-[16rem] md:min-w-[16rem]

// max-h-[6rem] max-w-[6rem] min-h-[6rem] min-w-[6rem] md:max-h-[12rem] md:max-w-[12rem] md:min-h-[12rem] md:min-w-[12rem]
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
        "text-white p-2 mx-2 my-2 bg-primary-accent2  hover:cursor-pointer hover:bg-primary-accent4 rounded-sm",
        currentTrack === audioSource && "bg-primary-accent4"
      )}
    >
      <div className="flex justify-center items-center w-full">
        <Image
          src={imageSource}
          alt={name}
          width={200}
          height={200}
          className=" rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center py-1 mx-3">
        <p className="w-full text-xs md:text-sm text-center truncate">{name}</p>
      </div>
    </div>
  );
}
