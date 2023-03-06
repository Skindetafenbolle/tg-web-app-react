import './App.css';
import {useEffect} from "react";
function App() {

  useEffect(() => {
    return () => {
      tg.ready()
    };
  }, []);
  



  return (
    <div className="App">
    work!

    </div>
  );
}

export default App;
