"use client";
import { isSupportedAudioSource } from "@/lib/helpers";
import { logger } from "@/lib/logger";
import { PlaybackState } from "@/lib/types/enum";
import { AudioPlayer, PlayerState } from "@/lib/types/types";
import { Dispatch, useEffect, useRef, useState } from "react";

export function createAudioPlayer(
  audioSource: string,
  changePlayerState: Dispatch<PlayerState>
) {
  const audio = new Audio();
  let previousTrack = "";

  const loadAudioSource = (audioSrc: string) => {
    if (audioSrc !== "" || audioSrc !== null || audioSrc !== undefined) {
      audio.src = audioSrc;
      audio.load();
      previousTrack = audioSrc;
    } else {
      logger.error("audio source is not valid.");
    }
  };

  const togglePlay = () => {
    const src = audio.src;
    if (audio.paused) {
      if (src && src !== "" && isSupportedAudioSource(src)) {
        audio
          .play()
          .catch((err) =>
            logger.error(
              `error occurred in playing some audio file \n ${err}.\n\n file that was being played is ${audio.src}`
            )
          );
      }
    } else {
      audio.pause();
    }
  };

  const autoPlay = () => {
    audio.play().catch((err) => {
      logger.error(`Failed to play automatically ${err}`);
    });
  };

  const getPlaybackState = () => {
    return audio.paused ? PlaybackState.PAUSED : PlaybackState.PLAYING;
  };

  const getTrackDuration = () => {
    return isNaN(audio.duration) ? 0 : audio.duration;
  };

  const getTrackPosition = () => {
    return isNaN(audio.currentTime) ? 0 : audio.currentTime;
  };

  const setTrackPosition = (position: number) => {
    if (!isNaN(position)) {
      audio.currentTime = position;
    }
  };

  const getCurrentState = (): PlayerState => {
    return {
      trackDuration: getTrackDuration(),
      playbackPosition: getTrackPosition(),
      playbackState: getPlaybackState(),
    };
  };

  const emitCurrentPlayerState = () => {
    const state = getCurrentState();
    changePlayerState(state);
  };

  const replayCurrentTrack = () => {
    loadAudioSource(previousTrack);
    audio.play();
  };

  const setUpAudioElementListeners = () => {
    audio.addEventListener("play", emitCurrentPlayerState);
    audio.addEventListener("pause", emitCurrentPlayerState);
    audio.addEventListener("ended", replayCurrentTrack);
    audio.addEventListener("playing", emitCurrentPlayerState);
    audio.addEventListener("timeupdate", emitCurrentPlayerState);
    audio.addEventListener("loadeddata", emitCurrentPlayerState);
    audio.addEventListener("canplaythrough", autoPlay, { once: true });
  };

  const removeAudioElementListeners = () => {
    audio.removeEventListener("play", emitCurrentPlayerState);
    audio.removeEventListener("pause", emitCurrentPlayerState);
    audio.removeEventListener("ended", replayCurrentTrack);
    audio.removeEventListener("playing", emitCurrentPlayerState);
    audio.removeEventListener("timeupdate", emitCurrentPlayerState);
    audio.removeEventListener("loadeddata", emitCurrentPlayerState);
  };

  const init = (audioSrc: string) => {
    if (audioSrc !== "" || audioSrc !== null || audioSrc !== undefined) {
      setUpAudioElementListeners();
      loadAudioSource(audioSrc);
    } else {
      logger.error("audio source is not valid.");
    }
  };

  const cleanup = () => {
    removeAudioElementListeners();
    audio.pause();
  };

  init(audioSource);

  return { setTrackPosition, togglePlay, replayCurrentTrack, cleanup };
}

export function useAudioPlayer(audioSource: string) {
  const initalPlayerState: PlayerState = {
    trackDuration: 0,
    playbackPosition: 0,
    playbackState: PlaybackState.PAUSED,
  };

  const [playerState, setPlayerState] = useState(initalPlayerState);

  const audioPlayer = useRef<AudioPlayer | null>(null);

  useEffect(() => {
    if (isSupportedAudioSource(audioSource)) {
      const play = createAudioPlayer(audioSource, setPlayerState);
      audioPlayer.current = play;
    }
    return () => {
      audioPlayer.current?.cleanup();
    };
  }, [audioSource]);

  const togglePlay = () => {
    audioPlayer.current?.togglePlay();
  };

  const setTrackPosition = (position: number) => {
    audioPlayer.current?.setTrackPosition(position);
  };

  const cleanup = () => {
    audioPlayer.current?.cleanup();
    audioPlayer.current = null;
  };

  const replay = () => {
    audioPlayer.current?.replayCurrentTrack();
  };

  return { playerState, togglePlay, setTrackPosition, cleanup, replay };
}
