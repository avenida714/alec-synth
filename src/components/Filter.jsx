import React from "react";

const Filter = ({ change, settings }) => {
  const { frequency, detune, Q, gain, type } = settings;

  return (
    <div className="control">
      <h2>Filter</h2>
      <div className="params">
        <h3>Frequency</h3>
        <input
          value={frequency}
          type="range"
          onChange={change}
          id="frequency"
          max="10000"
        />
      </div>
      <div className="params">
        <h3>Detune</h3>
        <input value={detune} type="range" onChange={change} id="detune" />
      </div>
      <div className="params">
        <h3>Q</h3>
        <input value={Q} type="range" onChange={change} id="Q" max="10" />
      </div>
      <div className="params">
        <h3>Gain</h3>
        <input value={gain} type="range" onChange={change} id="gain" max="10" />
      </div>
    </div>
  );
};

export default Filter;
