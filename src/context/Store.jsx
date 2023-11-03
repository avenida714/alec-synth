import React from "react";

// create our audio context as one instance; our react state will match our web audio current state
const actx = new AudioContext();

//this is our out, think of it like an amp
const out = actx.destination;

//this is our first oscillator. think of it like a string; synthesis vibration
export const osc1 = actx.createOscillator();

// all oscillators need a gain in order to have sound.
const gain1 = actx.createGain();

//set up the biquad filter
const filter = actx.createBiquadFilter();

//connect our first oscillator to our first gain
osc1.connect(gain1);
//connect the gain to the filter
gain1.connect(filter);
//connect the filter to the out
filter.connect(out);

const CTX = React.createContext();

export { CTX };

export function reducer(state, action) {
  const { id, value } = action.payload || {};

  switch (action.type) {
    // case "START_OSC":
    //   osc1.start();
    //   return { ...state };
    // case "STOP_OSC":
    //   osc1.stop();
    //   return { ...state };
    case "CHANGE_OSC1":{
      osc1[id].value = value;
      return { ...state, osc1Settings: { ...state.osc1Settings, [id]: value } };
    }
    case "CHANGE_OSC1_TYPE": {
      osc1.type = id;
      return {...state, osc1Settings: {...state.osc1Settings, type: id}}
    }
    case "CHANGE_FILTER":
      filter[id].value = value;
      return {...state, filterSettings: {...state.filterSettings, [id]: value}}
    default:
      console.log(
        "THERE WAS AN ERROR WITH THE REDUCER. This was the action: ",
        action
      );
      return {...state};
  }
}

export default function Store(props) {
  const stateHook = React.useReducer(reducer, {
    osc1Settings: {
      frequency: osc1.frequency.value,
      detune: osc1.detune.value,
      type: osc1.type,
    },
    filterSettings: {
      frequency: filter.frequency.value,
      detune: filter.detune.value,
      Q: filter.Q.value,
      gain: filter.gain.value,
      type: filter.type,
    },
  });
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>
}
