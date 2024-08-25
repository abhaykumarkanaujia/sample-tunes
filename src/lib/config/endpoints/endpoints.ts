import { WEB_APP_URL } from "@/lib/constant";
import { SPOTIFY_API, SPOTIFY_AUTH } from "../spotify";

export const GET_RECOMMENDATIONS = `${SPOTIFY_API}/v1/recommendations`;
export const GET_AUTH_TOKEN = `${SPOTIFY_AUTH}/api/token`;
export const REFRESH_AUTH_TOKEN = `${WEB_APP_URL}/api/access-token`;
