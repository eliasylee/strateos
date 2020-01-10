import React from 'react'

import './ThresholdControls.scss'

const ThresholdControls = ({
  threshold,
  updateThreshold,
  createThreshold
}) =>
  <div className='threshold-controls'>
    <input
      className='threshold-controls__input'
      onChange={updateThreshold}
      value={threshold} />
    <div
      className='threshold-control__create-button'
      onClick={createThreshold}>
      Create
    </div>
  </div>

export default ThresholdControls
