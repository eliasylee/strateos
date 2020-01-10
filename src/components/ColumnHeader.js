import React from 'react'

import './ColumnHeader.scss'

const ColumnHeader = ({ columnIndex, toggleColumn }) =>
  <div
    className='column-header'
    onClick={toggleColumn}>
    {columnIndex + 1}
  </div>

export default ColumnHeader
