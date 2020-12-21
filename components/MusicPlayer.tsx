import React, { useCallback, useEffect, useState } from "react";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const MusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

export const MusicPlayer = () => {
  const [audio, setAudio] = useState(null as HTMLAudioElement | null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = useCallback(() => {
    if (audio === null) {
      return;
    }
    audio.play();
  }, [audio]);
  const handlePause = useCallback(() => {
    if (audio === null) {
      return;
    }
    audio.pause();
  }, [audio]);
  const handleStateChange = useCallback(() => {
    if (audio === null) {
      return;
    }
    setIsPlaying(!audio.paused);
  }, [audio]);
  useEffect(() => {
    const audio = new Audio("/kuso.domains.m4a");
    setAudio(audio);
  }, []);
  useEffect(() => {
    if (audio === null) {
      return;
    }
    audio.addEventListener("play", handleStateChange);
    audio.addEventListener("pause", handleStateChange);
    audio.addEventListener("ended", handleStateChange);
    return () => {
      if (audio === null) {
        return;
      }
      audio.removeEventListener("play", handleStateChange);
      audio.removeEventListener("pause", handleStateChange);
      audio.removeEventListener("ended", handleStateChange);
    };
  }, [audio, handleStateChange]);
  return (
    <div className="w-full h-16 px-2 bg-gray-200 border-t border-black border-opacity-10 fixed bottom-0 flex items-center">
      {isPlaying ? (
        <button
          className="w-12 h-12 flex-none text-gray-600 focus:outline-none"
          onClick={handlePause}
        >
          <PauseIcon />
        </button>
      ) : (
        <button
          className="w-12 h-12 flex-none text-gray-600 focus:outline-none"
          onClick={handlePlay}
        >
          <PlayIcon />
        </button>
      )}
      <div className="h-12 ml-2 flex-1">
        <div className="h-6 text-gray-900">
          <div className="h-4 w-4 inline-block mr-1 align-middle">
            <MusicIcon />
          </div>
          kuso.domains
        </div>
        <div className="h-6 text-gray-600">
          <a href="https://teleka.su" target="_blank" rel="noreferrer">
            teleka.su
          </a>
        </div>
      </div>
      <a
        href="https://www.youtube.com/watch?v=o5DNvdjnKPY"
        target="_blank"
        rel="noreferrer"
        className="flex-none w-6 h-6 mx-4 text-gray-600"
      >
        <ExternalLinkIcon />
      </a>
    </div>
  );
};
