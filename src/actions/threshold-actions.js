import { updateState } from './redux-actions'

import { calculateThresholdCycle, calculateOpacity } from '../util/format-qpcr-data'

export const updateThreshold = e => dispatch => {
  const newThreshold = e.currentTarget.value

  dispatch(updateState({
    threshold: newThreshold
  }))
}

export const createThreshold = (dispatch, getState) => {
  const { wells, threshold, thresholds } = getState()

  const newWells = [...wells]
  const newThresholds = [...thresholds]

  newWells.forEach(row => {
    row.forEach(well => {
      well.thresholdCycle = calculateThresholdCycle(well.cycles, threshold)
      well.opacity = calculateOpacity(well.thresholdCycle, well.cycles.length)
    })
  })
  newThresholds.push(threshold)

  dispatch(updateState({
    wells: newWells,
    threshold: '',
    thresholds: newThresholds,
    currentThreshold: newThresholds.length - 1
  }))
}

export const changeCurrentThreshold = index => (dispatch, getState) => {
  const { wells, thresholds } = getState()

  const newWells = [...wells]
  const newThreshold = thresholds[index]

  newWells.forEach(row => {
    row.forEach(well => {
      well.thresholdCycle = calculateThresholdCycle(well.cycles, newThreshold)
      well.opacity = calculateOpacity(well.thresholdCycle, well.cycles.length)
    })
  })

  dispatch(updateState({
    wells: newWells,
    currentThreshold: index
  }))
}
