import { getWellIndex } from '../util/well-indices'
import { DEFAULT_THRESHOLD_VALUE } from '../constants/qpcr-constants'

const _calculateWellIndex = (row, column) => getWellIndex(row, column)

export const calculateThresholdCycle = (cycles, threshold) => {
  let index = 0

  while (index < cycles.length && cycles[index].fluorescence < threshold) {
    index++
  }

  return index
}

export const calculateOpacity = (thresholdCycle, totalCycles) => thresholdCycle / totalCycles

export const formatQPCRData = data => {
  const wells = []

  Object.keys(data).forEach(key => {
    const [row, column] = key.match(/[0-9]+[0-9]?/g)

    if (!wells[row - 1]) {
      wells[row - 1] = []
    }

    const well = {
      index: _calculateWellIndex(row, column),
      cycles: data[key],
      thresholdCycle: calculateThresholdCycle(data[key], DEFAULT_THRESHOLD_VALUE),
      selected: false
    }

    well.opacity = calculateOpacity(well.thresholdCycle, data[key].length)

    wells[row - 1][column - 1] = well
  })
  console.log(wells)
  return wells
}
