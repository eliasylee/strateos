import React from 'react'

import TableEntry from './TableEntry'

import './Table.scss'

const Table = ({ wells, selectedWells }) => {
  const selectedWellsData = []

  Object.keys(selectedWells).forEach(rowIndex => {
    Object.keys(selectedWells[rowIndex]).forEach(columnIndex => {
      selectedWellsData.push(wells[rowIndex][columnIndex])
    })
  })

  return <div className='table'>
    <div className='table__header'>
      <div className='table__column'>
        Well Index
      </div>
      <div className='table__column'>
        C<sub>T</sub>
      </div>
    </div>
    {selectedWellsData.map((well, index) =>
      <TableEntry
        key={index}
        well={well} />
    )}
  </div>
}

export default Table
