"use client";
import { createContext, useContext, useState } from "react";

const SongsContext = createContext<any>(null);

const SongsStatesPorvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<string | null>();
  return (
    <SongsContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </SongsContext.Provider>
  );
};

const SongsStates = useContext(SongsContext);

export { SongsStatesPorvider, SongsContext, SongsStates };
