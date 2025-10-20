import React, { useRef, useState, useEffect } from "react";

interface AudioPlayerProps {
  src: string;         // Ruta del audio
  initialVolume?: number; // Volumen inicial (0 a 1)
  isPlayings:boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, initialVolume = 0.5,isPlayings }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(isPlayings);
  const [volume, setVolume] = useState(initialVolume);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;           // Reproducción en bucle
    audio.volume = volume;

    return () => {
      audio.pause();             // Limpiar al desmontar
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume; // Ajustar volumen en tiempo real
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        console.log("Reproducción bloqueada hasta que el usuario interactúe.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <button onClick={togglePlay}>
        {isPlaying ? "Pausar" : "Reproducir"}
      </button>

      <label>
        Volumen: {Math.round(volume * 100)}%
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default AudioPlayer;
