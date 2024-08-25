"use client";
import SongsList from "@/components/SongsList";
import { Button } from "@/components/ui/button";
import { useSongsStates } from "@/contexts/SongsContext";

export default function Home() {
  const { setCurrentTrack } = useSongsStates();
  const setSongMp3AsTrack = () => {
    setCurrentTrack("https://open.spotify.com/track/5ztLCIjBElyDk5qXfGRNNP");
  };
  return (
    <main>
      <SongsList />
      <Button onClick={setSongMp3AsTrack}>Set Track</Button>
    </main>
  );
}
