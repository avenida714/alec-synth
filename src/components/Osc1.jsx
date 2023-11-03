import React, { useContext } from "react";
import { CTX } from "../context/Store";

function Osc1() {
  const [appState, updateState] = useContext(CTX);

  const { type, frequency, detune } = appState.osc1Settings;

  const change = (e) => {
    const { id, value } = e.target;
    updateState({ type: "CHANGE_OSC1", payload: { id, value } });
  };

  const changeType = (e) => {
    const { id } = e.target;
    updateState({ type: "CHANGE_OSC1_TYPE", payload: { id } });
  };

  return (
    <div className="control">
      <h2>Oscillator 1</h2>


      <div className="param">
        <h3>Frequency</h3>
        <input
          value={frequency}
          onChange={change}
          max="5000"
          type="range"
          id="frequency"
        ></input>
      </div>

      <div className="param">
        <h3>Detune</h3>
        <input
          value={detune}
          onChange={change}
          max="100"
          type="range"
          id="detune"
        ></input>
      </div>

      <div className="param">
        <h3>Wave Shape</h3>
        <button
          id="sine"
          onClick={changeType}
          className={`${type === "sine" && "active"}`}
        >
          Sine
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={`${type === "triangle" && "active"}`}
        >
          Triangle
        </button>
        <button
          id="square"
          onClick={changeType}
          className={`${type === "square" && "active"}`}
        >
          Square
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={`${type === "sawtooth" && "active"}`}
        >
          Sawtooth
        </button>
      </div>
    </div>
  );
}

export default Osc1;
