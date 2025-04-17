import './styles/App.css'
import Pomodoro from './components/Pomodoro'
import { TimerProvider } from './contexts/TimerProvider';
import TimerProgress from './components/TimerProgress'
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <div>
      <TimerProvider>
        <div>
          <Pomodoro />
          <TimerProgress />
        </div>
      </TimerProvider>
      <BackgroundMusic />
    </div>
  );
}

export default App
