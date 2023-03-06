import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
  const {tg,onToggleButton, onClose} = useTelegram()
  useEffect(() => {
    return () => {
      tg.ready()
    };
  }, []);

  return (
    <div className="App">
        <button onClick={onClose}>Нажми котенок Mya</button>
    </div>
  );
}

export default App;
