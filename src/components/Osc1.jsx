import React from 'react'

function Osc1({changeFreq, freq}) {
  return (
    <div>
      <input
      value={freq}
      onChange={changeFreq}
      max="5000"
      type='range'
      id='frequency'></input>
    </div>
  )
}

export default Osc1
