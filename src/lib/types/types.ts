import { PlaybackState } from "./enum";

export type PlayerState = {
  trackDuration: number | null;
  playbackPosition: number | null;
  playbackState: PlaybackState;
};

export type AudioPlayer = {
  setTrackPosition: (position: number) => void;
  togglePlay: () => void;
  cleanup: () => void;
  replayCurrentTrack: () => void;
};
