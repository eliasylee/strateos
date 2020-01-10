import { UPDATE_STATE } from '../constants/redux-constants'

const DEFAULT_STATE = {
  // wells: [ [ row ], [ row ], ..., [ row ] ]
  // row: [ { well }, { well }, ..., { well } ]
  wells: [],
  // selectedWells: { row indices : { Object } }
  // Object: { column indices : true / false }
  selectedWells: {},
  // selectedRows: { row indices : true / false }
  selectedRows: {},
  // selectedColumns: { column indices : true / false }
  selectedColumns: {},
  // allWellsSelected: true / false
  allWellsSelected: false
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
