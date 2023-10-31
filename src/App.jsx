
import './App.scss'

// create our audio context as one instance; our react state will match our web audio current state
const actx = new AudioContext();

//save our state, and update it in our audio context and react state
const out = actx.destination;
const osc1 = actx.createOscillator();

const gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

osc1.start();
function App() {


  return (
    <>
    <div className='App'>
      <h1>Alec-Synth</h1>
    </div>
    </>
  )
}

export default App
