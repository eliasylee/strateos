import React from 'react'

import './Threshold.scss'

const Threshold = ({
  index,
  threshold,
  currentThreshold,
  onClick
}) => {
  const status = index === currentThreshold
    ? 'selected'
    : 'deselected'

  return <div
    className={`threshold ${status}`}
    onClick={onClick}>
    {threshold}
  </div>
}

export default Threshold
