import Recommendations from "./_sections/Recommendations";
import { ACCESS_TOKEN, TOKEN_TYPE } from "@/lib/config/cookies";
export default async function Home() {
  return (
    <div className="px-10 py-6">
      {TOKEN_TYPE && ACCESS_TOKEN ? (
        <Recommendations access_token={ACCESS_TOKEN} token_type={TOKEN_TYPE} />
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
}
