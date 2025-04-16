import './styles/App.css'
import Pomodoro from './components/Pomodoro'
import { TimerProvider } from './contexts/TimerProvider';
import TimerProgress from './components/TimerProgress'

function App() {
  return (
    <TimerProvider>
      <div>
        <Pomodoro />
        <TimerProgress />
      </div>
    </TimerProvider>
  );
}

export default App
