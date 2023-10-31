import './App.scss'
import Osc1 from './components/Osc1';
import React from 'react';
import { useState } from 'react';

// create our audio context as one instance; our react state will match our web audio current state
const actx = new AudioContext();


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
// osc1.start();


function App() {

  const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value);

  const changeFreqOsc1 = e => {
    const {value} = e.target;
    setOsc1Freq(value);
    osc1.frequency.value = value;
  }

//notice with these buttons, you still can't start more than once; this is why Tone.js is important TODO
  return (
    <>
    <div className='App'>
      <h1>Alec-Synth</h1>
      <button onClick={() => osc1.start()}>start</button>
      <button onClick={() => osc1.stop()}>stop</button>
      <Osc1 changeFreq={changeFreqOsc1} freq={osc1Freq}/>
    </div>
    </>
  )
}

export default App
