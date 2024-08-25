import { SpotifyTrack } from "@/lib/types/types";
import { cn } from "@/lib/utils";
import SongCard from "./SongCard";
export default async function SongsList({
  className,
  tracks,
}: {
  className?: string;
  tracks: SpotifyTrack[];
}) {
  return (
    <section className={cn("flex flex-wrap justify-center", className)}>
      {tracks &&
        tracks.map((track: SpotifyTrack) => {
          return (
            <div key={`${track.id}/${track.uri}/${track.href}`}>
              {track.preview_url && (
                <SongCard
                  audioSource={track.preview_url}
                  name={track.name}
                  artistName={track.artists[0].name}
                  imageSource={track.album.images[0].url}
                />
              )}
            </div>
          );
        })}
    </section>
  );
}
