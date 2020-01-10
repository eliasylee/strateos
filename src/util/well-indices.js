// 64 is the character code of '@',
// the last character before 'A'
export const getRowFromIndex = index => String.fromCharCode(64 + parseInt(index))

const _getColumnFromIndex = index => index

export const getWellIndex = (row, column) =>
  `${getRowFromIndex(row)}${_getColumnFromIndex(column)}`
