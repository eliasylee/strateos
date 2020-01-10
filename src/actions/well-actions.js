import { updateState } from './redux-actions'

export const toggleWell = (rowIndex, columnIndex) => (dispatch, getState) => {
  const { wells, selectedWells } = getState()

  const newWells = [...wells]
  const newselectedWells = { ...selectedWells }

  newWells[rowIndex][columnIndex].selected = !newWells[rowIndex][columnIndex].selected

  if (newWells[rowIndex][columnIndex].selected) {
    if (newselectedWells[rowIndex]) {
      newselectedWells[rowIndex][columnIndex] = true
    } else {
      newselectedWells[rowIndex] = { [columnIndex]: true }
    }
  } else {
    delete newselectedWells[rowIndex][columnIndex]
  }

  dispatch(updateState({
    wells: newWells,
    selectedWells: newselectedWells
  }))
}

export const toggleRow = rowIndex => (dispatch, getState) => {
  const { wells, selectedWells, selectedRows } = getState()

  const newWells = [...wells]
  const newselectedWells = { ...selectedWells }
  const newselectedRows = { ...selectedRows }

  newselectedRows[rowIndex] = !newselectedRows[rowIndex]

  newWells[rowIndex].forEach((well, columnIndex) => {
    well.selected = newselectedRows[rowIndex]

    if (newselectedRows[rowIndex]) {
      if (newselectedWells[rowIndex]) {
        newselectedWells[rowIndex][columnIndex] = true
      } else {
        newselectedWells[rowIndex] = { [columnIndex] : true }
      }
    } else {
      delete newselectedWells[rowIndex]
    }
  })

  dispatch(updateState({
    wells: newWells,
    selectedWells: newselectedWells,
    selectedRows: newselectedRows
  }))
}

export const toggleColumn = columnIndex => (dispatch, getState) => {
  const { wells, selectedWells, selectedColumns } = getState()

  const newWells = [...wells]
  const newselectedWells = { ...selectedWells }
  const newselectedColumns = { ...selectedColumns }

  newselectedColumns[columnIndex] = !newselectedColumns[columnIndex]

  newWells.forEach((row, rowIndex) => {
    row[columnIndex].selected = newselectedColumns[columnIndex]

    if (newselectedColumns[columnIndex]) {
      if (newselectedWells[rowIndex]) {
        newselectedWells[rowIndex][columnIndex] = true
      } else {
        newselectedWells[rowIndex] = { [columnIndex] : true }
      }
    } else {
      if (newselectedWells[rowIndex]) {
        delete newselectedWells[rowIndex][columnIndex]
      }
    }
  })

  dispatch(updateState({
    wells: newWells,
    selectedWells: newselectedWells,
    selectedColumns: newselectedColumns
  }))
}

export const toggleAll = (dispatch, getState) => {
  const { wells, allWellsSelected } = getState()

  const newWells = [...wells]
  const newselectedWells = {}
  const newAllWellsSelected = !allWellsSelected

  newWells.forEach((row, rowIndex) => {
    row.forEach((well, columnIndex) => {
      well.selected = newAllWellsSelected

      if (newAllWellsSelected) {
        if (newselectedWells[rowIndex]) {
          newselectedWells[rowIndex][columnIndex] = true
        } else {
          newselectedWells[rowIndex] = { [columnIndex]: true }
        }
      }
    })
  })

  dispatch(updateState({
    selectedWells: newselectedWells,
    allWellsSelected: newAllWellsSelected
  }))
}
