import { getWellIndex } from '../util/well-indices'
import { THRESHOLD_VALUE } from '../constants/qpcr-constants'

const _calculateWellIndex = (row, column) => getWellIndex(row, column)

const _calculateThresholdCycle = cycles => {
  let index = 0

  while (index < cycles.length && cycles[index].fluorescence < THRESHOLD_VALUE) {
    index++
  }

  return index
}

const _calculateOpacity = (thresholdCycle, totalCycles) => thresholdCycle / totalCycles

export const formatQPCRData = data => {
  const wells = []

  Object.keys(data).forEach(key => {
    const [row, column] = key.match(/[0-9]+[0-9]?/g)

    if (!wells[row - 1]) {
      wells[row - 1] = []
    }

    const well = {
      index: _calculateWellIndex(row, column),
      thresholdCycle: _calculateThresholdCycle(data[key]),
      selected: false
    }

    well.opacity = _calculateOpacity(well.thresholdCycle, data[key].length)

    wells[row - 1][column - 1] = well
  })

  return wells
}
