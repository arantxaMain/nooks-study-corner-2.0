// components/BackgroundMusic.tsx
import { useEffect, useState, useRef } from 'react';
import { playlist } from '../lib/playlist';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());  
  const [music, setMusic] = useState(playlist[currentHour] || playlist[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHour = new Date().getHours();
      if (newHour !== currentHour) {
        setCurrentHour(newHour);
        setMusic(playlist[newHour] || playlist[0]);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [currentHour]);

  useEffect(() => {
    const audio = audioRef.current;
    console.log(`reproduciendo música de las ${currentHour}`);
    if (audio) {
      audio.volume = 1;
      audio.play().catch(() => {
        console.log('El navegador bloqueó la reproducción automática');
      });
    }
  }, []);

  return (
    <audio ref={audioRef} controls loop>
      <source src={music} type="audio/mpeg" />
      Tu navegador no soporta el elemento audio.
    </audio>
  );
}
