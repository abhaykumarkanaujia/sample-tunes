import {
  GET_AUTH_TOKEN,
  REFRESH_AUTH_TOKEN,
} from "../config/endpoints/endpoints";
import { SPOTIFY } from "../constant";
import { logger } from "../logger";

const getAuthToken = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: SPOTIFY.SPOTIFY_CLIENT_ID || "",
    client_secret: SPOTIFY.SPOTIFY_CLIENT_SECRET || "",
  });
  try {
    const response = await fetch(`${GET_AUTH_TOKEN}?${params.toString()}`, {
      method: "POST",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    logger.error(error.message);
  }
};

const refreshAuthToken = async () => {
  try {
    const response = await fetch(`${REFRESH_AUTH_TOKEN}`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    logger.error(error.message);
  }
};

export { refreshAuthToken, getAuthToken };
