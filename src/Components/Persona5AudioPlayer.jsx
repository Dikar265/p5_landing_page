import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import WaveSurfer from "wavesurfer.js";
import { DeleteIcon, Music, Music2Icon, PauseIcon, PlayIcon } from "lucide-react";

const playerRoot = document.getElementById("audio-player-root");

export default function AudioPlayerPortal({ audioUrl }) {
  const containerRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [CurrentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [HideMusic, setHideMusic] = useState(true);

  const currentTrack = audioUrl[CurrentTrackIndex];

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = (waveSurferRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#ff4757",
      progressColor: "#2f3542",
      barWidth: 3,
      barGap: 2,
      height: 50,
      barHeight: 0.7,
      responsive: true,
      cursorColor: "#fff",
    }));

    waveSurferRef.current = ws;
    ws.load(currentTrack.music);

    ws.on("finish", () => {
      setCurrentTrackIndex((prevIndex) =>
        prevIndex + 1 < audioUrl.length ? prevIndex + 1 : 0
      );
    });
    ws.on("error", (e) => {
      console.error("WaveSurfer error:", e);
    });
    ws.on("ready", () => {
      if (isPlaying) {
        ws.play();
      }
    });

    return () => {
      ws.destroy();
    };
  }, [currentTrack.music]);

  const togglePlay = () => {
    if (!waveSurferRef.current) return;

    waveSurferRef.current.playPause();
    setIsPlaying(waveSurferRef.current.isPlaying());
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return createPortal(
    <>
    <div className={`fixed bottom-4 right-4 bg-black text-white p-3 rounded-xl shadow-lg w-80 z-50 border border-red-600 ${HideMusic ? "hidden" : "block"}`}>
      {showPlaylist && (
        <div className="mt-3 border-t border-red-800 pt-2 max-h-40 overflow-y-auto">
          {audioUrl.map((track, index) => (
            <div
              key={index}
              className={`cursor-pointer px-2 py-1 rounded hover:bg-red-900 ${
                index === CurrentTrackIndex ? "bg-red-700" : ""
              }`}
              onClick={() => playTrack(index)}
            >
              🎧 {track.title}
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center mb-2">
        <button
            onClick={() => setHideMusic(!HideMusic)}
            title="Cerrar">
            <DeleteIcon size={20}/>
        </button>
        
        <div className="text-sm font-bold text-red-500">
            
          {currentTrack.title}
        </div>
        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          title="Mostrar lista"
        >
          <Music2Icon size={20} />
        </button>
      </div>

      <div ref={containerRef} className="mb-2 h-[60px]" />

      <div className="flex justify-center">
        <button
          onClick={togglePlay}
          className="bg-red-600 hover:bg-red-800 px-4 py-1 rounded-full text-white text-sm font-semibold transition-all"
        >
          {isPlaying ? <PauseIcon size={18} /> : <PlayIcon size={18} />}
        </button>
      </div>
    </div>
    <button onClick={() => setHideMusic(!HideMusic)} className={`fixed bottom-4 right-4 bg-black text-white p-3 rounded-xl shadow-lg  z-50 border border-red-600 ${HideMusic ? "block" : "hidden"}`}>
      <Music/>
    </button>
    </>,
    playerRoot
  );
}