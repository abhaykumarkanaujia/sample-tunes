export const isSupportedAudioSource = (src: string) => {
  const supportedFormats = ["mp3", "wav", "ogg"];
  const fileExtension = src.split(".").pop()?.toLowerCase();
  return fileExtension && supportedFormats.includes(fileExtension);
};

export const secondsToHms = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  if (hours !== "00") {
    return `${hours}:${minutes}:${secs}`;
  } else {
    return `${minutes}:${secs}`;
  }
};
