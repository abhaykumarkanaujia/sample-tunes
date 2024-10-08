import { GET_RECOMMENDATIONS } from "../config/endpoints/endpoints";
import { ARTISTS, GENRES, TRACKS } from "../config/songs";
import { logger } from "../logger";
import { refreshAuthToken } from "./auth-token";

const getRecommendations = async (
  token_type: string,
  access_token: string,
  genres?: string[]
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `${token_type} ${access_token}`);

  const params = new URLSearchParams({
    limit: "40",
    market: "IN",
    seed_genres: genres?.join(",") || GENRES.join(","),
    seed_tracks: TRACKS.join(","),
    seed_artists: ARTISTS.join(","),
  });
  try {
    const response = await fetch(
      `${GET_RECOMMENDATIONS}?${params.toString()}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    if (response.status === 401) {
      refreshAuthToken();
    }

    const json = await response.json();
    return json;
  } catch (error: any) {
    logger.error(error.message);
  }
};

export { getRecommendations };
