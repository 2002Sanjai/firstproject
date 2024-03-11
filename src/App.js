import './App.css';
import Accordion from './components/Accordion'
import RandomColor from './components/RandomColor'
function App() {
  return (
    <div className="App">
      {/* Accordion Component*/}
      {
        <Accordion/>
      }
  { /* Random Color*/}
      {
        <RandomColor/>
      }
    </div>
  );
}

export default App;
