import SongsList from "@/components/SongsList";
import { cookies } from "next/headers";
export default async function Home() {
  const cookieStore = cookies();
  console.log(cookieStore.get("access_token"));
  return (
    <main className="flex justify-center items-center min-h-[60vh] bg-gray-600">
      <p className="text-wrap">{cookieStore.get("access_token")?.value}</p>
      <SongsList />
    </main>
  );
}
