import { ACCESS_TOKEN, TOKEN_TYPE } from "@/lib/config/cookies";
import SearchResults from "./_sections/SearchResults";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
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
