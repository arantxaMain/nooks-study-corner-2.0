import './styles/App.css'
import Pomodoro from './components/Pomodoro'
import { TimerProvider } from './contexts/TimerProvider';
import TimerProgress from './components/TimerProgress'

function App() {
  return (
    <div>
      <TimerProvider>
        <div>
          <Pomodoro />
          <TimerProgress />
        </div>
      </TimerProvider>
    </div>
  );
}

export default App
