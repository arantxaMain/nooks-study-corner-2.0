import React, { createContext, useContext, useState, useEffect } from 'react';

interface TimerContextType {
  timeLeft: number;
  isActive: boolean;
  isPaused: boolean;
  progress: number;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  formatTime: (seconds: number) => string;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const progress = ((25 * 60 - timeLeft) / (25 * 60)) * 100;

  useEffect(() => {
    let interval: number;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert('¡Tiempo de descanso!');
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <TimerContext.Provider 
      value={{ 
        timeLeft, 
        isActive, 
        isPaused, 
        progress,
        startTimer, 
        pauseTimer, 
        resetTimer, 
        formatTime 
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};