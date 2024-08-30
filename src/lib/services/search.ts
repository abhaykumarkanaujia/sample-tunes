import { endpoints } from "../config/endpoints";
import { logger } from "../logger";
import { refreshAuthToken } from "./auth-token";

const getTracksByName = async (
  token_type: string,
  access_token: string,
  query: string,
  genres?: string[]
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `${token_type} ${access_token}`);

  const params = new URLSearchParams({
    q: query,
    type: "track",
    limit: "20",
    market: "IN",
  });
  try {
    const response = await fetch(
      `${endpoints.GET_SEARCH}?${params.toString()}`,
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

export { getTracksByName };
