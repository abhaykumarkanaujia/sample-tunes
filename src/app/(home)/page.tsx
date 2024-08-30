import { cookies } from "next/headers";
import Recommendations from "./_sections/Recommendations";
import { Cookies } from "@/lib/types/enum";
export default async function Home() {
  const cookiesStore = cookies();
  const ACCESS_TOKEN = cookiesStore.get(Cookies.TOKEN)?.value;
  const TOKEN_TYPE = cookiesStore.get(Cookies.TOKEN_TYPE)?.value;
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
