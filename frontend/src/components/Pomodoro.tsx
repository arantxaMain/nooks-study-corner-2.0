import React from 'react';
import { useTimer } from '../hooks/useTimer';

const Pomodoro: React.FC = () => {
  const { timeLeft, isActive, isPaused, startTimer, pauseTimer, resetTimer, formatTime, isWorkTime } = useTimer();

  return (
    <div>
      <button className='cursor-pointer' onClick={resetTimer}><span className="material-symbols text-4xl text-matcha">refresh</span></button>
      <div className="w-md flex justify justify-items-center text-matcha">
        <h2 className="font-sour mx-auto text-8xl">{formatTime(timeLeft)}</h2>
      </div>
      <div className="controls">
        {isPaused ? (
          <button className='cursor-pointer' onClick={startTimer}><span className="material-symbols text-8xl text-matcha">play_arrow</span></button>
        ) : isActive ? (
          <button className='cursor-pointer' onClick={pauseTimer}><span className="material-symbols text-8xl text-matcha">pause</span></button>
        ) : (
          <button className='cursor-pointer' onClick={startTimer}><span className="material-symbols text-8xl text-matcha">play_arrow</span></button>
        )}
      </div>
      <p className="text-center text-lg text-gray-500">
        {isWorkTime ? 'Tiempo de trabajo' : 'Tiempo de descanso'}
      </p>

    </div>
  );
};

export default Pomodoro;
