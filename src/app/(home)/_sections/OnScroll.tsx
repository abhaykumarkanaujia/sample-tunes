"use client";
import SongsList from "@/components/SongsList";
import { getRecommendations } from "@/lib/services/recommendations";
import { SpotifyTrack } from "@/lib/types/types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function OnScroll({
  initialTracks,
  access_token,
  token_type,
}: {
  initialTracks: SpotifyTrack[];
  access_token: string;
  token_type: string;
}) {
  const [tracks, setTracks] = useState(initialTracks);
  const addMoreTracks = () => {
    getRecommendations(token_type, access_token).then((res) => {
      //   setTracks((prev) => [...prev, ...res.tracks]);
    });
  };
  return (
    <InfiniteScroll
      dataLength={tracks.length}
      hasMore={true}
      next={addMoreTracks}
      loader={<p>loading...</p>}
    >
      <SongsList tracks={tracks} />
    </InfiniteScroll>
  );
}
