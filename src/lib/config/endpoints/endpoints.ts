import { SPOTIFY, WEB_APP_URL } from "@/lib/constant";

export const GET_RECOMMENDATIONS = `${SPOTIFY.SPOTIFY_API}/v1/recommendations`;
export const GET_SEARCH = `${SPOTIFY.SPOTIFY_API}/v1/search`;
export const GET_AUTH_TOKEN = `${SPOTIFY.SPOTIFY_AUTH}/api/token`;
export const REFRESH_AUTH_TOKEN = `${WEB_APP_URL}/api/access-token`;
