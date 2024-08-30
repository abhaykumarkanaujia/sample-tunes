import { getRecommendations } from "@/lib/services/recommendations";
import { SpotifyTrack } from "@/lib/types/types";
import OnScroll from "./OnScroll";

export default async function Recommendations({
  access_token,
  token_type,
}: {
  access_token: string;
  token_type: string;
}) {
  const recommendations = await getRecommendations(token_type, access_token);
  const tracks: SpotifyTrack[] = recommendations?.tracks;
  return (
    <>
      {recommendations && (
        <OnScroll
          initialTracks={tracks}
          token_type={token_type}
          access_token={access_token}
        />
      )}
    </>
  );
}
