import React from 'react'

import './Well.scss'

const Well = ({
  well,
  toggleWell
}) => {
  const { opacity, selected } = well

  const style = {
    background: `rgba(128, 0, 0, ${opacity})`
  }

  const status = selected
    ? 'selected'
    : 'unselected'

  return <div
    className={`well ${status}`}
    style={style}
    onClick={toggleWell} />
}

export default Well
