"use client";
import { createContext, FC, useContext, useState } from "react";

const SongsContext = createContext<any>(null);

const SongsStatesPorvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = useState<string | null>();
  return (
    <SongsContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </SongsContext.Provider>
  );
};

const useSongsStates = () => {
  const states = useContext(SongsContext);
  return states;
};

export { SongsStatesPorvider, SongsContext, useSongsStates };
