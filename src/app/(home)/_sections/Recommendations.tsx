import SongsList from "@/components/SongsList";
import { getRecommendations } from "@/lib/services/recommendations";

export default async function Recommendations({
  access_token,
  token_type,
}: {
  access_token: string;
  token_type: string;
}) {
  const recommendations = await getRecommendations(token_type, access_token);
  return (
    <>{recommendations && <SongsList tracks={recommendations.tracks} />}</>
  );
}
