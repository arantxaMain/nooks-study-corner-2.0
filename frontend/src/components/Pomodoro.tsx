import React, { useState, useEffect } from 'react';

const Pomodoro: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60); // 25 minutos en segundos
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert('¡Tiempo de descanso!');
      resetPomodoro();
    }

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desactive
  }, [isActive, timeLeft]);

  const startPomodoro = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pausePomodoro = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const resetPomodoro = () => {
    setIsActive(false);
    setTimeLeft(25 * 60); // Reseteamos al tiempo inicial
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro">
      <div className="time-display">
        <h2>{formatTime(timeLeft)}</h2>
      </div>
      <div className="controls">
        {isPaused ? (
          <button onClick={startPomodoro}>Reanudar</button>
        ) : isActive ? (
          <button onClick={pausePomodoro}>Pausar</button>
        ) : (
          <button onClick={startPomodoro}>Iniciar</button>
        )}
        <button onClick={resetPomodoro}>Resetear</button>
      </div>
    </div>
  );
};

export default Pomodoro;
