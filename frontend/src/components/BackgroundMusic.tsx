// components/BackgroundMusic.tsx
import { useEffect, useRef } from 'react';
import music from '../assets/02. 1200 AM (Sunny).mp3'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const hour = new Date().getHours();
  setInterval(() => {
    console.log(hour);
  }, 1000);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(() => {
        console.log('El navegador bloqueó la reproducción automática');
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={music} type="audio/mpeg" />
      Tu navegador no soporta el elemento audio.
    </audio>
  );
}
