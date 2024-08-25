import { getAuthToken } from "@/lib/services/auth-token";
import { cn } from "@/lib/utils";
export default async function SongsList({ className }: { className?: string }) {
  await getAuthToken();
  return <section className={cn("", className)}></section>;
}
