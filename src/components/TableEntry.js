import React from 'react'

import './TableEntry.scss'

const TableEntry = ({ well }) => {
  const { index, thresholdCycle } = well

  return <div className='table-entry'>
    <div className='table__column'>
      {index}
    </div>
    <div className='table__column'>
      {thresholdCycle}
    </div>
  </div>
}

export default TableEntry
