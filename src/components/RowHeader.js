import React from 'react'

import { getRowFromIndex } from '../util/well-indices'

import './RowHeader.scss'

const RowHeader = ({
  rowIndex,
  toggleRow
}) =>
  <div
    className='row-header'
    onClick={toggleRow}>
    {getRowFromIndex(rowIndex + 1)}
  </div>

export default RowHeader
