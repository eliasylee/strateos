import React from 'react'

import GridHeader from './GridHeader'
import Row from './Row'

import './Grid.scss'

const Grid = ({
  wells,
  selectedWells,
  allWellsSelected,
  generateToggleWell,
  generateToggleRow,
  generateToggleColumn,
  toggleAll
}) =>
  <div className='grid'>
    <GridHeader
      numberOfCols={(wells[0] && wells[0].length) || 0}
      allWellsSelected={allWellsSelected}
      generateToggleColumn={generateToggleColumn}
      toggleAll={toggleAll} />
    {wells.map((row, rowIndex) =>
      <Row
        key={rowIndex}
        rowIndex={rowIndex}
        row={row}
        generateToggleWell={generateToggleWell}
        generateToggleRow={generateToggleRow} />
    )}
  </div>

export default Grid
