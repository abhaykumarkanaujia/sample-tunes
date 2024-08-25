import { getAuthToken } from "@/lib/services/auth-token";
import { NextRequest, NextResponse } from "next/server";

const TOKEN_EXPIRATION_TIME = 3500;
export async function POST(request: NextRequest) {
  const cookieStore = request.cookies;
  const tokenSetAt = cookieStore.get("token_set_at")?.value;
  const currentTime = new Date();
  if (tokenSetAt) {
    const lastSetTime = new Date(tokenSetAt);
    const timePassed = (currentTime.getTime() - lastSetTime.getTime()) / 1000;
    if (timePassed < TOKEN_EXPIRATION_TIME) {
      return NextResponse.json({
        access_token: cookieStore.get("access_token"),
        token_type: cookieStore.get("token_type"),
        expires_in: 3600,
      });
    }
  }
  const res = await getAuthToken();
  const response = NextResponse.json(res);
  response.cookies.set("access_token", res.access_token, {
    maxAge: TOKEN_EXPIRATION_TIME,
  });
  response.cookies.set("token_type", res.token_type, {
    maxAge: TOKEN_EXPIRATION_TIME,
  });
  response.cookies.set("token_set_at", currentTime.toString(), {
    maxAge: TOKEN_EXPIRATION_TIME,
  });
  return response;
}
