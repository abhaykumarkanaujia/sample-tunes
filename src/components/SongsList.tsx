import { SpotifyTrack } from "@/lib/types/types";
import { cn } from "@/lib/utils";
import SongCard from "./SongCard";
export default function SongsList({
  className,
  tracks,
}: {
  className?: string;
  tracks: SpotifyTrack[];
}) {
  return (
    <section
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10",
        className
      )}
    >
      {tracks &&
        tracks?.map((track: SpotifyTrack, index: number) => {
          if (track.preview_url) {
            return (
              <div key={`${track.id}/${track.uri}/${track.href}/${index}`}>
                {track && (
                  <SongCard
                    audioSource={track.preview_url || ""}
                    name={track.name}
                    artistName={track.artists[0].name}
                    imageSource={track.album.images[0].url}
                  />
                )}
              </div>
            );
          }
        })}
    </section>
  );
}
