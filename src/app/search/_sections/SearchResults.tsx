import SongsList from "@/components/SongsList";
import { getTracksByName } from "@/lib/services/search";
import { SpotifyTrack } from "@/lib/types/types";

export default async function SearchResults({
  search_value,
  access_token,
  token_type,
}: {
  search_value: string;
  access_token: string;
  token_type: string;
}) {
  const searchResultRes = await getTracksByName(
    token_type,
    access_token,
    search_value
  );
  const tracks: SpotifyTrack[] = searchResultRes?.tracks.items;
  return <>{searchResultRes && <SongsList tracks={tracks} />}</>;
}
