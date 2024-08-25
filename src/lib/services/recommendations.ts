import { cookies } from "next/headers";
import { GET_RECOMMENDATIONS } from "../config/endpoints/endpoints";
import { logger } from "../logger";
import { refreshAuthToken } from "./auth-token";

const getRecommendations = async (genres?: string[]) => {
  const access_token = cookies().get("access_token");
  const token_type = cookies().get("token_type");
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `${token_type} ${access_token}`);

  const params = new URLSearchParams({
    limit: "10",
    market: "IN",
    genres: genres?.join(",") || "classical,country",
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
