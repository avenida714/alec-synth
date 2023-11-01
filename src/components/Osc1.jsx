import React from 'react'

function Osc1({change, settings, changeType}) {
  return (
    <div className='control'>
      <h2>Oscillator 1</h2>

      <div className="param">
        <h3>Frequency</h3>
      <input
      value={settings.frequency}
      onChange={change}
      max="5000"
      type='range'
      id='frequency'></input>
    </div>

    <div className="param">
        <h3>Detune</h3>
      <input
      value={settings.detune}
      onChange={change}
      max="100"
      type='range'
      id='detune'></input>
    </div>

    <div className="param">
      <h3>Wave Shape</h3>
      <button id="sine" onClick={changeType} className={``}>Sine</button>
      <button id="triangle" onClick={changeType} className={``}>Triangle</button>
      <button id="square" onClick={changeType} className={``}>Square</button>
      <button id="sawtooth" onClick={changeType} className={``}>Sawtooth</button>
    </div>

  </div>
  )
}

export default Osc1
