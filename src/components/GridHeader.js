import React from 'react'

import ColumnHeader from './ColumnHeader'

import './GridHeader.scss'

const GridHeader = ({
  numberOfCols,
  allWellsSelected,
  generateToggleColumn,
  toggleAll
}) =>
  <div className='grid-header'>
    <input
      type='checkbox'
      className='checkbox'
      checked={allWellsSelected}
      onChange={toggleAll} />
    {new Array(numberOfCols).fill(0).map((_, columnIndex) =>
      <ColumnHeader
        key={columnIndex}
        columnIndex={columnIndex}
        toggleColumn={generateToggleColumn(columnIndex)} />
    )}
  </div>

export default GridHeader
