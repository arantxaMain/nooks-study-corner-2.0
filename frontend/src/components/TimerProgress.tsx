import React from 'react';
import { Progress } from './Progress';
import { useTimer } from '../contexts/TimerContext';

const TimerProgress: React.FC = () => {
  const { progress } = useTimer();
  
  return <Progress value={progress} />;
};

export default TimerProgress;