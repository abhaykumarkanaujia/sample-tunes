"use client";
import { Button } from "@/components/ui/button";
import { useSongsStates } from "@/contexts/SongsContext";

export default function Home() {
  const { setCurrentTrack } = useSongsStates();
  const setSongMp3AsTrack = () => {
    setCurrentTrack("song.mp3");
  };
  return (
    <main>
      <Button onClick={setSongMp3AsTrack}>Set Track</Button>
    </main>
  );
}
