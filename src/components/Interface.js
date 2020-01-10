import React from 'react'

import ThresholdControls from './ThresholdControls'
import ThresholdList from './ThresholdList'
import Table from './Table'

import './Interface.scss'

const Interface = ({
  wells,
  selectedWells,
  threshold,
  thresholds,
  currentThreshold,
  updateThreshold,
  createThreshold,
  generateOnClickThreshold
}) =>
  <div className='interface'>
    <ThresholdControls
      threshold={threshold}
      updateThreshold={updateThreshold}
      createThreshold={createThreshold} />
    <ThresholdList
      thresholds={thresholds}
      currentThreshold={currentThreshold}
      generateOnClickThreshold={generateOnClickThreshold} />
    <Table
      wells={wells}
      selectedWells={selectedWells} />
  </div>

export default Interface
