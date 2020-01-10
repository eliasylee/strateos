import React from 'react'

import Threshold from './Threshold'

import './ThresholdList.scss'

const ThresholdList = ({
  thresholds,
  currentThreshold,
  generateOnClickThreshold
}) =>
  <div className='threshold-list'>
    {thresholds.map((threshold, index) =>
      <Threshold
        key={index}
        index={index}
        threshold={threshold}
        currentThreshold={currentThreshold}
        onClick={generateOnClickThreshold(index)} />
    )}
  </div>

export default ThresholdList
