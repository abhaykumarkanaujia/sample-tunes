"use client";
import { Button } from "@/components/ui/button";
import { SongsStates } from "@/contexts/SongsContext";

export default function Home() {
  const { setCurrentTrack } = SongsStates;
  const setSongMp3AsTrack = () => {
    setCurrentTrack("songs.mp3");
  };
  return (
    <main>
      <Button onClick={setSongMp3AsTrack}>Set Track</Button>
    </main>
  );
}
