
import './App.scss'

// create our audio context as one instance; our react state will match our web audio current state
const actx = new AudioContext();

//save our state, and update it in our audio context and react state

//this is our out, think of it like an amp
const out = actx.destination;

//this is our first oscillator. think of it like a string; synthesis vibration
const osc1 = actx.createOscillator();
// all oscillators need a gain in order to have sound.
const gain1 = actx.createGain();
//connect our first oscillator to our first gain
osc1.connect(gain1);
//connect that gain to the out
gain1.connect(out);

//start it up
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
