import React from 'react'

import RowHeader from './RowHeader'
import Well from './Well'

import './Row.scss'

const Row = ({
  rowIndex,
  row,
  generateToggleWell,
  generateToggleRow
}) =>
  <div className='row'>
    <RowHeader
      rowIndex={rowIndex}
      toggleRow={generateToggleRow(rowIndex)} />
    {row.map((well, columnIndex) =>
      <Well
        key={columnIndex}
        well={well}
        toggleWell={generateToggleWell(rowIndex, columnIndex)} />
    )}
  </div>

export default Row
