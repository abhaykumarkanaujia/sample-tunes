import { cookies } from "next/headers";
import SearchResults from "./_sections/SearchResults";
import { Cookies } from "@/lib/types/enum";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const cookiesStore = cookies();
  const ACCESS_TOKEN = cookiesStore.get(Cookies.TOKEN)?.value;
  const TOKEN_TYPE = cookiesStore.get(Cookies.TOKEN_TYPE)?.value;

  return (
    <>
      {TOKEN_TYPE && ACCESS_TOKEN ? (
        <SearchResults
          search_value={searchParams.search}
          access_token={ACCESS_TOKEN}
          token_type={TOKEN_TYPE}
        />
      ) : (
        <p>Loading.....</p>
      )}
    </>
  );
}
