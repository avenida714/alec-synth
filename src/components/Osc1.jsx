import React from 'react'

function Osc1({change, settings}) {
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

  </div>
  )
}

export default Osc1
