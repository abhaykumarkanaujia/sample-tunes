import Recommendations from "./_sections/Recommendations";
import { ACCESS_TOKEN, TOKEN_TYPE } from "@/lib/config/cookies";
export default async function Home() {
  return (
    <>
      {TOKEN_TYPE && ACCESS_TOKEN ? (
        <Recommendations access_token={ACCESS_TOKEN} token_type={TOKEN_TYPE} />
      ) : (
        <p>Loading.....</p>
      )}
    </>
  );
}
